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
    icon: <MessageSquare size={40} className="text-green-600" />,
  },
  {
    title: "Tailored Onboarding",
    description: "Match with your ideal coach, book your first session, and share a few key details to kick-start your journey.",
    icon: <ClipboardCheck size={40} className="text-green-600" />,
  },
  {
    title: "Live Coaching",
    description: "Custom-scheduled coaching sessions on application strategy, essays, interview prep, and more.",
    icon: <Monitor size={40} className="text-green-600" />,
  },
  {
    title: "Valuable Extras",
    description: "Speedy essay edits, reference letter templates, and more.",
    icon: <Star size={40} className="text-green-600" />,
  },
  {
    title: "Let the Offers Roll In",
    description: "Submit those applications and receive coaching to evaluate offers and make the best choice for you.",
    icon: <FileText size={40} className="text-green-600" />,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          How It <span className="text-green-600">Works</span>
        </h2>
        <p className="text-gray-600 mt-2">
          The most efficient path to the most offers.
        </p>

        {/* Timeline Content */}
        <div className="relative mt-12 flex flex-col lg:flex-row justify-center">
          {/* Vertical/Horizontal Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
          <div className="block lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-gray-200 w-full"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">{step.icon}</div>

                {/* Content */}
                <div className="ml-4 lg:ml-8 text-left">
                  <h3 className="text-lg font-bold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
