"use client";
import { useState } from "react";
import Image from "next/image";

const menuItems = [
    {
      title: "More Programs",
      content:
        "Explore a variety of additional programs designed to enhance student learning and growth. These programs cater to diverse interests and skill development.",
      image: "/more-programs.jpg",
    },
    {
      title: "Crescent Camps",
      content:
        "Join our Crescent Camps for an enriching and fun-filled experience. These camps provide opportunities for students to learn, socialize, and grow in a vibrant environment.",
      image: "/crescent-camps.jpg",
    },
    {
      title: "Successful Start",
      content:
        "The Successful Start program is designed to give students a strong foundation for academic and personal success. It focuses on building essential skills and confidence.",
      image: "/successful-start.jpg",
    },
    {
      title: "Summer Academics",
      content:
        "Our Summer Academics program offers students an opportunity to advance their knowledge and skills during the summer break. It includes a range of academic courses and activities.",
      image: "/summer-academics.jpg",
    },
    {
      title: "Employment & Volunteering",
      content:
        "Explore employment and volunteering opportunities to gain real-world experience and give back to the community. These programs help students develop leadership and teamwork skills.",
      image: "/employment-volunteering.jpg",
    },
  ];
  

const ServiceComponent = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="relative z-20">
      <div className="flex flex-col md:flex-row min-h-screen gap-8 p-6 z-20">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 p-4 h-0 md:h-[400px] flex flex-col">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer p-4 transition-all text-center font-medium ${
                  activeItem === index
                    ? "bg-green-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-300 hover:bg-green-200 hover:shadow-md hover:transform hover:scale-105 text-gray-800"
                }`}
                onClick={() => setActiveItem(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          {/* Apply Now Button */}
          <button
            className="mt-4 p-4 bg-green-700 text-white rounded-md shadow-lg hover:bg-green-600 transition-all"
            
          >
            Apply Now
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-3/4 shadow-xl rounded-xl mt-4 bg-white">
          <h3 className="text-2xl font-extrabold text-white border-b-4 bg-green-700 p-2">
            {menuItems[activeItem].title}
          </h3>
          {/* Dynamic Image */}
          <div className="relative h-80 sm:h-64 md:h-72 lg:h-80 mb-6 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={menuItems[activeItem].image}
              alt={menuItems[activeItem].title}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Dynamic Title and Content */}
          <div className="p-4">
            <p className="mt-6 text-gray-600 text-lg leading-8">
              {menuItems[activeItem].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
