import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] w-full bg-secondary-green p-16 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-shade mb-6">
            Leadership
          </h1>
          <p className="text-lg md:text-xl text-green-shade mb-8 leading-relaxed">
            Develop essential leadership skills through hands-on experience and mentorship opportunities. Our program focuses on building confident, capable leaders for tomorrow.
          </p>
          {/* <button className="w-fit px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2">
            Learn More
          </button> */}
        </div>

        {/* Right Image */}
        <div className="relative w-full min-h-[400px] lg:min-h-full order-first lg:order-last">
          <Image
            src="/leadership.jpg"
            alt="Leadership"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="rounded-lg"
            priority
          />
          {/* Overlay for better text visibility on mobile */}
          <div className="absolute inset-0 bg-black bg-opacity-20 lg:bg-opacity-0 lg:rounded-l-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
