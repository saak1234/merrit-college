"use client"
import BookATour from "../Admission/admission-book-a-tour";
import GlobalButton from "../ui/global-button";
import {useState} from "react";
const TourSection = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  }
  return (
    <section className="bg-secondary-green2 text-green-900 p-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">
          Why Choose Our Tours?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-green-900 text-white p-6 rounded-full mb-4">
              <i className="fas fa-umbrella fa-2x"></i>
            </div>
            <h3 className="text-sm font-semibold mb-2">Tailored Itinerary</h3>
            <p>
              We personalize each tour to your preferences, ensuring you visit the best spots based on your interests.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-green-900 text-white p-6 rounded-full mb-4">
              <i className="fas fa-hotel fa-2x"></i>
            </div>
            <h3 className="font-semibold mb-2">Comfortable Stays</h3>
            <p>
              Enjoy luxury accommodations with all the amenities you need for a relaxing stay during your tour.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-green-900 text-white p-6 rounded-full mb-4">
              <i className="fas fa-shuttle-van fa-2x"></i>
            </div>
            <h3 className="font-semibold mb-2">Transportation Included</h3>
            <p>
              No need to worry about transport. We provide everything, including transportation to and from all tour spots.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <GlobalButton  onClick={togglePopUp}>
            Book Your Tour Now
          </GlobalButton>
        </div>
        <BookATour isPopupOpen={isPopUpOpen} togglePopUp={togglePopUp}/>
      </div>
    </section>
  );
};

export default TourSection;
