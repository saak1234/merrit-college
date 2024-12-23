import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Application from '@/models/Application';
// const Application = require('@/models/Application');

export async function POST(request) {
    try {
        await dbConnect();
        const data = await request.json();
        const application = await Application.create({
            firstname: data.fistname,
            lastname:data.lastname,
            parentname: data.parentname,
            email: data.email,
            phone: data.phone,
            course: data.course,
            education:data.education
        });
        console.log(application)
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
