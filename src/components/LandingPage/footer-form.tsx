"use client";
import React, { useState } from 'react';

function FooterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: ''
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="m-2">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-green-900 mb-6 text-center">
          Connect with us
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center lg:space-y-2 lg:space-x-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <select
              id="course"
              name="course"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select course name</option>
              <option value="ap-math">AP Math</option>
              <option value="ap-physics">AP Physics</option>
              <option value="ap-chemistry">AP Chemistry</option>
              <option value="ap-biology">AP Biology</option>
              <option value="ap-english">AP English</option>
              <option value="ap-history">AP History</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition"
          >
            Submit &rarr;
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterForm;
