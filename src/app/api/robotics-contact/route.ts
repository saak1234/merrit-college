import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/robo-contact-schema';

interface ContactData {
    name: string;
    email: string;
    phone: string;
    additional?: string; 
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: ContactData = await request.json();
        console.log(data);

        const contact = await Contact.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            additional: data.additional || "no additional information provided",
        });

        console.log(contact);

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
export async function GET(): Promise<NextResponse> {
    try {
        await dbConnect();

        const contacts = await Contact.find({});
        console.log('Retrieved contacts:', contacts);

        return NextResponse.json(contacts, { status: 200 });

    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json(
            { error: 'Failed to fetch contacts' },
            { status: 500 }
        );
    }
}
