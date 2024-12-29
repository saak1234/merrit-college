"use client";

import {motion} from "framer-motion";
import {PlusCircle, MinusCircle} from "lucide-react";
import {useState} from "react";
import GlobalButton from "../ui/global-button";

const faqs = [
    {
        question: "How can I schedule a consultation?",
        answer:
            "You can schedule a consultation by filling out the form on this page. Once we receive your details, our team will get in touch to confirm your appointment.",
    },
    {
        question: "What is included in the consultation?",
        answer:
            "Our consultation includes a detailed discussion with our expert advisors to understand your goals and provide personalized recommendations tailored to your needs.",
    },
    {
        question: "Are consultations available online?",
        answer:
            "Yes, we offer both online and in-person consultations to accommodate your preferences and availability.",
    },
];

const ConsultationContactUs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold text-green-900 mb-4">Book Your Consultation</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        ></textarea>
                        <GlobalButton
                            type="submit"
                            // className="w-full bg-green-900 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </GlobalButton>
                    </form>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Learn more about our consultation process.
                    </p>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {faq.question}
                                    </h4>
                                    {activeIndex === index ? (
                                        <MinusCircle className="text-green-900 w-6 h-6"/>
                                    ) : (
                                        <PlusCircle className="text-green-900 w-6 h-6"/>
                                    )}
                                </div>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{height: 0}}
                                        animate={{height: "auto"}}
                                        transition={{duration: 0.3}}
                                        className="text-gray-600 mt-2"
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultationContactUs;
