"use client";

import { FC } from "react";
import { ClipboardCheck, FileText, ShieldCheck, CreditCard, Clock } from "lucide-react";
import GlobalButton from "../ui/global-button";
const steps = [
    {
        icon: <Clock className="w-6 h-6 text-green-600" />,
        title: "Quick Approval",
        description: "Approval within 72 hours.",
    },
    {
        icon: <ClipboardCheck className="w-6 h-6 text-green-600" />,
        title: "No Interest Charges",
        description: "100% interest-free process.",
    },
    {
        icon: <FileText className="w-6 h-6 text-green-600" />,
        title: "Minimal Documentation",
        description: "Only essential documents required.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
        title: "No Collateral Required",
        description: "Completely hassle-free.",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-green-600" />,
        title: "Full Refund Policy",
        description: "Refund within 30 days.",
    },
];

const VisaApplicationStepsSection: FC = () => {
    return (
        <section className="py-16 bg-secondary-green">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    {/*<h2 className="text-3xl font-bold text-green-900">*/}
                    {/*    Visa Application*/}
                    {/*</h2>*/}
                    {/*<p className="text-gray-700 mt-2 text-lg">*/}
                    {/*    Simplified and hassle-free visa application process*/}
                    {/*    to make your dreams come true. write a paragraph about*/}
                    {/*    this write a paragraph about this </p>*/}
                </div>

                {/* Steps */}
                <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                        Steps
                    </h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 right-0 top-1/3 h-0.5 bg-green-200 -translate-y-1/2"/>

                        {/* Timeline Items */}
                        <div className="flex justify-between relative">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Icon Circle */}
                                    <div
                                        className="w-12 h-12 rounded-full bg-white border-2 border-green-200 flex items-center justify-center z-10">
                                        {step.icon}
                                    </div>
                                    {/* Title */}
                                    <p className="text-xs text-gray-600 text-center mt-2 max-w-[100px]">
                                        {step.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <div className="text-center mt-8 flex justify-center">
                        <GlobalButton
                            // className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                            >
                            Apply for Visa Applicaion
                        </GlobalButton>
                    </div>
                </div>

                {/*/!* Call to Action *!/*/}
                {/*<div className="text-center mt-10">*/}
                {/*    <button*/}
                {/*        className="bg-green-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition">*/}
                {/*        Apply for Visa Assistance*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default VisaApplicationStepsSection;
