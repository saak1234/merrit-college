"use client";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, useEffect, ChangeEvent, FormEvent} from "react";
import GlobalButton from "../ui/global-button";

interface FormData {
  firstName: string;
  lastName: string;
  parentName: string;
  email: string;
  phone: string;
  course: string;
  education: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  parentName?: string;
  email?: string;
  phone?: string;
  course?: string;
  education?: string;
}

const AboutSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    parentName: '',
    email: '',
    phone: '',
    course: '',
    education: ''
  });

  const [animatedStats, setAnimatedStats] = useState({
    Years: 0,
    GlobalStudents: 0,
    StudentNationalities: 0,
  });

  useEffect(() => {
    const stats = {
      Years: 65,
      GlobalStudents: 30,
      StudentNationalities: 52,
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
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      } else if (!nameRegex.test(formData.firstName)) {
        newErrors.firstName = 'First name should only contain letters';
      }
    
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      } else if (!nameRegex.test(formData.lastName)) {
        newErrors.lastName = 'Last name should only contain letters';
      }
    
      if (!formData.parentName.trim()) {
        newErrors.parentName = 'Parent name is required';
      } else if (!nameRegex.test(formData.parentName)) {
        newErrors.parentName = 'Parent name should only contain letters';
      }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Course is required';
    }

    if (!formData.education.trim()) {
      newErrors.education = 'Educational background is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          parentName: '',
          email: '',
          phone: '',
          course: '',
          education: ''
        });
        togglePopup();
      } else {
        alert('Failed to submit application');
      }
    } catch (error) {
      console.log(error);
      alert('Error submitting application');
    }
  };

  return (
    <section className="bg-secondary-green2 py-16 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10 px-6">
        <motion.div 
          className="w-full lg:w-2/5"
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <Image
            src="/about-image.jpg"
            alt="Students collaborating in the library"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold text-green-shade mb-4">About Merit College</h2>
          <p className="text-gray-700 mb-6">
            Discover unparalleled opportunities to build your career with expert guidance, innovative programs, and a commitment to excellence in education. Your journey to success starts here.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
            {[
              "Graduate Programs",
              "Undergraduate",
              "Doctoral Degrees",
              "International Hubs",
              "Alumni & Giving",
              "Global Students",
            ].map((item, index) => (
              <p key={index} className="flex items-center text-gray-600">
                <span className="text-green-600 font-bold mr-2">✔</span>
                {item}
              </p>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start space-x-8 mb-8">
            {[
              {value: `${Math.round(animatedStats.Years)}+`, label: "Years of Experience"},
              {value: `${Math.round(animatedStats.GlobalStudents)}k+`, label: "Global Students"},
              {value: `${Math.round(animatedStats.StudentNationalities)}+`, label: "Student Nationalities"},
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{scale: 0.8}}
                whileInView={{scale: 1}}
                transition={{duration: 0.4, delay: index * 0.2}}
              >
                <h3 className="text-4xl font-bold text-green-shade">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start space-x-8 mb-8">
            <GlobalButton onClick={togglePopup}>
              Start your application →
            </GlobalButton>
            <GlobalButton>
              Know more about us →
            </GlobalButton>
          </div>
        </motion.div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={togglePopup}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-3/4 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-green-shade mb-4">Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.firstName ? 'border-red-500' : ''}`}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.lastName ? 'border-red-500' : ''}`}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Parent&#39;s Name</label>
                <input
                  type="text"
                  name="parentName"
                  placeholder="Enter your parent's name"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.parentName ? 'border-red-500' : ''}`}
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
                {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.phone ? 'border-red-500' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Course</label>
                <input
                  type="text"
                  name="course"
                  placeholder="Enter your course"
                  className={`w-full border rounded-lg px-3 py-2 ${errors.course ? 'border-red-500' : ''}`}
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
                {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Educational Background</label>
                <textarea
                  className={`w-full border rounded-lg px-3 py-2 ${errors.education ? 'border-red-500' : ''}`}
                  rows={3}
                  name="education"
                  placeholder="Enter your educational background"
                  value={formData.education}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-shade text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
