// pages/index.tsx
import ConsultationHeroSection from "@/components/Consultation/consultation-hero-section";
import ConsultationFeatureSection from "@/components/Consultation/consultation-feature-section";
import ConsultationCounsellorSection from "@/components/Consultation/consultation-counsellor-section";
import ConsultationTestimonialSection from "@/components/Consultation/consultation-testimonial-section";
import ConsultationContactUs from "@/components/Consultation/consultation-contact-us";
import ConsultationCourses from "@/components/Consultation/consultation-courses-section";


export default function ConsultationPage() {
    return (
        <div>
            <ConsultationHeroSection/>
            <ConsultationFeatureSection/>
            <ConsultationCounsellorSection/>
            <ConsultationTestimonialSection/>
            <ConsultationCourses/>
            <ConsultationContactUs/>
        </div>
    );
}