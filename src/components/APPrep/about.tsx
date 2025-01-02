// components/About/About.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import GlobalButton from "../ui/global-button";

const About = () => {
    return (
        <section className="bg-gray-50 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 relative"
                >
                    {/* Main Image */}
                    <Image
                        src="/ap-course-about-main.png"
                        alt="Institute Main Image"
                        width={350}
                        height={400}
                        className="z-10 relative"
                    />

                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
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
                            <CheckCircle className="text-green-600 w-6 h-6"/>
                            <span className="text-gray-700">Best Curriculum</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-600 w-6 h-6"/>
                            <span className="text-gray-700">Course From Expert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-600 w-6 h-6"/>
                            <span className="text-gray-700">Highly Experienced</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-600 w-6 h-6"/>
                            <span className="text-gray-700">350+ Quality Topics</span>
                        </div>
                    </div>

                    <GlobalButton
                        // whileHover={{scale: 1.05}}
                        className="mt-6"
                        // className="w-full mt-6 bg-green-900 text-white px-8 py-3 rounded-lg"
                    >
                        Book Appointment
                    </GlobalButton>
                    
                </motion.div>
            </div>
        </section>
    );
};

export default About;
