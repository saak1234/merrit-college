"use client";

import { motion } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";

const clubFaqs = [
    {
        question: "What activities are available in the clubs?",
        answer:
            "Our clubs offer a range of activities, including drama workshops, robotics competitions, sports tournaments, and music jam sessions.",
    },
    {
        question: "How do I join a club?",
        answer:
            "To join a club, simply explore the club of your interest on our platform, and click on the 'Join Now' button to complete your registration.",
    },
    {
        question: "Can I join multiple clubs?",
        answer:
            "Yes, you can join multiple clubs. We encourage students to explore diverse interests and engage in various activities.",
    },
];

const ClubFAQSection = () => {
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
                    <h3 className="text-3xl font-bold text-dark-green mb-6 text-center">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                        Get answers to the most common questions about our clubs.
                    </p>
                    <div className="space-y-6">
                        {clubFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h4 className="text-lg font-semibold text-dark-green">
                                        {faq.question}
                                    </h4>
                                    {activeIndex === index ? (
                                        <MinusCircle className="text-dark-green w-6 h-6" />
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
                        <button className="bg-dark-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
                            Still Have Questions? Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClubFAQSection;
