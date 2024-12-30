"use client";

import { Book, DollarSign, Globe, Users, Award } from "lucide-react";

const ServiceSection = () => {
    const benefits = [
        {
            icon: <DollarSign size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Full Tuition Coverage",
            description:
                "Receive financial support to cover 100% of your tuition fees, allowing you to focus solely on your studies without financial burden.",
        },
        {
            icon: <Book size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Access to Online Resources",
            description:
                "Get exclusive access to online libraries, learning platforms, and materials to enhance your knowledge and skills.",
        },
        {
            icon: <Users size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Networking Opportunities",
            description:
                "Connect with a diverse community of scholars, industry leaders, and alumni to build lasting professional relationships.",
        },
        {
            icon: <Award size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Exclusive Mentorship Programs",
            description:
                "Participate in personalized mentorship programs that guide you through career planning and academic success.",
        },
        {
            icon: <Globe size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Global Recognition",
            description:
                "Be part of a prestigious scholarship program recognized globally, enhancing your career prospects worldwide.",
        },
        {
            icon: <DollarSign size={48} className="text-green-700 mx-auto mb-4" />,
            title: "Monthly Stipends",
            description:
                "Receive monthly stipends to cover living expenses, making your educational journey smooth and stress-free.",
        },
    ];

    return (
        <section className="bg-secondary-green2 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
                    Scholarship Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-secondary-green p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            {benefit.icon}
                            <h3 className="text-xl font-bold text-green-shade mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-green-shade text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
