"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const AboutSection = () => {
    return (
        <section className="bg-gray-50 py-16 relative overflow-hidden">
            {/* Background Design */}
            <div className="absolute inset-0 bg-green-50 rounded-full -z-10 transform scale-150"></div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 px-6">
                {/* Left Section: Image */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/about-image.jpg" // Replace with your image in the public folder
                        alt="Students collaborating in the library"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Section: Content */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-green-900 mb-4">About Merit College</h2>
                    <p className="text-gray-700 mb-6">
                        Discover unparalleled opportunities to build your career with expert guidance, innovative programs, and a commitment to excellence in education. Your journey to success starts here.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                        {[
                            "Graduate Programs",
                            "Undergraduate",
                            "Doctoral Degrees",
                            "International Hubs",
                            "Alumni & Giving",
                            "Global Students",
                        ].map((item, index) => (
                            <p key={index} className="flex items-center text-gray-600">
                                <span className="text-green-600 font-bold mr-2">✔</span>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-8 mb-8">
                        {[
                            { value: "65+", label: "Years of Experience" },
                            { value: "30k+", label: "Global Students" },
                            { value: "52+", label: "Student Nationalities" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <h3 className="text-4xl font-bold text-green-900">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.button
                        className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start your application →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
