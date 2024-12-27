"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, UtensilsCrossed, Truck } from "lucide-react";

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
    <section className="px-6 py-10 bg-secondary-green shadow-lg rounded-xl ">
      <div className="text-center mb-8">
        <div className="flex justify-center gap-12 mb-6">
          <div className="text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-gray-700">Safety</p>
            <p className="text-sm text-gray-500">Live with householder</p>
          </div>
          <div className="text-center">
            <UtensilsCrossed className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-gray-700">Meal</p>
            <p className="text-sm text-gray-500">Provide 3 meals a day</p>
          </div>
          <div className="text-center">
            <Truck className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <p className="font-semibold text-gray-700">Pick Up</p>
            <p className="text-sm text-gray-500">Drop off to school (optional)</p>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800">Our Homestay</h2>
        {!showMore && (
          <p className="text-sm text-gray-600 mt-2">
            Live with householder • Provide meals • Optional pickup
          </p>
        )}
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${showMore ? "3" : "3"} gap-6`}>
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
                <button
                  className="mt-2 px-4 py-1 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-100 transition-colors"
          >
            View More Homestay
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="px-6 py-2 border border-red-600 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors"
          >
            View Less Homestay
          </button>
        )}
      </div>
    </section>
  );
};

export default HomestayGallery;
