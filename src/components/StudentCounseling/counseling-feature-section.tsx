"use client";
import React from "react";
import Image from "next/image";
import ConsultForm from "./counseling-consult-form";
import {useState} from "react";
const FeaturesSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Feature Block */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-green-600">Everything You Need</span> To Get In
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">Comprehensive, 1:1 coaching on your entire application.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">Craft school-specific essays.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">Mock interview practice for video interviews.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">
                  Expert guidance from the top coaches in the industry.
                </p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/GetIn1.png" // Replace with your actual image path
                alt="Everything You Need To Get In"
                fill
                className="rounded-full object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-6 h-6 bg-red-400 rounded-full"></div>
              <div className="absolute top-10 right-10 w-8 h-8 bg-teal-300 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center order-last lg:order-first">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/GetIn2.png" // Replace with your actual image path
                alt="The Trust You Need To Dive In"
                fill
                className="rounded-full object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 left-10 w-8 h-8 bg-green-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-6 h-6 bg-blue-400 rounded-full"></div>
              <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-green-600">The Trust You Need</span> To Dive In
            </h2>
            <p className="text-gray-700">
              Our commitment to quality is reflected in our exceptional customer
              satisfaction metrics, including our 90% session satisfaction score and
              an average coach rating of 4.9/5.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">
                  <strong>Money-back Guarantee:</strong> If we can't find a coach you
                  love after your introductory session, we'll refund your money, no
                  questions asked.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">
                  <strong>Commitment to Satisfaction:</strong> If you're unsatisfied
                  with any coaching session, we're notified and will step in to make
                  it right.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p className="text-gray-700">
                  <strong>Flexibility for Success:</strong> Should circumstances
                  change or unexpected events arise, we provide flexible options to
                  accommodate your needs.
                </p>
              </li>
            </ul>
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

export default FeaturesSection;
