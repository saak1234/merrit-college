"use client";

import { motion } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";
import GlobalButton from "../ui/global-button";

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

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
    });

    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const numbersOnly = value.replace(/[^0-9]/g, "");
            setFormData((prev) => ({
                ...prev,
                [name]: numbersOnly,
            }));
                setFormErrors((prev) => ({
                    ...prev,
                    phone: "",
                }));
                if(numbersOnly.length > 10) {
                    setFormData(prev => ({
                      ...prev,
                      [name]: numbersOnly.slice(0, 10)
                    }));
                  }

        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        // Reset other errors when typing
        if (formErrors[name as keyof typeof formErrors]) {
            setFormErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let errors = {};
        if (!formData.name.trim()) {
            errors = { ...errors, name: "Name is required." };
        }
        if (!formData.phone.trim()) {
            errors = { ...errors, phone: "Phone number cannot be empty." };
        }
        if (!formData.email.trim()) {
            errors = { ...errors, email: "Email is required." };
        }
        if (!formData.location.trim()) {
            errors = { ...errors, location: "location cannot be empty." };
        }

        setFormErrors(errors as typeof formErrors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setStatus("submitting");

        try {
            const response = await fetch("/api/ap-prep-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    location: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.log(error);
            setStatus("error");
        }
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
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                        Get In Touch
                    </h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        {formErrors.name && (
                            <p className="text-red-600 text-sm">{formErrors.name}</p>
                        )}

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        {formErrors.phone && (
                            <p className="text-red-600 text-sm">{formErrors.phone}</p>
                        )}

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        {formErrors.email && (
                            <p className="text-red-600 text-sm">{formErrors.email}</p>
                        )}

                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        />
                        {formErrors.location && (
                            <p className="text-red-600 text-sm">{formErrors.location}</p>
                        )}

                        <textarea
                            placeholder="Write Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-green-800 outline-none"
                        ></textarea>


                        <GlobalButton type="submit" className="justify-self-center">
                            {status === "submitting" ? "Submitting..." : "Submit Request"}
                        </GlobalButton>
                        {status === "success" && (
                            <p className="text-green-600 text-center">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-center">
                                Failed to send message. Please try again.
                            </p>
                        )}
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
                        Have Any Questions?
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
                    <GlobalButton className="justify-self-center mt-4">
                        Add Question
                    </GlobalButton>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
