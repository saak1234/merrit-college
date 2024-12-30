"use client";
import { useState } from "react";
import Image from "next/image";
import GlobalButton from "../ui/global-button";
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
      content: "Full-time students enjoy a structured curriculum and access to a wide range of academic resources tailored to their career goals.",
      image: "student1.jpg",
    },
    {
      id: "part-time",
      title: "Part Time Credit Courses",
      content: "Part-time courses offer flexibility, allowing professionals and students to balance work, life, and studies effectively.",
      image: "student2.jpg",
    },
    {
      id: "ap-courses",
      title: "AP and Other Courses",
      content: "Advanced Placement (AP) and specialized courses help students gain college credits and advanced knowledge in their fields of interest.",
      image: "student3.jpg",
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
      <div className="bg-secondary-green p-10 sm:py-8 md:py-10 px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-shade mb-4 sm:mb-6 md:mb-8">
          Explore Our Programs
        </h2>
        <p className="text-center text-green-shade max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg px-4">
          Whether you&#39;re a full-time student, a part-time learner, or looking for
          specialized courses, we provide tailored programs to meet your
          educational goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 px-4">
          {tabs.map((tab) => (
              <GlobalButton
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  // className={`py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-medium transition w-full sm:w-auto ${
                  //     activeTab === tab.id
                  //         ? "bg-green-700 text-white shadow-md"
                  //         : "bg-white text-green-800 hover:bg-green-100"
                  // }`}
              >
                {tab.title}
              </GlobalButton>
          ))}
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:space-x-10">
          <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-green-shade mb-3 sm:mb-4">
              {activeTabContent?.title}
            </h3>
            <p className="text-green-shade text-base sm:text-lg">
              {activeTabContent?.content}
            </p>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <Image
                src={activeTabContent ? `/${activeTabContent.image}` : "/default-image.jpg"}
                alt={activeTabContent?.title || "Default Program"}
                width={350}
                height={350}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
  );
}

