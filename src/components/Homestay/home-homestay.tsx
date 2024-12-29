"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, UtensilsCrossed, Truck} from "lucide-react";
import GlobalButton from "../ui/global-button";
const HomestayGallery = () => {
  const [showMore, setShowMore] = useState(false);

  const homestays = [
    { id: 1, src: "/h1.jpg", title: "Kennedy Road/Bur Oak Ave in Markham", price: 1999.99 },
    { id: 2, src: "/h2.jpg", title: "Warden Ave/16th Ave in Markham", price: 2000.0 },
    { id: 3, src: "/h3.jpg", title: "Banbury Rd/Larkfield Dr. in North York", price: 2000.0 },
    { id: 4, src: "/h4.jpg", title: "Richmond Hill Homestay", price: 1800.0 },
    { id: 5, src: "/h5.jpg", title: "Mississauga Homestay", price: 2200.0 },
    { id: 6, src: "/h6.jpg", title: "Scarborough Homestay", price: 1750.0 },
    { id: 7, src: "/h7.jpg", title: "Scarborough Homestay", price: 1750.0 },
    { id: 8, src: "/h8.jpg", title: "Scarborough Homestay", price: 1750.0 },
    { id: 9, src: "/h9.jpg", title: "Scarborough Homestay", price: 1750.0 },
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-10 bg-secondary-green shadow-lg rounded-xl">
      <div className="text-center mb-8">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-6">
          <div className="text-center w-full sm:w-auto">
            <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-600 mb-2" strokeWidth={1.5} />
            <p className="font-semibold text-gray-700">Safety</p>
            <p className="text-sm text-gray-500">Live with householder</p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <UtensilsCrossed className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-600 mb-2" strokeWidth={1.5} />
            <p className="font-semibold text-gray-700">Meal</p>
            <p className="text-sm text-gray-500">Provide 3 meals a day</p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <Truck className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-green-600 mb-2" strokeWidth={1.5} />
            <p className="font-semibold text-gray-700">Pick Up</p>
            <p className="text-sm text-gray-500">Drop off to school (optional)</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Our Homestay</h2>
        {!showMore && (
          <p className="text-sm text-gray-600 mt-2">
            Live with householder • Provide meals • Optional pickup
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {(showMore ? homestays : homestays.slice(0, 3)).map((homestay) => (
          <div
            key={homestay.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <Image
              src={homestay.src}
              alt={homestay.title}
              width={400}
              height={200}
              className="object-cover w-full h-[200px] group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{homestay.title}</h3>
              <p className="text-green-700 font-medium">CA${homestay.price.toFixed(2)}</p>
              {showMore && (
                <GlobalButton
                //  className="mt-2 px-4 py-1 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                 >
                  Add to Cart
                </GlobalButton>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <GlobalButton
          onClick={() => setShowMore(!showMore)}
          // className={`px-6 py-2 border ${
          //   showMore ? 'border-red-600 text-red-600 hover:bg-red-100' : 'border-green-600 text-green-600 hover:bg-green-100'
          // } font-medium rounded-lg transition-colors`}
        >
          {showMore ? 'View Less Homestay' : 'View More Homestay'}
        </GlobalButton>
      </div>
      <div className="mt-16 bg-secondary-green2 shadow-lg overflow-hidden w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Homestay?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Carefully Selected Host Families
                  </h4>
                  <p className="text-gray-600">
                    All our host families undergo thorough background checks and regular quality assessments to ensure a safe and comfortable environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Cultural Exchange
                  </h4>
                  <p className="text-gray-600">
                    Experience authentic local culture and improve your language skills through daily interactions with your host family.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Comprehensive Support
                  </h4>
                  <p className="text-gray-600">
                    From airport pickup to 24/7 emergency assistance, we ensure you have all the support you need throughout your stay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-secondary-green2 p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              What&#39;s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Basic Package
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Private furnished room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Three meals daily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Utilities included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">WiFi access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Premium Add-ons
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Airport transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">School transportation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Language exchange</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Cultural activities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomestayGallery;
