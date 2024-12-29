"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Calendar, Clock } from "lucide-react";
import GlobalButton from "../ui/global-button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface ConsultFormProps {
  isPopupOpen: boolean;
  togglePopup: () => void;
}

const ConsultForm: React.FC<ConsultFormProps> = ({ isPopupOpen, togglePopup }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setError("");
    setSuccess("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    }else{
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Consultation scheduled successfully!");
      setTimeout(() => {
        togglePopup();
        resetForm();
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Failed to schedule consultation");
      } else {
        setError("Failed to schedule consultation");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isPopupOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={togglePopup}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-3/4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          Schedule a Consult
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid  items-center ">
            <label className="text-gray-700 text-left">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 grid  items-center ">
            <label className="text-gray-700 text-left">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 grid  items-center ">
            <label className="text-gray-700 text-left">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 grid  items-center ">
            <label className="text-gray-700 text-left">Preferred Date</label>
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
          <div className="mb-4 grid  items-center ">
            <label className="text-gray-700 text-left">Preferred Time</label>
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
          <div className="flex justify-end space-x-4">
            <GlobalButton
              type="button"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
              onClick={togglePopup}
            >
              Cancel
            </GlobalButton>
            <GlobalButton
              type="submit"
              // className="bg-green-900 text-white px-4 py-2 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </GlobalButton>
          </div>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default ConsultForm;
