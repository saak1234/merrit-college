import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inquiry from '@/models/Inquiry';

export async function POST(request) {
    try {
        await dbConnect();
        const data = await request.json();
        
        const inquiry = await Inquiry.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        });
        return NextResponse.json({ 
            message: 'Inquiry submitted successfully',
            data: inquiry 
        }, { status: 201 });

    } catch (error) {
        console.error('Inquiry submission error:', error);
        return NextResponse.json({ 
            error: 'Failed to submit inquiry'
        }, { status: 500 });
    }
}
