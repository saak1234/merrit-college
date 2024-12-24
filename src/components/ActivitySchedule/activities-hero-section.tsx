import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] w-full">
      <Image
        src="/activity-hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold z-20">
          Embracing Learning with Discovery and Joy
        </h1>
        <p className="text-lg md:text-xl mt-2 z-20">
          Welcome to our Student Life page, where the magic of childhood comes
          alive through enriching experiences and adventures. At our
          kindergarten school, we believe learning goes beyond textbooks, and
          we strive to create a holistic and engaging environment that nurtures
          every aspect of a child&#39;s development.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
