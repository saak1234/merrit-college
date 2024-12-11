// components/Hero/Hero.tsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gray-50 p-8 relative mb-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                {/* Left Content */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="text-center md:text-left md:w-1/2"
                >
                    <h3 className="text-lg text-gray-600">Start To New Journey</h3>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                        An Online Education Platform for Global Learners
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Online Education is to Advance Career Path & Total Earning Career
                        Future Path. It Is a Very Important Education Course.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <motion.button
                            whileHover={{scale: 1.05}}
                            className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >
                            Register Now
                        </motion.button>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >
                            Join Now
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1}}
                    className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center items-center"
                >
                    {/* Background Circle */}
                    <div className="absolute -z-10 w-[300px] h-[300px] bg-red-500 rounded-full"></div>
                    {/* Main Image */}
                    <Image
                        src="/hero-image.png"
                        alt="Hero Image"
                        width={350}
                        height={350}
                        className="z-10"
                    />
                    {/* Secondary Icon */}
                    <div className="absolute top-10 left-10 bg-white p-2 rounded-full shadow-lg">
                        <Image
                            src="/secondary-icon.jpg"
                            alt="Secondary Icon"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5, duration: 0.8}}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4"
            >
                <div className="text-center">
                    <h3 className="text-2xl font-bold">1000+</h3>
                    <p className="text-sm text-gray-600">Happy Students</p>
                </div>
                <div className="flex -space-x-2">
                    <Image
                        src="/student-1.jpg"
                        alt="Student 1"
                        className="w-8 h-8 rounded-full border"
                        width={32}
                        height={32}
                    />
                    <Image
                        src="/student-2.jpg"
                        alt="Student 2"
                        className="w-8 h-8 rounded-full border"
                        width={32}
                        height={32}
                    />
                    <Image
                        src="/student-3.jpg"
                        alt="Student 3"
                        className="w-8 h-8 rounded-full border"
                        width={32}
                        height={32}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
