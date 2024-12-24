"use client"
import {useState} from "react";
export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        additional: ''
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
                // alert('Message sent successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    additional: ''
                });
            } else {
                // alert('Failed to send message');
            }
        } catch (error) {
            alert('Error sending message');
        }
    };
    return (
      <div className="bg-gradient-to-b from-green-50 to-gray-100 py-10">
        <h2 className="text-center text-4xl font-bold text-green-800 mb-8">
          Contact Admission Team
        </h2>
        <p className="text-center text-green-600 max-w-2xl mx-auto mb-10 text-lg">
          Have questions or need assistance? Our team is here to help you with
          everything from course selection to admissions. Get in touch today!
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Us</h3>
            <p className="text-lg font-bold mb-4">Email:</p>
            <p className="text-gray-700 mb-4">admission@meritedu.ca</p>
            <p className="text-lg font-bold mb-4">Call:</p>
            <p className="text-gray-700 mb-4">+1 437 989 7210</p>
            <p className="text-lg font-bold mb-4">Visit Us:</p>
            <p className="text-gray-700">180 Duncan Mills Road</p>
          </div>
  
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Get in Touch</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              <div className="grid grid-cols-2 gap-4">
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
              {/* <select
              name="course"
              value={formData.course}
              onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">
                  Select your course
                </option>
                <option value="full-time">Full-Time Course</option>
                <option value="part-time">Part-Time Credit Course</option>
                <option value="ap">AP and Other Courses</option>
              </select> */}
              <textarea
                rows="4"
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