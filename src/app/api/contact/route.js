import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export async function POST(request) {
    try {
        await dbConnect();
        const data = await request.json();
        console.log(data)
        const contact = await Contact.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            additional: data.additional
        });
        console.log(contact)
        return NextResponse.json({ 
            message: 'Application submitted successfully' 
        }, { status: 201 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ 
            error: 'Failed to submit application' 
        }, { status: 500 });
    }
}
