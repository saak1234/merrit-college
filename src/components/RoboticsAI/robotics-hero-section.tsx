"use client";

import Image from "next/image";

const RoboticsHeroSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:gap-16">
                {/* Left Section: Content */}
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <span className="text-green-800 font-semibold uppercase tracking-wider">
                        Join Us
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight mt-4">
                        Robotics for Your Kids.
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Empower your children to explore the world of robotics and artificial
                        intelligence. Build a brighter future with engaging, hands-on learning and expert guidance.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                        <button className="bg-green-800 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105">
                            Our Classes
                        </button>
                        <button className="flex items-center space-x-3 text-green-800 hover:text-green-800 transition transform hover:scale-105">
                            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-green-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-4.596 2.65c-.667.384-1.256-.062-1.156-.816l.978-6.133a1 1 0 011.356-.808l4.596 2.65c.666.384.256 1.464-.522 1.464z"
                                    />
                                </svg>
                            </span>
                            <span className="font-semibold">Watch Video</span>
                        </button>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-50 via-white to-transparent blur-lg -z-10"></div>
                    <Image
                        src="/robotics-hero.png"
                        alt="Kids learning robotics"
                        width={850}
                        height={850}
                        className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default RoboticsHeroSection;
