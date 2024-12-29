"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Calendar, Clock, User, School } from "lucide-react";
import GlobalButton from "../ui/global-button";
interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  programInterest: string;
  additionalNotes: string;
}

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    programInterest: "",
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Full Name is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "A valid email is required.";
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Phone number must be 10 digits.";
    } else if (step === 2) {
      if (!formData.preferredDate.trim()) newErrors.preferredDate = "Preferred date is required.";
      if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
      if (!formData.programInterest.trim())
        newErrors.programInterest = "Please select a program of interest.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    try {
      const response = await fetch("/api/book-tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Personal Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        name="name"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                     {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="tel"
                        name="phone"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                className="w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Schedule Your Visit</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="date"
                        name="preferredDate"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                    />
                  {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="time"
                        name="preferredTime"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                    />
                  {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Program of Interest</label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select
                        name="programInterest"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                        value={formData.programInterest}
                        onChange={handleChange}
                        required
                    >
                      <option value="">Select a program</option>
                      <option value="Robotics and AI">Robotics and AI</option>
                      <option value="Leadership Program">Leadership Program</option>
                      <option value="summer Camp">Summer Camp</option>
                    </select>
                    {errors.programInterest && (
                    <p className="text-red-500 text-xs mt-1">{errors.programInterest}</p>
                  )}
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
                className="w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Additional Information</h3>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">
                  Anything that you want to share
                </label>
                <textarea
                    name="additionalNotes"
                    rows={4}
                    className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                ></textarea>
              </div>
            </motion.div>
        );
    }
  };

  return (
      <div className="bg-secondary-green2 flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4 sm:p-6 md:p-10 gap-6 md:gap-10">
        <div className="w-full md:w-2/3 px-4 sm:px-0 md:ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-green-shade">Merit College</span> Admission Department
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            We are here to assist you in planning your academic journey and help you discover the opportunities waiting for you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <div className="bg-green-200 rounded-full p-3 sm:p-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <p className="text-gray-800 font-medium">Call Us</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-200 rounded-full p-3 sm:p-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-gray-800 font-medium">Email Us</p>
            </div>
          </div>
          <GlobalButton
              onClick={() => setIsPopupOpen(true)}
              // className="w-full sm:w-auto bg-green-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:bg-green-800 transition"
          >
            Book a Tour
          </GlobalButton>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
              src="/application-hero.jpg"
              alt="Student"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => setIsPopupOpen(false)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <div className="mb-4 sm:mb-6">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {renderStep()}
                  <div className="flex justify-between mt-4 sm:mt-6">
                    {step > 1 && (
                        <GlobalButton
                            type="button"
                            onClick={() => setStep(step - 1)}
                            // className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                          Back
                        </GlobalButton>
                    )}
                    {step < 3 ? (
                        <GlobalButton
                            type="button"
                            // onClick={() => setStep(step + 1)}
                            onClick={handleNext}
                            // className="bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-800 transition ml-auto"
                        >
                          Next
                        </GlobalButton>
                    ) : (
                        <GlobalButton
                            type="submit"
                            // className="bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-800 transition ml-auto"
                        >
                          Submit
                        </GlobalButton>
                    )}
                  </div>
                </form>
              </div>
            </div>
        )}
      </div>
  );
}
