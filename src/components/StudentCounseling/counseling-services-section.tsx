import React from "react";

const services = [
  {
    name: "UBC Sauder",
    averageAdmission: "14%",
    youthfullyAdmission: "95%",
    youthfullyAdvantage: "7x",
    flag: "🇨🇦",
  },
  {
    name: "Stanford University",
    averageAdmission: "5%",
    youthfullyAdmission: "75%",
    youthfullyAdvantage: "15x",
    flag: "🇺🇸",
  },
  {
    name: "Rotman Commerce",
    averageAdmission: "10%",
    youthfullyAdmission: "90%",
    youthfullyAdvantage: "9x",
    flag: "🇨🇦",
  },
  {
    name: "USC",
    averageAdmission: "12%",
    youthfullyAdmission: "86%",
    youthfullyAdvantage: "7x",
    flag: "🇺🇸",
  },
  {
    name: "UCLA",
    averageAdmission: "9%",
    youthfullyAdmission: "83%",
    youthfullyAdvantage: "9x",
    flag: "🇺🇸",
  },
  {
    name: "Berkeley",
    averageAdmission: "9%",
    youthfullyAdmission: "81%",
    youthfullyAdvantage: "9x",
    flag: "🇺🇸",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 bg-secondary-green2 overflow-hidden p-10">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-green-shade">
          75-100% Admissions Success
        </h2>
        <p className="text-green-shade font-medium">
          Rates For Over 14 Years With The Best North American Universities.
        </p>
      </div>
      <div className="relative overflow-hidden max-w-full">
        <div className="flex animate-scroll space-x-8">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-200 shadow-lg rounded-xl p-5 text-center min-w-[300px] max-w-[300px] flex-shrink-0"
            >
              {/* Green Border - Bottom and Right */}
              <div className="absolute bottom-0 right-0 w-full h-full border-b-4 border-r-4 border-green-500 rounded-xl pointer-events-none"></div>

              <div className="flex justify-center items-center">
                <div className="text-2xl font-semibold bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center">
                  {service.flag}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold text-green-shade">
                {service.name}
              </h3>
              <div className="mt-2 text-gray-600 text-sm">
                <p>
                  <strong>Average Admission:</strong> {service.averageAdmission}
                </p>
                <p>
                  <strong>Youthfully Admission:</strong>{" "}
                  {service.youthfullyAdmission}
                </p>
                <p>
                  <strong>Youthfully Advantage:</strong>{" "}
                  {service.youthfullyAdvantage}
                </p>
              </div>
              <p className="text-gray-500 mt-4 text-xs">
                Estimates derived from a partial reporting rate.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
