"use client";

import React from "react";
import GlobalButton from "../ui/global-button";
const ConsultationHeroSection = () => {
    return (
        <section className="relative bg-gray-100 text-green-900 py-20">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* Heading */}
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Expert Guidance for Your Academic Journey
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg lg:text-xl mb-8">
                        Book a free consultation with our experienced counselors to get personalized academic advice.
                        Let&#39;s help you achieve your goals.
                    </p>

                    {/* Call-to-action Buttons */}
                    <div className="flex flex-col lg:flex-row justify-center gap-4">
                        <GlobalButton
                            // className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                            aria-label="Get started with a free consultation">
                            Get Started
                        </GlobalButton>
                        <GlobalButton
                            // className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                            aria-label="Learn more about our services">
                            Learn More
                        </GlobalButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationHeroSection;
