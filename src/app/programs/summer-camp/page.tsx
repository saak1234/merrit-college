import HeroSection from "@/components/SummerCamp/summer-hero-section";
import Service from "@/components/SummerCamp/summer-service-section";

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
