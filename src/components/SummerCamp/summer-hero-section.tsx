import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] p-10 w-full bg-secondary-green">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-shade mb-6">
            Summer Camp Program
          </h1>
          <p className="text-md md:text-lg text-green-shade mb-8 leading-relaxed">
            Summer Camp applications open December 15th. GTA residents can register on-campus at 3601 Highway 7 East, Suite #808, Markham, ON L3R 0M3. Non-GTA residents must complete the Merit Summer Camp Application Form.
          </p>
          <p className="text-lg md:text-xl text-green-shade mb-8">
            Payment options: cash, money order (payable to Merit Education Inc.), or bank transfer, all processed at the same address.
          </p>
          {/* <button className="w-fit px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2">
            Register Now
          </button> */}
        </div>

        {/* Right Image */}
        <div className="relative w-full min-h-[400px] lg:min-h-full order-first lg:order-last">
          <Image
            src="/secondary-school.jpg"
            alt="Summer Camp"
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
