import TutoringBenefits from "@/components/Tutoring/tutoring-benefits";
import WhyTutoring from "@/components/Tutoring/tutoring-why";
import HeroSection from "@/components/ui/hero-section";
const Tutoring=()=>{
    return (
        <div>
            <HeroSection header="Tutoring" 
            description="Unlock your potential with 
            our expert tutoring services. Our experienced 
            tutors provide personalized support to help you 
            succeed in your academic journey." 
            image="tutoring-hero.jpg"/>
            <WhyTutoring/>
            <TutoringBenefits/>
        </div>
    )
}
export default Tutoring;