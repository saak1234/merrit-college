"use client"
import GlobalButton from "../ui/global-button";
import { useState } from "react";
import BookATour from "../Admission/admission-book-a-tour";
const BookFooterSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  }
  return (
    <section className="bg-secondary-green text-green-shade p-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to Book Your Tour?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg mb-12 px-4 md:px-0">
          Don&#39;t miss out on an unforgettable experience! Our tours are tailored to give you the best experience. Book now and start your adventure today.
        </p>

        {/* Benefits Section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose Our Tours?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Benefit Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F4D6;</span> {/* Book Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Expertly curated itineraries for the best experience</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                We design each tour with the highest quality experiences in mind to ensure that you have a memorable time.
              </p>
            </div>

            {/* Benefit Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F9D1;&#x1F3ED;</span> {/* Guide Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Fully guided tours with local experts</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Our expert guides will provide insightful information, ensuring a richer experience throughout your journey.
              </p>
            </div>

            {/* Benefit Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F4C5;</span> {/* Calendar Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Flexible scheduling to suit your needs</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                We offer a variety of dates and times so you can pick the tour that fits your schedule.
              </p>
            </div>

            {/* Benefit Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F4B0;</span> {/* Money Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Exclusive discounts for early bookings</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Book early and save! Take advantage of special deals and discounts when you plan ahead.
              </p>
            </div>

            {/* Benefit Item 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F6B2;</span> {/* Bike Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Safety and comfort ensured at all times</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Your safety and comfort are our top priorities. Our tours are designed to keep you comfortable and secure.
              </p>
            </div>

            {/* Benefit Item 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">&#x1F3D8;</span> {/* Mountain Icon */}
                <h4 className="text-lg sm:text-xl font-semibold">Explore Hidden Gems off the Beaten Path</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Discover locations that are not typically visited by tourists, offering you a unique and authentic experience.
              </p>
            </div>
          </div>
        </div>

        {/* Easy Booking Explanation */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Booking Made Easy</h3>
          <p className="text-base sm:text-lg">
            Booking your tour is quick and easy. Simply choose your preferred date, enter your details, and you&#39;re ready to go. We&#39;ll handle the rest to ensure you have a smooth and enjoyable experience from start to finish.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <GlobalButton onClick={togglePopUp}
        //   className="hover:bg-white hover:text-green-900 transition duration-300 ease-in-out px-10 py-4 rounded-lg font-semibold"
          >
            Book Your Tour Now
          </GlobalButton>
        </div>
        <BookATour isPopupOpen={isPopupOpen} togglePopUp={togglePopUp} />
      </div>
    </section>
  );
};

export default BookFooterSection;
