"use client";

import { useState } from "react";
import Image from "next/image";

interface Tab {
  id: string;
  title: string;
  content: string;
  image: string;
}

export default function Section() {
  const [activeTab, setActiveTab] = useState<string>("full-time");

  const tabs: Tab[] = [
    {
      id: "full-time",
      title: "Full Time Student",
      content:
        "Full-time students enjoy a structured curriculum and access to a wide range of academic resources tailored to their career goals.",
      image: "/student1.jpg", // Update with your actual image path
    },
    {
      id: "part-time",
      title: "Part Time Credit Courses",
      content:
        "Part-time courses offer flexibility, allowing professionals and students to balance work, life, and studies effectively.",
      image: "/student2.jpg", // Update with your actual image path
    },
    {
      id: "ap-courses",
      title: "AP and Other Courses",
      content:
        "Advanced Placement (AP) and specialized courses help students gain college credits and advanced knowledge in their fields of interest.",
      image: "/student3.jpg", // Update with your actual image path
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-green-50 py-10 px-6">
      <h2 className="text-center text-4xl font-bold text-green-800 mb-8">
        Explore Our Programs
      </h2>
      <p className="text-center text-green-600 max-w-2xl mx-auto mb-10 text-lg">
        Whether you’re a full-time student, a part-time learner, or looking for
        specialized courses, we provide tailored programs to meet your
        educational goals.
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-6 rounded-lg text-lg font-medium transition ${
              activeTab === tab.id
                ? "bg-green-700 text-white shadow-md"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-5xl space-x-10 mx-auto flex flex-col justify-center md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            {activeTabContent?.title}
          </h3>
          <p className="text-green-800 text-lg">{activeTabContent?.content}</p>
        </div>
        <div className="flex-1">
          <Image
            src={activeTabContent?.image || "/default-image.jpg"} // Fallback image if undefined
            alt={activeTabContent?.title || "Default Program"}
            width={350} // Adjusted width
            height={350} // Adjusted height
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
