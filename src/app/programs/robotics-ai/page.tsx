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


export default function ConsultationPage() {
    return (
        <div>
            <RoboticsHeroSection/>
            <RoboticsFeaturesSection/>
            <RoboticsAboutSection/>
            <RoboticsClassesSection/>
            <RoboticsPricingSection/>
            <RoboticsAdmissionSection/>
            <RoboticsTeachersSection/>
            <RoboticsTestimonialSection/>
            <RoboticsFAQSection/>
        </div>
    );
}