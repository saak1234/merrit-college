// components/About/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const About = () => {
    return (
        <section className="bg-red-50 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative"
                >
                    {/* Background Circle */}
                    <div className="absolute -z-10 w-[300px] h-[300px] bg-green-500 rounded-full -right-10 top-10"></div>
                    {/* Main Image */}
                    <Image
                        src="/about-main.jpg"
                        alt="Institute Main Image"
                        width={350}
                        height={400}
                        className="z-10 relative"
                    />
                    {/* Secondary Icon */}
                    <div className="absolute top-5 left-10 bg-white p-2 rounded-full shadow-lg">
                        <Image
                            src="/about-secondary.jpg"
                            alt="Secondary Icon"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>

                    {/* Info Badge */}
                    <div className="absolute bottom-5 left-10 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-2">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                        <div>
                            <h4 className="text-lg font-bold">25+ Years Experience</h4>
                        </div>
                    </div>

                    {/* Courses Badge */}
                    <div className="absolute top-24 right-0 bg-red-500 text-white shadow-lg rounded-full py-4 px-6">
                        <h4 className="text-2xl font-bold">535+</h4>
                        <p className="text-sm">Courses</p>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 mt-10 md:mt-0"
                >
                    <h3 className="text-lg text-gray-600 mb-2">About Our Institute</h3>
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        We Have Best Tutors & Feels Like Real Classroom
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Objectively redefine out the-box technologies multimedia-based
                        course networks proactively.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                            <span className="text-gray-700">Best Curriculum</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                            <span className="text-gray-700">Course From Expert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                            <span className="text-gray-700">Highly Experienced</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-red-500 w-6 h-6" />
                            <span className="text-gray-700">350+ Quality Topics</span>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 bg-red-500 text-white px-8 py-3 rounded-lg"
                    >
                        Book Appointment
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
