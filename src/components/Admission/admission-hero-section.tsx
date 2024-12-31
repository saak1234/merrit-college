"use client";
import Image from "next/image";
import {useState} from "react";
import { Phone, Mail} from "lucide-react";
import GlobalButton from "../ui/global-button";
import BookATour from "./admission-book-a-tour";

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }
  return (
      <div className="bg-secondary-green2 flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4 sm:p-6 md:p-10 gap-6 md:gap-10">
        <div className="w-full md:w-2/3 px-4 sm:px-0 md:ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-green-shade">Merit College</span> Admission Department
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            We are here to assist you in planning your academic journey and help you discover the opportunities waiting for you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <div className="bg-green-200 rounded-full p-3 sm:p-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <p className="text-gray-800 font-medium">Call Us</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-200 rounded-full p-3 sm:p-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-gray-800 font-medium">Email Us</p>
            </div>
          </div>
          <GlobalButton
              onClick={() => setIsPopupOpen(true)}
              // className="w-full sm:w-auto bg-green-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:bg-green-800 transition"
          >
            Book a Tour
          </GlobalButton>
        </div>
        <BookATour isPopupOpen={isPopupOpen} togglePopUp={togglePopup} />
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
              src="/application-hero.jpg"
              alt="Student"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        
      </div>
  );
}
