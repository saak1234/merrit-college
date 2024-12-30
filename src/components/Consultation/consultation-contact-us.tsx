"use client";

import { motion } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";
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
    const [status, setStatus] = useState<string>("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if(name=="phone"){
            const numbersOnly = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({...prev,[name]: numbersOnly
      }));
        }
        else{
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", phone: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "A valid email is required.";
            isValid = false;
        }
        if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "A valid phone number is required.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/book-your-consultations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert("Failed to submit. Please try again.");
            }
        } catch (error) {   
            console.log("Error submitting form:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
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
                    className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold text-green-900 mb-4">Book Your Consultation</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none ${
                                    errors.name ? "border-red-500" : ""
                                }`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none ${
                                    errors.email ? "border-red-500" : ""
                                }`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none ${
                                    errors.phone ? "border-red-500" : ""
                                }`}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className={`w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none `}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <GlobalButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </GlobalButton>
                        {status === 'success' && (
              <p className="text-green-600 text-center">Form submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
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
                                        <MinusCircle className="text-green-900 w-6 h-6" />
                                    ) : (
                                        <PlusCircle className="text-green-900 w-6 h-6" />
                                    )}
                                </div>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        transition={{ duration: 0.3 }}
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
