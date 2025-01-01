import Image from "next/image";

interface HeroSectionProps {
  header: string;
  description: string;
  image: string;
}

const HeroSection = ({ header, description, image }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[60vh] p-20 w-full bg-secondary-green">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row min-h-[60vh] gap-8">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 py-12 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-shade mb-6">
            {header}
          </h1>
          <p className="text-sm md:text-lg text-green-shade mb-8 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 relative w-full min-h-[400px] lg:min-h-full">
          <Image
            src={`/${image}`}
            alt={header}
            fill
            style={{ objectFit: "cover" }}
            quality={90}
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 lg:bg-opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
