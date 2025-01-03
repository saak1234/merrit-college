import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
    try {
        const token = request.headers.get('Authorization')?.split(' ')[1];

        // If no token is provided, return an error
        if (!token) {
            return NextResponse.json(
                { message: "Token not provided" },
                { status: 401 }
            );
        }

        // Verify the token using the JWT secret
        const decoded = verify(token, process.env.JWT_SECRET!);

        // Return the decoded data if the token is valid
        return NextResponse.json(
            { 
                success: true, 
                message: "Token is valid", 
                user: decoded 
            }
        );

    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json(
            { success: false, message: "Invalid token" },
            { status: 401 }
        );
    }
}
    