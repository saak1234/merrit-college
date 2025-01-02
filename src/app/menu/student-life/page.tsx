// import IntroductionSection from "@/components/StudentLife/student-hero-section";
import ClubsSection from "@/components/StudentLife/student-club-section";
import FacilitiesSection from "@/components/StudentLife/student-campus-facilities";
import TestimonialsSection from"@/components/StudentLife/student-testimonials-section";
import HeroSection from "@/components/ui/hero-section";
const StudentLifePage = () => {
    return (
        <main>
            {/* <IntroductionSection /> */}
            <HeroSection 
            header="Welcome to the Vibrant World of Student Life"
            description="Student life is a journey filled with learning, growth, and memorable experiences. 
                        It where you shape your future while building lasting friendships and developing essential skills."
            image="student-life.jpg"/>
            <ClubsSection />
            <FacilitiesSection />
            <TestimonialsSection />
        </main>
    );
};

export default StudentLifePage;
