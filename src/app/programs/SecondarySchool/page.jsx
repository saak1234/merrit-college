import HeroSection from "@/components/SecondarySchool/hero-section";
import Service from "@/components/SecondarySchool/service-section";

export default function Home() {
  return (
    <div className="relative bg-white">
      <HeroSection />
      <div className="-mt-36">
        <Service />
      </div>
    </div>
  );
}
