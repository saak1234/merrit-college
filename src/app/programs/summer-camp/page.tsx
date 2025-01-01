// import HeroSection from "@/components/SummerCamp/summer-hero-section";
import Service from "@/components/SummerCamp/summer-service-section";
import HeroSection from "@/components/ui/hero-section";
export default function Home() {
  return (
    <div className="relative bg-white">
      <HeroSection 
      header="Summer Camp Program"
      description="Our summer camp program is designed to provide students with a unique"
      image="summer-camp-hero.jpg"/> *
      
      {/* <HeroSection /> */}
      <div className="">
        <Service />
      </div>
    </div>
  );
}
