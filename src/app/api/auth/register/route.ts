// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/user-schema';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const { name, email, password } = await request.json();

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 400 }
            );
        }

        // Create user
        const user = await User.create({ name, email, password });

        // Remove password from response
        const userObject = user.toObject();
        const userWithoutPassword = { ...userObject };
        delete userWithoutPassword.password;

        // return NextResponse.json(
        //     {
        //         message: "User registered successfully",
        //         user: userWithoutPassword
        //     },
        //     { status: 201 }
        // );
        const token = sign(
            {
                userId: user._id,
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET!,
            { expiresIn: '24h' }
        );
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
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400 // 24 hours
        });
        return response;

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: "Failed to register user" },
            { status: 500 }
        );
    }
}
