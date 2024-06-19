import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import jwt  from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface User {
    id: string;
    email: string;
    password: string;
}

export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if(req.method === 'POST') {
        const { email, password} = req.body

        if (!email || !password) {
            return res.status(400).json({message: 'l\'mail et le password est obligatoire'});
        }

        try {
            const user: User | null = await prisma.user.findUnique({
                where : {email},
            });
        

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email
                },
                process.env.JWT_SECRET as string,
                { expiresIn: '15h' }
            );
            res.status(200).json({ token });
            } else {
            res.status(401).json({ message : 'Email invalide ou mot de passe'});
        }
        } catch (error) {
            res.status(500).json({ message: 'Erreur du serveur'});
        }
    } else {
        res.status(405).json({message : 'Methode non autorisé'});
    }
}