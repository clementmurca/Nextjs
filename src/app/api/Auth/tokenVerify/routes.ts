import jwt from "jsonwebtoken";
import { NextApiResponse, NextApiRequest } from "next";
import Error from "next/error";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const { token } = req.body
        const secret = process.env.JWT_SECRET

        if(!secret) {
            res.status(500).json({message : 'le JWT secret n\'est pas défini', Error})
            return;
        }

        try {
            const decoded = jwt.verify(token, secret)
            res.status(200).json({user : decoded})
        } catch (error) {
            res.status(401).json({message : 'token non validé'})
        }
    } else {
        res.status(405).json({message : 'la methode est pas autorisé'})
    }
}
