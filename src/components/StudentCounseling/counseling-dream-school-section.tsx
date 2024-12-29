"use client";
import React from "react";
import { useState } from "react";
import ConsultForm from "./counseling-consult-form";
const DreamSchoolSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  return (
    <div className="flex items-center justify-center bg-secondary-green2 p-10">
      <section className="max-w-4xl  mb-10 w-full py-16 bg-secondary-green2 text-green-shade rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4">
            Get Into Your Dream School
          </h2>
          <p className="text-lg font-medium mb-8">
            1:1 Admissions Coaching • Limited Spots Available
          </p>

          {/* Call to Action */}
          <button 
          onClick={togglePopup}
          className="inline-block bg-green-600 text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-green-700">
            Schedule a Consult
          </button>
          <ConsultForm isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        </div>
      </section>
    </div>
  );
};

export default DreamSchoolSection;
