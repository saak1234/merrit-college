"use client";
import React, { useState, useEffect } from "react";
import ConsultForm from "./counseling-consult-form"; 
import Image from "next/image";
const images = [
  "/admissionCoaching1.png",   
  "/admissionCoaching2.png",   
  "/admissionCoaching3.png",   
  "/admissionCoaching4.png",   
];

const textContent = [
  { title: "Get Organized & Clear", description: "You need a plan and a roadmap to manage priorities, prerequisites, supplemental requirements, and deadlines." },
  { title: "Build a Cohesive Strategy", description: "Develop an authentic and cohesive candidate profile that encapsulates who you are and differentiates you." },
  { title: "Craft the Strongest Essays", description: "In-depth essay coaching to transform experiences into compelling narratives and meet unique admissions criteria." },
  { title: "Master the Video Interview", description: "Hands-down, the most comprehensive preparation to confidently tackle any interview question." }
];

const AdmissionsCoachingSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            Enroll In 1:1 <span className="text-green-600">Admissions Coaching</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Limited spots available—book your free consult today.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {textContent.map((text, index) => (
              <div key={index}>
                <h3
                  className={`text-xl font-bold ${
                    currentImage === index ? "text-green-600" : "text-gray-800"
                  }`}
                >
                  {text.title}
                </h3>
                <p className="text-gray-700 mt-2">{text.description}</p>
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Rotating Images */}
              <Image
                src={images[currentImage]}
                alt="Admissions Coaching"
                height={500}
                width={500}
                className="object-contain rounded-lg"
                priority
              />
              {/* Background Circle */}
              <div className="absolute -z-10 rounded-full bg-yellow-200 w-96 h-96 -top-10 -right-10"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
          onClick={togglePopup}
          className="px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-md hover:bg-green-700 transition">
            Schedule a Consult
          </button>
          <ConsultForm isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCoachingSection;
