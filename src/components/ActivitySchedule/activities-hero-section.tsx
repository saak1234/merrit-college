import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[50vh] p-20 py-32 bg-secondary-green">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center p-8  text-green-shade z-10 gap-5">
        <h1 className="text-4xl md:text-5xl font-bold">
          Embracing Learning with Discovery and Joy
        </h1>
        <p className="text-lg md:text-sm mt-4">
          Welcome to our Student Life page, where the magic of childhood comes
          alive through enriching experiences and adventures. At our
          kindergarten school, we strive to create a holistic and engaging 
          environment that nurtures every aspect of a child&#39;s development.
        </p>
      </div>
      
      {/* Right Image Section */}
      <div className="relative flex-1 min-h-[300px] md:min-h-full">
        <Image
          src="/activity-hero.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ 
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
