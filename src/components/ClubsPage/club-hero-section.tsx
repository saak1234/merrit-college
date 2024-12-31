"use client";

import Image from "next/image";
import { FC } from "react";

const ClubHeroSection: FC = () => {
    return (
        <section className="relative bg-secondary-green">
            <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-shade">
                            Merit College Student&#39;s Club
                        </h1>
                        <p className="text-lg sm:text-base text-green-shade">
                            Explore a world of opportunities and creativity through our student clubs.
                            Whether it&#39;s academics, sports, arts, or social activities, there&#39;s a club
                            for everyone. Join us and be part of an exciting community!
                        </p>
                    </div>
                    <div className="">
                        <div className="relative h-64 sm:h-40 md:h-[220px] lg:h-[320px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/clubs-hero.jpg"
                                alt="Students enjoying club activities"
                                width={500}
                                height={500}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-green-50 to-green-100 opacity-50"
            />
        </section>
    );
};

export default ClubHeroSection;
