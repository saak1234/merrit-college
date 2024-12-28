import HeroSection from "@/components/StudentCouncil/council-hero-section"
import ServiceSection from "@/components/StudentCouncil/council-service-section"
const StudentCouncil = () => {
    return(
        <div>
            <HeroSection/>
            <div className="-mt-36">
                <ServiceSection/>
            </div>
        </div>

    )
}
export default StudentCouncil