import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">
      <Image
        src="/homestay-hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20">
        Homestay
        </h1>
        <p className="text-lg md:text-xl mt-2 z-20">
        Our homestays provide you a truly affordable and safe way to stay, when studying in Ontario Canada.
        We assist students with their applications and advise them based on their own unique situations. 
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
