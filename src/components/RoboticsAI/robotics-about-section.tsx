"use client";

import Image from "next/image";

const RoboticsAboutSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Section: Image */}
                    <div className="lg:w-1/2 relative">
                        <div
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-gray-50 blur-xl -z-10"></div>
                        <div className="relative">
                            <Image
                                src="/robotics-about.webp"
                                alt="Child with robotics project"
                                width={500}
                                height={500}
                                className="rounded-full shadow-lg"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Section: Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-green-600 font-semibold uppercase tracking-wide">
                            What We Do
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
                            About RoboTech.
                        </h2>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                            We offer structured and interesting courses designed by IIT-IIM and PhD
                            professors. Robotics develops thinking, fine motor skills, and logic while
                            increasing creativity. Our programs are tailored for kids aged 6 to 16 to
                            explore the exciting world of robotics and technology.
                        </p>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                            Sign up for a free trial lesson, and your kid will love robotics!
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
                    {[
                        {value: 4, label: "Different courses."},
                        {value: 6, label: "Years of work."},
                        {value: 8, label: "Skilled teachers."},
                        {value: 12, label: "Kids in each group."},
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-green-900 text-white rounded-lg p-6 shadow-md"
                        >
                            <h3 className="text-4xl font-bold">{stat.value}</h3>
                            <p className="text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsAboutSection;
