// import HeroSection from '@/components/Scholarship/scholarship-hero-section';
import HeroSection from "@/components/ui/hero-section"
import ServiceSection from '@/components/Scholarship/scholarship-service-section';
import TestimonialsSection from '@/components/Scholarship/scholarship-testimonials-section';
const scholarshipPage = () => {
    return (
        <div>
            <HeroSection header="Scholarship Program" 
            description="Apply for our scholarship program and unlock opportunities to pursue your educational dreams. 
                    We provide financial support, mentorship, and resources to help you achieve your goals."
            image="scholarship.jpg"/>
            <ServiceSection/>
            <TestimonialsSection/>
        </div>
    )
}
export default scholarshipPage;