// import HeroSection from "@/components/TechSchool/tech-hero-section";
import TestimonialsSection from "@/components/TechSchool/tech-testimonials-section";
import TechSchool from "@/components/TechSchool/tech-service-section";
import HeroSection from "@/components/ui/hero-section";
const TechSchoolPage=()=>{
    return (
        <div>
            <HeroSection 
            header="Welcome to TechSchool"
            description="Unlock your potential with cutting-edge tech courses.
             Learn, grow, and advance your career with our hands-on, expert-led programs."
             image="tech-school.jpg"
            />
            <TechSchool />
            <TestimonialsSection />
        </div>
    )
}
export default TechSchoolPage