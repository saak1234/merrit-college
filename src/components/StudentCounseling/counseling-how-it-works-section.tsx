"use client";
import React from "react";
import {
  MessageSquare,
  ClipboardCheck,
  Monitor,
  Star,
  FileText,
} from "lucide-react";

const steps = [
  {
    title: "Initial Intake",
    description: "Schedule a free intake call with our Enrollment Team to shape your goals and pave your path to success.",
    icon: <MessageSquare size={20} className="text-green-600" />,
  },
  {
    title: "Tailored Onboarding",
    description: "Match with your ideal coach, book your first session, and share a few key details to kick-start your journey.",
    icon: <ClipboardCheck size={20} className="text-green-600" />,
  },
  {
    title: "Live Coaching",
    description: "Custom-scheduled coaching sessions on application strategy, essays, interview prep, and more.",
    icon: <Monitor size={20} className="text-green-600" />,
  },
  {
    title: "Valuable Extras",
    description: "Speedy essay edits, reference letter templates, and more.",
    icon: <Star size={20} className="text-green-600" />,
  },
  {
    title: "Let the Offers Roll In",
    description: "Submit those applications and receive coaching to evaluate offers and make the best choice for you.",
    icon: <FileText size={20} className="text-green-600" />,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          How It <span className="text-green-600">Works</span>
        </h2>
        <p className="text-gray-600 mt-2 text-center">
          The most efficient path to the most offers.
        </p>

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-200"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              {/* Left Content */}
              <div className="relative w-1/2 px-6">
                {index % 2 === 0 && (
                  <div className="text-right">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                )}
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-green-600">
                {step.icon}
              </div>

              {/* Right Content */}
              <div className="relative w-1/2 px-6">
                {index % 2 !== 0 && (
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
