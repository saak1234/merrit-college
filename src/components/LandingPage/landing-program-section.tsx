"use client";

import { useState } from "react";
import Image from "next/image"
type Program = {
    title: string;
    description: string;
    image: string;
};

const programsData: Record<string, Program> = {
    "Diploma/ Secondary School Program": {
        title: "Diploma/ Secondary School Program",
        description:
            "Our secondary school program prepares students for their future academic and career paths with a robust curriculum and personalized guidance.",
        image: "/academic-9.jpg",
    },
    "University Prep Program": {
        title: "University Prep Program",
        description:
            "The University Prep Program is designed to equip students with the skills and knowledge required for a smooth transition to university life.",
        image: "/academic-8.jpg",
    },
    "Leadership Program": {
        title: "Leadership Program",
        description:
            "Our Leadership Program fosters essential leadership skills through experiential learning and collaborative activities.",
        image: "/academic-7.jpg",
    },
    "Student Counselling Program": {
        title: "Student Counselling Program",
        description:
            "The Student Counselling Program provides guidance and support for personal, academic, and career challenges.",
        image: "/academic-5.jpg",
    },
    "Winter Camp": {
        title: "Winter Camp",
        description:
            "Our Winter Camp offers students an opportunity to learn and grow during the winter break with fun and educational activities.",
        image: "/academic-4.jpg",
    },
};

const ProgramSection = () => {
    const [selectedProgram, setSelectedProgram] = useState<string>(
        "Diploma/ Secondary School Program"
    );

    const program = programsData[selectedProgram];

    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-shade mb-4 text-center">
                    Programs Offered By Merit College
                </h2>
                <p className="text-center text-gray-700 mb-8">
                    Merit College offers a transformational, academic, and
                    life-long journey for our students. They choose us because
                    we serve the following roles.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {Object.keys(programsData).map((programName) => (
                        <button
                            key={programName}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedProgram === programName
                                    ? "bg-green-shade text-white"
                                    : "bg-white border border-green-900 text-green-shade hover:bg-secondary-green"
                            }`}
                            onClick={() => setSelectedProgram(programName)}
                        >
                            {programName}
                        </button>
                    ))}
                </div>

                {/* Program Card */}
                <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Image */}
                    <div className="w-full lg:w-1/3">
                        <Image
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content */}
                    <div className="w-full lg:w-2/3 p-6">
                        <h3 className="text-2xl font-bold text-green-shade mb-4">
                            {program.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{program.description}</p>
                        <button
                            className="bg-green-shade text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition">
                            Explore More →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
