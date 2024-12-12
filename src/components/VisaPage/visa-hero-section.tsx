"use client";

import Image from "next/image";
import React from "react";

const VisaHeroSection = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/visa-hero.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="blur-sm"
                />
            </div>

            {/* Overlay Text */}
            <div className="relative z-10 h-full flex items-center bg-gradient-to-r from-black/60 to-transparent pl-10">
                <div className="text-white max-w-2xl px-6">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
                        Visa Application
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        Simplify your travel needs with our expert visa services. Our streamlined
                        process ensures quick and hassle-free visa applications, so you can focus
                        on planning your trip.
                    </p>
                    <button
                        className="mt-8 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisaHeroSection;