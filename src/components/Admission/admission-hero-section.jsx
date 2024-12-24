"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, Clock, User, School } from "lucide-react";

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    programInterest: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsPopupOpen(false);
        setStep(1);
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          programInterest: "",
          additionalNotes: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-4">Schedule Your Visit</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    name="preferredDate"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="time"
                    name="preferredTime"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Program of Interest</label>
                <div className="relative">
                  <School className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select
                    name="programInterest"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.programInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="Robotics and AI">Robotics and AI</option>
                    <option value="Leadership Program">Leadership Program</option>
                    <option value="summer Camp">Summer Camp</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
            <div>
              <label className="block text-gray-700 mb-2">Anything that you want to share</label>
              <textarea
                name="additionalNotes"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                value={formData.additionalNotes}
                onChange={handleChange}
              ></textarea>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 flex flex-col md:flex-row items-center justify-center text-center md:text-left p-10 gap-10">
      {/* Text Content */}
      <div className="md:w-2/3 ml-5">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-green-700">Merit College</span> Admission Department
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are here to assist you in planning your academic journey and help you discover the opportunities waiting for you!
        </p>
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="bg-green-200 rounded-full p-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-gray-800 font-medium">Call Us</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-200 rounded-full p-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-800 font-medium">Email Us</p>
          </div>
        </div>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-green-700 text-white py-3 px-8 rounded-lg font-bold text-lg shadow-lg hover:bg-green-800 transition"
        >
          Book a Tour
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/application-hero.jpg"
          alt="Student"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>
      
      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={`w-1/3 h-2 rounded-full mx-1 ${
                      step >= item ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderStep()}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
