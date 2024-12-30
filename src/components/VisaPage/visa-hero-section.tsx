"use client";

import Image from "next/image";
import React from "react";
import GlobalButton from "../ui/global-button";
const VisaHeroSection = () => {
    return (
        <div className="relative w-full bg-secondary-green p-10">
            <div className="container mx-auto max-w-screen-xl px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-shade mb-6">
                            Visa Application
                        </h1>
                        <p className="text-base md:text-lg text-green-shade mb-8">
                            Simplify your travel needs with our expert visa services. Our streamlined
                            process ensures quick and hassle-free visa applications, so you can focus
                            on planning your trip.
                        </p>
                        <GlobalButton
                        // className="px-6 md:px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
                        >
                            Get Started
                        </GlobalButton>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/visa-hero.jpg"
                                alt="Visa Application Process"
                                className="object-cover"
                                fill
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaHeroSection;
