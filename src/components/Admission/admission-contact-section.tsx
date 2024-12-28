"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  additional: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    additional: "",
  });

  const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          additional: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
      <div className="bg-secondary-green2 py-6 sm:py-10 px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-green-shade mb-4 sm:mb-8">
          Contact Us
        </h2>
        <p className="text-center text-green-shade max-w-2xl mx-auto mb-6 sm:mb-10 text-base sm:text-lg px-4">
          Have questions or need assistance? Our team is here to help you with
          everything from course selection to admissions. Get in touch today!
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-shade mb-4 sm:mb-6">Contact Us</h3>
            <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Email:</p>
            <p className="text-gray-700 mb-4">admission@meritedu.ca</p>
            <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Call:</p>
            <p className="text-gray-700 mb-4">+1 437 989 7210</p>
            <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Visit Us:</p>
            <p className="text-gray-700">180 Duncan Mills Road</p>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-shade mb-4 sm:mb-6">Get in Touch</h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                  rows={4}
                  name="additional"
                  onChange={handleChange}
                  placeholder="Additional message/concern"
                  value={formData.additional}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-shadow shadow-md hover:shadow-lg"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
