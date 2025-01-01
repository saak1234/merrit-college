// import HeroSection from "@/components/StudentCouncil/council-hero-section"
import ServiceSection from "@/components/StudentCouncil/council-service-section"
import HeroSection from "@/components/ui/hero-section"
const StudentCouncil = () => {
    return(
        <div>
            <HeroSection 
            header="Student Council"
            description="Join our student leadership team and make a difference in your school community. The Student Council 
            provides opportunities for leadership development, event planning, and community engagement."
            image="council-hero.jpg"
            />
            <ServiceSection/>
        </div>

    )
}
export default StudentCouncil