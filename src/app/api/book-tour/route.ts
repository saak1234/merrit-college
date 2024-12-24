import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/booking-schema';

interface BookingData {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
    programInterest: string;
    additionalNotes?: string; // Optional field
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: BookingData = await request.json();

        const booking = await Booking.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredDate: data.preferredDate,
            preferredTime: data.preferredTime,
            programInterest: data.programInterest,
            additionalNotes: data.additionalNotes
        });

        console.log(booking);

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
