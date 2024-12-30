import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Consultations from '@/models/consultations-schema';

interface ConsultationData {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: ConsultationData = await request.json();

        const consultations = await Consultations.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredDate: data.preferredDate,
            preferredTime: data.preferredTime,
        });

        console.log(consultations);

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
        const consultations = await Consultations.find({});
        console.log('Retrieved applications:', consultations);
        return NextResponse.json(consultations, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}