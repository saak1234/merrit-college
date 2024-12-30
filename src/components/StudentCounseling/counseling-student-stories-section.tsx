"use client";
import React, { useState } from "react";
import Image from "next/image";
const stories = [
  {
    name: "Prabhgun",
    description:
      "Prabhgun’s coach helped him streamline his extracurriculars, improve his skills, and achieve audacious goals. He built a purposeful portfolio that showcased his passion for coding, fitness, and data/analytics. Because of the work he did with his coach, he was admitted into Waterloo Engineering, received a prestigious scholarship, and landed two competitive co-ops.",
    highlight: "100% Admission • $10K in Scholarships",
    image: "/Student1.jpg", // Replace with your image path
  },
  {
    name: "Rahul",
    description:
      "Rahul’s coach helped her craft an exceptional application that highlighted her leadership and technical skills. With support on essays and interviews, she secured admissions into top universities with multiple scholarships.",
    highlight: "90% Admission • $20K in Scholarships",
    image: "/Student2.jpg", // Replace with your image path
  },
  {
    name: "Sam",
    description:
      "Sam leveraged coaching to identify his strengths and improve his personal branding. This effort led him to multiple admissions, including his dream university, with significant funding.",
    highlight: "95% Admission • $15K in Scholarships",
    image: "/Student3.jpg", // Replace with your image path
  },
  {
    name: "Arijit",
    description:
      "Arijit’s application process was transformed through strategic coaching. Her essays and portfolio impressed admissions teams, leading to top-tier university admissions.",
    highlight: "100% Admission • $25K in Scholarships",
    image: "/Student4.jpg", // Replace with your image path
  },
];

const StudentStoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const handlePrevious = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  return (
    <section className="py-16 bg-secondary-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Student <span className="text-green-600">Stories</span>
        </h2>

        {/* Content */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src={stories[currentStory].image}
                alt={stories[currentStory].name}
                fill
                className="rounded-lg object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-teal-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-6 h-6 bg-red-400 rounded-full"></div>
              <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              {stories[currentStory].name}
            </h3>
            <p className="text-gray-700 mt-4">{stories[currentStory].description}</p>
            <p className="text-green-600 font-bold mt-4">
              {stories[currentStory].highlight}
            </p>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4">
              <button
                className="text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handlePrevious}
              >
                &lt;
              </button>
              <span className="text-gray-600 font-medium">
                {currentStory + 1} / {stories.length}
              </span>
              <button
                className="text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;
