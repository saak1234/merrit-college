// components/ContactUs/ContactUs.tsx
"use client";

import { motion } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How Can I Pay?",
        answer:
            "Globally engineer high-payoff potentialities with impactful e-business. Interactively leverage existing backward-compatible ideas with user-centric e-services.",
    },
    {
        question: "What Is Process To Get Expert Team?",
        answer:
            "Efficiently synthesize leading-edge core competencies through innovative experiences. Dynamically transform technically sound action items.",
    },
    {
        question: "How Does About Online Services?",
        answer:
            "Enthusiastically unleash client-centric scenarios to stay competitive in the ever-changing marketplace.",
    },
];

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Get In Touch</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        <textarea
                            placeholder="Write Message"
                            rows={4}
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Submit Request
                        </button>
                    </form>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Frequently Asked Question
                    </h3>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Have Your Any Question?
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-4 rounded-lg shadow-md"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h4 className="text-lg font-bold text-gray-800">
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
                                        className="text-gray-800 mt-2"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className=" w-full mt-6 bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                        Add Questions
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
