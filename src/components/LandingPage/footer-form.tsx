import React from 'react';

function FooterForm() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-green-900 mb-6 text-center">
          We Are Here To Help You To Excel In Your Exams!<br />
          Book Your Free Consultation Now !!
        </h3>
        <form className="flex flex-wrap items-center justify-center lg:space-y-2 lg:space-x-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <select
              id="course"
              name="course"
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
            >
              <option value="">
                Select course name
              </option>
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
