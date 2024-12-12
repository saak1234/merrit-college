"use client";

import Image from "next/image";
import {FC} from "react";

const ClubHeroSection: FC = () => {
    return (
        <section className="relative bg-dark-green text-green-900 py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h1 className="text-8xl font-bold mb-6">
                    Merit College Student’s Club
                </h1>
                {/* Subtitle */}
                <p className="text-lg font-bold mb-8">
                    Explore a world of opportunities and creativity through our student clubs.
                    Whether it&#39;s academics, sports, arts, or social activities, there&#39;s a club
                    for everyone. Join us and be part of an exciting community!
                </p>
                {/* CTA */}
                <button
                    className="bg-green-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition">
                    Discover More
                </button>
            </div>
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="/clubs-hero.jpg"
                    alt="Clubs Hero Banner"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </section>
    );
};

export default ClubHeroSection;
