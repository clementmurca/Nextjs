import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    const { token } = await request.json();
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        return NextResponse.json({ status: 500, body: 'le JWT secret n\'est pas défini' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        return NextResponse.json({ user: decoded });
    } catch (error) {
        return NextResponse.json({ status: 401, body: 'token non validé' });
    }
}
