import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {

    try {
        const user = await request.json();
        const users = await prisma.user.findMany();
        
        return NextResponse.json({ users });
    } catch (error) {
        console.error('Erreur lors de la recherche des utilisateurs:', error);
        return NextResponse.json({ error: 'Erreur lors de la recherche des utilisateurs' }, { status: 500 });
    }
}