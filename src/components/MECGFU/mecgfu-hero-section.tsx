"use client";
import Image from "next/image"
const HeroSection = () => {
  return (
    <div className="bg-secondary-green py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-shade">
              Merit Education Charity Gala for UNICEF
            </h1>
            <p className="text-base md:text-lg text-green-shade leading-relaxed">
              Since 2011, Merit Education has held "Merit Education Charity 
              Gala for UNICEF" every year, raising funds to help children all
              over the world. This event is supported by Merit Education & 
              UNICEF and organized by Merit Student Council.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/mecgfu-hero.jpg"
                alt="Merit Education Charity Gala"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
