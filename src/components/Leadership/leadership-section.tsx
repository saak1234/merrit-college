"use client";

import Image from "next/image";
import React, {useState} from "react";
import GlobalButton from "../ui/global-button";

const Section = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const togglePopup = () => {
        setFormData({
            firstName: '', lastName: '', parentName: '',
            email: '', phone: '', course: '', education: ''
        });
        setIsPopupOpen(!isPopupOpen);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        parentName: '',
        email: '',
        phone: '',
        course: '',
        education: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (name === 'phone') {
            const numbersOnly = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({
              ...prev,
              [name]: numbersOnly
            }));
          }
          else{
            setFormData(prev => ({
            ...prev,
            [name]: value
        }));
          }
        
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/application', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // alert('Application submitted successfully!');
                setFormData({
                    firstName: '', lastName: '', parentName: '',
                    email: '', phone: '', course: '', education: ''
                });
                togglePopup();
            } else {
                // alert('Failed to submit application');
            }
        } catch (error) {
            console.log(error);
            alert('Error submitting application');
        }
    };

    return (
        <div className="bg-secondary-green2 min-h-screen p-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-shade mb-4">Merit Leadership Program</h1>
                    <div className="h-1 w-20 bg-green-600 mx-auto mb-6"></div>
                    <p className="text-lg text-green-800">
                        Empowering leaders with communication, critical thinking, and leadership skills.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold  mb-4">Toastmasters International</h2>
                        <p className="text-green-shade leading-7 mb-6">
                            Toastmasters International is a world leader in communication and leadership
                            development. Our membership is more than 358,000, with members improving their
                            speaking and leadership skills by attending one of 16,800 clubs in 143 countries.
                        </p>
                        <p className="text-green-shade leading-7">
                            The Toastmasters Merit Education Club provides students with opportunities to practice
                            oral English skills, develop critical thinking, and gain valuable leadership experience.
                        </p>
                    </div>

                    <div className="relative w-full h-auto">
                        <Image
                            src="/merit-leadership-program.jpg"
                            alt="Merit Leadership Program"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="bg-secondary-green2 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                        Become a Leader Today
                    </h3>
                    <p className="text-green-shade leading-7 text-center mb-6">
                        Join our Merit Leadership Program to improve your communication skills, build confidence,
                        and become an effective leader in your community.
                    </p>
                    <div className="flex justify-center">
                        <GlobalButton
                            onClick={togglePopup}
                        >
                            Apply Now
                        </GlobalButton>
                        {isPopupOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                                 onClick={togglePopup}>
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-3/4 overflow-auto"
                                     onClick={(e) => e.stopPropagation()}>
                                    <h2 className="text-2xl font-bold text-green-900 mb-4">Application Form</h2>
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Enter your first name"
                                                className="w-full border rounded-lg px-3 py-2"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Enter your last name"
                                                className="w-full border rounded-lg px-3 py-2"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Parent&#39;s Name</label>
                                            <input
                                                type="text"
                                                name="parentName"
                                                placeholder="Enter your parent's name"
                                                className="w-full border rounded-lg px-3 py-2"
                                                value={formData.parentName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Email</label>
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
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Phone Number</label>
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
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Course</label>
                                            <input
                                                type="text"
                                                name="course"
                                                placeholder="Enter your course"
                                                className="w-full border rounded-lg px-3 py-2"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700">Educational Background</label>
                                            <textarea
                                                className="w-full border rounded-lg px-3 py-2"
                                                rows={3}
                                                name="education"
                                                placeholder="Enter your educational background"
                                                value={formData.education}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-end space-x-4">
                                            <GlobalButton
                                                type="button"
                                                // className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                                                onClick={togglePopup}
                                            >
                                                Cancel
                                            </GlobalButton>
                                            <GlobalButton
                                                type="submit"
                                                // className="bg-green-900 text-white px-4 py-2 rounded-lg"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </GlobalButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
