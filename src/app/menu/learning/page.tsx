// import HeroSection from "@/components/Learning/learning-hero-section"
import CourseSection from "@/components/Learning/learning-course-section"
import FeatureSection from "@/components/Learning/learning-feature-section"
import TestimonialsSection from "@/components/Learning/learning-testimonials-section"
import HeroSection from "@/components/ui/hero-section"
const learning=()=>{
    return (
        <div>
            <HeroSection 
            header="Welcome to Our Learning Platform"
            description="Discover a world of learning at your fingertips. Our platform is designed to provide 
                        interactive, engaging, and effective courses across various domains."
            image="learning.jpg"
            />
            <CourseSection/>
            <FeatureSection/>
            <TestimonialsSection/>
        </div>
    )
}
export default learning;