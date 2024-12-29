"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import GlobalButton from "../ui/global-button";

const LandingPageHeroSection = () => {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>('');
  const [animatedStats, setAnimatedStats] = useState({
    gradsUniversity: 0,
    studentFacultyRatio: 0,
    advancedDegrees: 0,
    ontarioScholars: 0
  });

  useEffect(() => {
    const stats = {
      gradsUniversity: 100,
      studentFacultyRatio: 8,
      advancedDegrees: 90,
      ontarioScholars: 95
    };
    const duration = 1000;
    const interval = 50;
    const steps = Object.fromEntries(
      Object.entries(stats).map(([key, value]) => [key, value / (duration / interval)])
    );

    const intervalId = setInterval(() => {
      setAnimatedStats((prev) => {
        const newStats = { ...prev };
        let allCompleted = true;
        for (const [key, value] of Object.entries(steps)) {
          const statKey = key as keyof typeof stats;
          if (newStats[statKey] < stats[statKey]) {
            newStats[statKey] = Math.min(newStats[statKey] + value, stats[statKey]);
            allCompleted = false;
          }
        }
        if (allCompleted) {
          clearInterval(intervalId);
        }
        return newStats;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-secondary-green2 text-gray-800 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 px-6 lg:px-12 relative z-10">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="lg:text-4xl font-bold text-green-900 leading-tight mb-2">
            Empowering Your Future
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-green-700 mb-2">
            The Best Credit College in Canada
          </h3>
          <p className="text-lg text-black font-bold">
            Discover unparalleled opportunities to build your career with expert guidance, innovative programs, and a commitment to excellence in education. Your journey to success starts here.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: animatedStats.gradsUniversity.toFixed(0) + "%", description: "Grads Receive University Offers" },
              { stat: animatedStats.studentFacultyRatio.toFixed(0) + ":1", description: "Student to Faculty Ratio" },
              { stat: animatedStats.advancedDegrees.toFixed(0) + "%", description: "Teachers with Advanced Degrees" },
              { stat: animatedStats.ontarioScholars.toFixed(0) + "%", description: "Grads were Ontario Scholars" },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center border-2 border-green-700">
                <p className="text-3xl font-bold text-green-900">{item.stat}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <GlobalButton>
              <span>Register Now</span>
            </GlobalButton>
          </div>
        </div>
        <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-green-900 mb-4">Inquire Now</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className={`mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <div>
              <GlobalButton
                type="submit"
                disabled={status === 'submitting'}
              >
                <span>{status === 'submitting' ? 'Submitting...' : 'Submit'}</span>
                {status !== 'submitting' && <span>&rarr;</span>}
              </GlobalButton>
            </div>
            {status === 'success' && (
              <p className="text-green-600 text-center">Form submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHeroSection;
