import Image from "next/image";

interface HeroSectionProps {
  header: string;
  description: string;
  image: string;
}

const HeroSection = ({ header, description, image }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[60vh] p-20 w-full bg-secondary-green">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-shade mb-6">
            {header}
          </h1>
          <p className="text-sm md:text-lg text-green-shade mb-8 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="relative w-full min-h-[400px] lg:min-h-full order-first lg:order-last">
          <Image
            src= {`/${image}`}
            alt={`${header}`}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 lg:bg-opacity-0 lg:rounded-l-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
