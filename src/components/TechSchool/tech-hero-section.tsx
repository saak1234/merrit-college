import GlobalButton from "../ui/global-button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-secondary-green text-green-shade py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="text-center md:text-left md:w-1/2 px-6 md:px-0">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Welcome to TechSchool
          </h1>

          <p className="text-lg mb-6">
            Unlock your potential with cutting-edge tech courses. Learn, grow, and advance your career with our hands-on, expert-led programs.
          </p>

          <div className="flex justify-center md:justify-start mt-6">
            <GlobalButton className="hover:bg-white hover:text-green-900 transition duration-300 ease-in-out px-10 py-4 rounded-lg font-semibold">
              Start Your Learning Journey
            </GlobalButton>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/tech-school.jpg" 
            alt="TechSchool" 
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
