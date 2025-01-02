"use client";

import {ThumbsUp, Bot, Award} from "lucide-react";

const RoboticsFeaturesSection = () => {
    const features = [
        {
            icon: <ThumbsUp className="text-green-600 w-10 h-10"/>,
            title: "Experience.",
            description:
                "Children get real robotics experience and create their own high-tech projects.",
        },
        {
            icon: <Bot className="text-green-600 w-10 h-10"/>,
            title: "Practice.",
            description:
                "We've kept boring theory to a minimum. During each lesson, kids perform practical tasks.",
        },
        {
            icon: <Award className="text-green-600 w-10 h-10"/>,
            title: "Skills.",
            description:
                "Real skills can determine your kid's future profession or become a trendy hobby.",
        },
    ];

    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-green-700 font-semibold uppercase tracking-wide">
                    Features
                </h3>
                <h2 className="text-4xl font-bold text-black mt-2">
                    RoboTech at a Glance.
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    We offer classes that are really interesting for your children.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center items-center mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-black mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsFeaturesSection;
