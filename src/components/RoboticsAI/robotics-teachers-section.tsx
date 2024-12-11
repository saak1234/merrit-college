"use client";

import Image from "next/image";

const teachers = [
    {
        name: "Luke Maisner",
        role: "Senior Teacher",
        image: "/robotics-teacher-1.webp",
    },
    {
        name: "Andrew Johnson",
        role: "Founder",
        image: "/robotics-teacher-2.webp",
    },
    {
        name: "Ann Keppler",
        role: "Junior Teacher",
        image: "/robotics-teacher-3.webp",
    },
];

const RoboticsTeachersSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-green-900 font-semibold uppercase tracking-wide">
                        Our Team
                    </span>
                    <h2 className="text-4xl font-bold text-green-900 mt-2">
                        Our Teachers.
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg">
                        Our teachers know how to find an approach to any child and have a deep knowledge of robotics.
                    </p>
                </div>

                {/* Teachers Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-96">
                                <Image
                                    src={teacher.image}
                                    alt={`${teacher.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>

                            {/* Info */}
                            <div className="text-center py-6 px-4">
                                <h3 className="text-xl font-bold text-green-900">{teacher.name}</h3>
                                <p className="text-gray-600 mt-2">{teacher.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsTeachersSection;
