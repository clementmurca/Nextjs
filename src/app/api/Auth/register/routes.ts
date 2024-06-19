import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface RequestBody {
    email: string;
    password: string;
}

interface User {
    email: string;
    password: string;
}

export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    
    if(req.method === 'POST') {
        const { email, password }: RequestBody = req.body;
        const salt: string = bcrypt.genSaltSync(10);
        const hashedPassword: string = bcrypt.hashSync(password, salt);
        
        try {
            const newUser: User = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword
                },
            });
            res.status(201).json({ newUser });
        } catch(error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: "Création d'un utilisateur a échoué", error: error.message });
            } else {
                res.status(500).json({ message: "Création d'un utilisateur a échoué", error: "Erreur inconnue" });
            }
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
