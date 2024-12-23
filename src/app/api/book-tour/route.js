import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/BookingSchema';

export async function POST(request) {
    try {
        await dbConnect();
        const data = await request.json();
        const booking = await Booking.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredDate: data.preferredDate,
            preferredTime: data.preferredTime,
            programInterest: data.programInterest,
            additionalNotes: data.additionalNotes
        });
        
        console.log(booking)
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
