"use client";

import { FC, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Does CGA Offer Advanced Placement (AP) Courses?",
        answer: "CGA is excited to offer Advanced Placement (AP) courses beginning this November. AP courses allow high school students to take classes at the US university level. They allow students to study 38 subjects in-depth and prepare them for college-level work. Most US universities recognize AP credit as college credit. The AP Program offers several awards for high achievement. Each year, over 2.8 million students take AP exams, with most students taking multiple APs during the course of their high school careers. AP is one of the most recognized curricula for top universities and CGA is looking forward to launching this program.",
    },
    {
        question: "Where Are Exams Taken?",
        answer: "At a nearby AP testing centre or eligible school. Families should ensure there is a suitable exam venue nearby to them. Our Enrollment Advisors can help advise on exam venues.",
    },
    {
        question: "Who Are The Teachers?",
        answer: "Our teachers are experienced educators, certified to teach Advanced Placement courses, and are committed to helping students achieve academic success.",
    },
    {
        question: "What Is The Class Size?",
        answer: "We maintain small class sizes to ensure personalized attention for each student, fostering a conducive learning environment.",
    },
];

const ESchoolFaqSection: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-green-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                        >
                            {/* Question */}
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-xl font-semibold text-green-900">
                                    {faq.question}
                                </h3>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-green-900 w-6 h-6" />
                                ) : (
                                    <ChevronDown className="text-green-900 w-6 h-6" />
                                )}
                            </div>

                            {/* Answer */}
                            {activeIndex === index && (
                                <p className="mt-4 text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ESchoolFaqSection;
