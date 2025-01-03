// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/user-schema';

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
        const { password: _, ...userWithoutPassword } = user.toObject();

        return NextResponse.json(
            { 
                message: "User registered successfully", 
                user: userWithoutPassword 
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: "Failed to register user" },
            { status: 500 }
        );
    }
}
