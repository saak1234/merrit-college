"use client";
import React, { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Is this actually a 1-on-1 program?",
        answer:
            "Yes. You are working 1-on-1 with your coach, 100% of the time. There are no group classes or divided attention. You have exclusive access to a world-class youth coach, ready to go the extra mile.",
    },
    {
        question: "What is included in this service?",
        answer: "This service includes comprehensive application coaching, essay reviews, mock interviews, and more.",
    },
    {
        question: "How many university applications does this program support?",
        answer: "This program supports up to 5 university applications, tailored to your specific goals.",
    },
    {
        question: "What programs have your students been admitted to?",
        answer: "Our students have been admitted to top programs including Ivy League schools, Stanford, MIT, and more.",
    },
    {
        question: "How are sessions conducted and how often do they take place?",
        answer: "Sessions are conducted virtually and can be scheduled weekly or as per your needs.",
    },
    {
        question: "Is this program flexible?",
        answer: "Yes, we offer flexible scheduling to accommodate your busy lifestyle.",
    },
    {
        question: "How do I apply for a spot in the program?",
        answer: "You can apply by scheduling a free consultation to discuss your goals and get started.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-secondary-green">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-green-shade mb-8">
                    Common <span className="text-green-600">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4 className="text-lg font-bold text-gray-800">
                                    {faq.question}
                                </h4>
                                {openIndex === index ? (
                                    <MinusCircle className="text-green-800 w-6 h-6" />
                                ) : (
                                    <PlusCircle className="text-green-700 w-6 h-6" />
                                )}
                            </div>
                            {openIndex === index && (
                                <motion.p
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-800 mt-2"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
