import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">

      <Image
        src="/council-hero.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0" 
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20 ">Student Council
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
