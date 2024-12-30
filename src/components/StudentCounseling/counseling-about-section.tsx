import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="py-16 bg-secondary-green2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            So What&#39;s Our <span className="text-green-600">Secret?</span>
          </h2>
        </div>


        <div className="flex flex-col lg:flex-row items-center lg:items-start">

          <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex justify-center">
            <div className="relative w-90 h-90">
                <Image src="/OurSecret.png" alt="Our Secret"  width={420} height={420}/>
            </div>
          </div>


          <div className="w-full lg:w-1/2 space-y-8">

            <div>
              <h3 className="text-xl font-bold text-green-shade">
                Coaching, Not Consulting
              </h3>
              <p className="text-gray-700 mt-2">
                Enhancing your admissions odds isn’t about quick fixes or
                shallow strategies. It’s about turning students into irresistible
                candidates—exactly what coaching does.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold text-green-shade">
                Relatable, Relevant Role Models
              </h3>
              <p className="text-gray-700 mt-2">
                Helping students succeed hinges on a strong connection. That’s
                why our coaches are not only leading professionals in their
                fields and alumni of top programs, but also from a diverse range
                of personal backgrounds.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold text-green-shade">
                Unwavering Focus on Quality
              </h3>
              <p className="text-gray-700 mt-2">
                At the heart of our approach is a relentless dedication to
                quality, offering a Five-Star experience with a personal touch,
                so families receive the best support during a pivotal period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
