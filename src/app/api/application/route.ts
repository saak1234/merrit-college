import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Application from '@/models/application-schema';

interface ApplicationData {
    firstName: string;
    lastName: string;
    parentName: string;
    email: string;
    phone: string;
    course: string;
    education: string;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        await dbConnect();

        const data: ApplicationData = await request.json();
        console.log(data);

        const application = await Application.create({
            firstName: data.firstName,
            lastName: data.lastName,
            parentName: data.parentName,
            email: data.email,
            phone: data.phone,
            course: data.course,
            education: data.education
        });
        console.log(application);

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

        const applications = await Application.find({});
        console.log('Retrieved applications:', applications);

        return NextResponse.json(applications, { status: 200 });

    } catch (error) {
        console.error('Error:', error);

        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}
