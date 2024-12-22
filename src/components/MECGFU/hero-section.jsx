import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image */}
      <Image
        src="/mecgfu-hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0" // Background image with z-index 0
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20 ">Merit Education Charity Gala for UNICEF
        </h1>
        <p className="text-lg md:text-xl mt-5 z-20">
        Since 2011, Merit Education has held “Merit Education Charity 
        Gala for UNICEF” every year, raising funds to help children all
        over the world. This event is supported by Merit Education & 
        UNICEF and organized by Merit Student Council.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
