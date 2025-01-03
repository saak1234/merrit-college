// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/user-schema';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { email, password } = body;

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find user and include password field
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Generate token
        const token = sign(
            { 
                userId: user._id,
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET!,
            { expiresIn: '24h' }
        );

        // Create response with token
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

        // Set HTTP-only cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400 // 24 hours
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, message: "Authentication failed" },
            { status: 500 }
        );
    }
}
