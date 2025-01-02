// pages/index.tsx

import RoboticsHeroSection from "@/components/RoboticsAI/robotics-hero-section";
import RoboticsFeaturesSection from "@/components/RoboticsAI/robotics-features-section";
import RoboticsAboutSection from "@/components/RoboticsAI/robotics-about-section";
import RoboticsClassesSection from "@/components/RoboticsAI/robotics-classes-section";
import RoboticsPricingSection from "@/components/RoboticsAI/robotics-pricing-section";
import RoboticsAdmissionSection from "@/components/RoboticsAI/robotics-admission-section";
import RoboticsTeachersSection from "@/components/RoboticsAI/robotics-teachers-section";
import RoboticsTestimonialSection from "@/components/RoboticsAI/robotics-testimonials-section";
import RoboticsFAQSection from "@/components/RoboticsAI/robotics-faq-section";
import  AIProgramsSection from "@/components/RoboticsAI/ai-program-section";
import  AIOutcomesSection from "@/components/RoboticsAI/ai-outcome-section";
// import AITestimonialsSection from "@/components/RoboticsAI/ai-testimonials-section";

export default function ConsultationPage() {
    return (
        <div>
            <RoboticsHeroSection/>
            <AIProgramsSection/>
            <RoboticsFeaturesSection/>
            <RoboticsAboutSection/>
            <RoboticsClassesSection/>
            <AIOutcomesSection/>
            <RoboticsPricingSection/>
            <RoboticsAdmissionSection/>
            <RoboticsTeachersSection/>
            <RoboticsTestimonialSection/>
            {/* <AITestimonialsSection/> */}
            <RoboticsFAQSection/>
        </div>
    );
}