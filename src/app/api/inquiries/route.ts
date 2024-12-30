import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inquiry from '@/models/inquiry-schema';

interface InquiryData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: InquiryData = await request.json();

        const inquiry = await Inquiry.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        });

        return NextResponse.json(
            {
                message: 'Inquiry submitted successfully',
                data: inquiry,
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Inquiry submission error:', error);

        return NextResponse.json(
            { error: 'Failed to submit inquiry' },
            { status: 500 }
        );
    }
}

export async function GET(): Promise<NextResponse>{
    try{
        await dbConnect();
        const inquiries=await Inquiry.find({});
        console.log('Retrieved inquiries:', inquiries);
        return NextResponse.json(inquiries,{status:200});
    }
    catch(error){
        console.error('Error:',error);
        return NextResponse.json(
            {error:'Failed to fetch inquiries'},
            {status:500}
        );
    }
}
