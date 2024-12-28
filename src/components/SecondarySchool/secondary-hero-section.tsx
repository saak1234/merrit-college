import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image */}
      <Image
        src="/secondary-school.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0" // Background image with z-index 0
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20">Academics</h1>
        <p className="text-lg md:text-xl mt-2 z-20">
          Our academic program is both rigorous and supportive with success in
          post-secondary institutions at the forefront of everyone’s mind.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
