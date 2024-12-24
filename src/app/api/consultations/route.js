import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Consultations from '@/models/ConsultationsSchema';

export async function POST(request) {
    try {
        await dbConnect();
        const data = await request.json();
        const consultations = await Consultations.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            preferredDate: data.preferredDate,
            preferredTime: data.preferredTime,
        });
        
        console.log(consultations)
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
