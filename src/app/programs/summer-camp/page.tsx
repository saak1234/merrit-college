// import HeroSection from "@/components/SummerCamp/summer-hero-section";
import Service from "@/components/SummerCamp/summer-service-section";
import HeroSection from "@/components/ui/hero-section";
export default function Home() {
  return (
    <div className="relative bg-white">
      <HeroSection 
      header="Summer Camp Program"
      description="Our Summer Camp offers an exciting mix of fun and learning, 
      featuring hands on workshops, outdoor adventures, and team-building activities."
      image="summer-camp-hero.jpg"/> 
      
      {/* <HeroSection /> */}
      <div className="">
        <Service />
      </div>
    </div>
  );
}
