import React from 'react';
import { Home, MapPin, Wifi, Headphones } from 'lucide-react';

const HomeDescription = () => {
  return (
    <div className="bg-secondary-green2 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-shade mb-12 sm:text-5xl">
          Welcome to Your Dream Stay
        </h1>
        <div className="mt-12 text-center max-w-3xl mx-auto mb-10">
          <p className="text-lg text-green-shade leading-relaxed">
            Discover the perfect blend of comfort and luxury in our carefully curated homestay. Whether you&#39;re here for business or leisure, our space is designed to provide an unforgettable experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Home size={32} className="text-green-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-green-shade mb-3 text-center">
              Luxurious Comfort
            </h3>
            <p className="text-green-shade leading-relaxed text-center">
              Experience premium amenities and thoughtfully designed spaces that make you feel right at home.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <MapPin size={32} className="text-green-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-green-shade mb-3 text-center">
              Prime Location
            </h3>
            <p className="text-green-shade leading-relaxed text-center">
              Situated in the heart of the city, with easy access to attractions, dining, and entertainment.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Wifi size={32} className="text-green-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-green-shade mb-3 text-center">
              Modern Amenities
            </h3>
            <p className="text-green-shade leading-relaxed text-center">
              Enjoy high-speed WiFi, smart home features, and fully equipped kitchen facilities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Headphones size={32} className="text-green-700" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-green-shade mb-3 text-center">
              24/7 Support
            </h3>
            <p className="text-green-shade leading-relaxed text-center">
              Our dedicated team is always available to ensure your stay is comfortable and hassle-free.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HomeDescription;
