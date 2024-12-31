"use client"
import Image from "next/image";
import { useState } from "react";
import GlobalButton from "../ui/global-button";
import BookATour from "@/components/Admission/admission-book-a-tour";
const HeroSection = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };
  return (
    <section className="flex items-center bg-secondary-green text-green-shade py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="text-center md:text-left md:w-1/2 px-6 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Dream Tour Today
          </h1>
          <p className="mb-6 text-lg">
            Explore beautiful destinations and create memories to last a lifetime. 
            Our personalized tours are designed just for you. Get started today and book your tour now!
          </p>
          <GlobalButton onClick={togglePopUp}
          >
            Book a Tour
          </GlobalButton>
        </div>
        <BookATour isPopupOpen={isPopUpOpen} togglePopUp={togglePopUp}/>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/book-tour.jpg" 
            alt="Tour Image" 
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
