"use client";
import React from "react";

const DreamSchoolSection = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="max-w-4xl  mb-10 w-full py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4">
            Get Into Your Dream School
          </h2>
          <p className="text-lg font-medium mb-8">
            1:1 Admissions Coaching • Limited Spots Available
          </p>

          {/* Call to Action */}
          <button className="px-6 py-3 bg-white text-blue-600 text-lg font-bold rounded-md shadow-md hover:bg-gray-100 transition">
            Schedule a Consult
          </button>
        </div>
      </section>
    </div>
  );
};

export default DreamSchoolSection;
