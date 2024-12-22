import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image */}
      <Image
        src="/leadership.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0" // Background image with z-index 0
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20 ">Summer Camp Program
        </h1>
        {/* <p className="text-lg md:text-xl mt-2 z-20">
        Summer Camp applications open December 15th. GTA residents 
        can register on-campus at 3601 Highway 7 East, Suite #808, Markham, 
        ON L3R 0M3. Non-GTA residents must complete the Merit Summer Camp 
        Application Form. Payment options: cash, money order (payable to Merit Education Inc.),
        or bank t ransfer, all processed at the same address.
        </p> */}
      </div>
    </div>
  );
};

export default HeroSection;
