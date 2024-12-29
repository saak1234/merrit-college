import HeroSection from "@/components/SecondarySchool/secondary-hero-section";
import Service from "@/components/SecondarySchool/secondary-service-section";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HeroSection />
      <div className="">
        <Service />
      </div>
    </div>
  );
}
