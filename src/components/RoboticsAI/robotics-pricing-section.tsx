"use client";

import { FC } from "react";

const pricingPlans = [
    {
        price: "$120",
        title: "For 1st and 2nd Graders",
        description: "1 class per week\nA lot of practice",
        bgColor: "bg-gray-100",
        buttonColor: "bg-green-900 hover:bg-green-700 text-white",
    },
    {
        price: "$150",
        title: "For 6th to 8th Graders",
        description: "2 classes per week\nTheory and practice",
        bgColor: "bg-green-900",
        buttonColor: "bg-white hover:bg-gray-100 text-green-900 font-bold",
        highlighted: true,
    },
    {
        price: "$200",
        title: "For Teenagers",
        description: "2 classes per week\nOwn graduation project",
        bgColor: "bg-gray-100",
        buttonColor: "bg-green-900 hover:bg-green-700 text-white",
    },
];

const RoboticsPricingSection: FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-green-900 font-semibold uppercase tracking-wide">
                        Price
                    </span>
                    <h2 className="text-4xl font-bold text-green-900 mt-2">
                        Our Pricing.
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg">
                        We have different pricing plans based on the age of our students.
                    </p>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center rounded-lg shadow-lg p-6 ${
                                plan.bgColor
                            } ${
                                plan.highlighted
                                    ? "transform scale-105 transition-transform duration-300 border-2 border-green-700"
                                    : ""
                            }`}
                        >
                            {/* Price */}
                            <div
                                className={`text-4xl font-bold ${
                                    plan.highlighted ? "text-white" : "text-green-900"
                                }`}
                            >
                                {plan.price}
                            </div>
                            <span
                                className={`text-sm ${
                                    plan.highlighted ? "text-gray-300" : "text-green-900"
                                }`}
                            >
                                per month —
                            </span>

                            {/* Title */}
                            <h3
                                className={`mt-4 text-xl font-semibold ${
                                    plan.highlighted ? "text-white" : "text-black"
                                }`}
                            >
                                {plan.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`mt-2 ${
                                    plan.highlighted ? "text-gray-300" : "text-gray-600"
                                } whitespace-pre-line`}
                            >
                                {plan.description}
                            </p>

                            {/* Button */}
                            <button
                                className={`mt-6 py-3 px-6 rounded-lg font-bold shadow-md ${plan.buttonColor} transition`}
                            >
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsPricingSection;
