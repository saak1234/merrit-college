"use client";

import { motion } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What documents are required for a visa application?",
        answer:
            "Documents typically required include a valid passport, completed application form, proof of financial resources, invitation letter (if applicable), and recent photographs.",
    },
    {
        question: "How long does the visa process take?",
        answer:
            "The processing time varies depending on the country and visa type. It can range from a few days to several weeks.",
    },
    {
        question: "What should I do if my visa application is rejected?",
        answer:
            "If your visa is rejected, review the rejection reasons, gather the necessary documents, and reapply. Our team can assist you in understanding the next steps.",
    },
];

const VisaFAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                        Here are answers to some of the most common questions about visa applications.
                    </p>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h4 className="text-lg font-semibold text-green-800">
                                        {faq.question}
                                    </h4>
                                    {activeIndex === index ? (
                                        <MinusCircle className="text-green-800 w-6 h-6" />
                                    ) : (
                                        <PlusCircle className="text-green-700 w-6 h-6" />
                                    )}
                                </div>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        transition={{ duration: 0.3 }}
                                        className="text-gray-700 mt-4"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-green-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
                            Have More Questions? Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisaFAQSection;
