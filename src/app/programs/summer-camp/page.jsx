import HeroSection from "@/components/SummerCamp/hero-section";
import Service from "@/components/SummerCamp/service-section";

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
