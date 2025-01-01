// import HeroSection from "@/components/SecondarySchool/secondary-hero-section";
import Service from "@/components/SecondarySchool/secondary-service-section";
import HeroSection from "@/components/ui/hero-section";
export default function Home() {
  return (
    <div className="relative bg-white">
      {/* <HeroSection /> */}
      <HeroSection 
      header="Academics"
      description="Our academic program is both rigorous and supportive with success in
            post-secondary institutions at the forefront of everyone&#39;s mind."
      image="secondary-school.jpg"/>
      <div className="">
        <Service />
      </div>
    </div>
  );
}
