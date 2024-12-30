import IntroductionSection from "@/components/StudentLife/student-hero-section";
import ClubsSection from "@/components/StudentLife/student-club-section";
import FacilitiesSection from "@/components/StudentLife/student-campus-facilities";
import TestimonialsSection from"@/components/StudentLife/student-testimonials-section";

const StudentLifePage = () => {
    return (
        <main>
            <IntroductionSection />
            <ClubsSection />
            <FacilitiesSection />
            <TestimonialsSection />
        </main>
    );
};

export default StudentLifePage;
