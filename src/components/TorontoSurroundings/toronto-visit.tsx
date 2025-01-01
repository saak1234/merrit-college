import Image from "next/image";
import { MapPin, Users, Building } from "lucide-react";

const locations = [
  {
    title: "Markham, Ontario",
    image: "/tv1.jpg",
    description: "A vibrant multicultural hub known for its historic downtown, technology sector, and cultural festivals. Home to many international corporations and a thriving Asian community.",
    stats: {
      population: "328,966",
      type: "City",
      established: "1794"
    }
  },
  {
    title: "North York, Ontario",
    image: "/tv2.jpg",
    description: "A dynamic urban center featuring modern business districts, diverse neighborhoods, and extensive parklands. Known for its educational institutions and cultural amenities.",
    stats: {
      population: "672,955",
      type: "District",
      established: "1922"
    }
  },
  {
    title: "Oakville, Ontario",
    image: "/tv3.jpg",
    description: "A picturesque lakeside town offering upscale living, beautiful harbors, and historic districts. Known for its high quality of life and scenic waterfront.",
    stats: {
      population: "193,832",
      type: "Town",
      established: "1857"
    }
  }
];

const Visit = () => {
  return (
    <section className="py-16 bg-secondary-green2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-shade mb-4">
            Discover the Greater Toronto Area
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore diverse communities each with their unique character
          </p>
        </div>

        <div className="space-y-8">
          {locations.map((location) => (
            <div 
              key={location.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-1/3 h-64 lg:h-auto">
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 p-6 lg:p-8">
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-green-600" />
                      {location.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {location.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <Users className="w-5 h-5 mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-medium text-gray-900">
                          {location.stats.population}
                        </div>
                        <div className="text-xs text-gray-500">Population</div>
                      </div>
                      <div className="text-center">
                        <Building className="w-5 h-5 mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-medium text-gray-900">
                          {location.stats.type}
                        </div>
                        <div className="text-xs text-gray-500">Municipality</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {location.stats.established}
                        </div>
                        <div className="text-xs text-gray-500">Established</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visit;
