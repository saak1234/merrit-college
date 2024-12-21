"use client";
import React, { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Common <span className="text-green-600">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-gray-600 text-2xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="mt-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
