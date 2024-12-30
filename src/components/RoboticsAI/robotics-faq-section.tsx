"use client";

import {motion} from "framer-motion";
import {PlusCircle, MinusCircle} from "lucide-react";
import {useState, ChangeEvent, FormEvent} from "react";

const faqs = [
    {
        question: "What is the right age to join the courses?",
        answer:
            "Children as young as 6 years old can start learning how to build robots and program them.",
    },
    {
        question: "What is the class size and configuration?",
        answer:
            "The class will have a maximum of 12 kids. Children work in small teams to build and code robots.",
    },
    {
        question: "Do kids need experience with robotics?",
        answer:
            "No prior experience or knowledge of robotics/programming is required.",
    },
];

const RoboticsFAQSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        additional: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        additional: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if(name === "phone") {
        const validPhone = value.replace(/[^0-9]/g, "");
        setFormData((prev) => ({
            ...prev,
            [name]: validPhone,
        }));
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const validateForm = () => {
        let isValid = true;
        const newErrors: typeof errors = {
            name: "",
            phone: "",
            email: "",
            additional: "",
        };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Enter a valid email address.";
            isValid = false;
        }

        if (formData.additional.length > 200) {
            newErrors.additional = "Message cannot exceed 200 characters.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const response = await fetch("/api/robotics-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Message sent successfully!");
                setSuccessMessage("Message sent successfully!");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    additional: "",
                });
                
            } else {
                console.log("Failed to send message");
                setSuccessMessage("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.log("Error sending message:", error);
            setSuccessMessage("An error occurred while sending your message.");
        }
    };

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
                {/* FAQ Section */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h3>
                    <p className="text-gray-600 mb-6">
                        Feel free to contact us to get any details or book a free lesson for your child!
                    </p>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
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

                {/* Contact Form */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-bold text-green-900 mb-4">Contact Us</h3>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                         {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                        <textarea
                            placeholder="Your Message"
                            name="additional"
                            value={formData.additional}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-900 outline-none"
                        ></textarea>
                        {errors.additional && <p className="text-red-600 text-sm mt-1">{errors.additional}</p>}
                        <button
                            type="submit"
                            className="w-full bg-green-900 text-white py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                        {successMessage && (
                        <p
                            className={`text-center mb-4 ${
                                successMessage.includes("successfully")
                                    ? "text-green-900"
                                    : "text-red-600"
                            }`}
                        >
                            {successMessage}
                        </p>
                    )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default RoboticsFAQSection;
