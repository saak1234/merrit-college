"use client";

import { FC } from "react";
import { ClipboardCheck, FileText, ShieldCheck, CreditCard, Clock } from "lucide-react";

const steps = [
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Quick Approval",
        description: "Approval within 72 hours.",
    },
    {
        icon: <ClipboardCheck className="w-8 h-8 text-white" />,
        title: "No Interest Charges",
        description: "100% interest-free process.",
    },
    {
        icon: <FileText className="w-8 h-8 text-white" />,
        title: "Minimal Documentation",
        description: "Only essential documents required.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "No Collateral Required",
        description: "Completely hassle-free.",
    },
    {
        icon: <CreditCard className="w-8 h-8 text-white" />,
        title: "Full Refund Policy",
        description: "Refund within 30 days.",
    },
];

const VisaApplicationStepsSection: FC = () => {
    return (
        <section className="py-16 bg-gray-200">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-green-900">
                        Visa Application Steps
                    </h2>
                    <p className="text-gray-700 mt-2 text-lg">
                        Simplified and hassle-free visa application process to make your dreams come true.
                    </p>
                </div>

                {/* Steps */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center md:w-1/5"
                            >
                                <div className="bg-green-900 p-4 rounded-full mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-black">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-10">
                    <button className="bg-green-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
                        Apply for Visa Assistance
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisaApplicationStepsSection;
