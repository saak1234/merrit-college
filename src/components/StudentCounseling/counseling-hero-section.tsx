"use client"
import Image from "next/image";
import {useState} from "react";
import ConsultForm from "./counseling-consult-form";
export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <section className="py-20 bg-secondary-green">
      <div className="max-w-5xl space-x-10 mx-auto px-6 flex flex-col lg:flex-row items-center">

        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get Into Your Dream School- the First Time.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
          Work 1-on-1 with a coach to gain a meaningful edge on the most competitive undergraduate university applications.
          </p>
          <button
            onClick={togglePopup}
            className="inline-block bg-green-600 text-white px-6 py-3 font-semibold rounded-lg shadow hover:bg-green-700"
          >
            SCHEDULE A CONSULT
          </button>
          <ConsultForm isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        </div>

        <div className="lg:w-3/4 mt-10 lg:mt-0">
          <Image
            src="/counseling-hero.jpg"
            alt="Students receiving counseling"
            width={850}
            height={850}
                
          />    
        </div>
      </div>
    </section>
  );
}
