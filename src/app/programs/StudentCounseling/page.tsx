import HeroSection from "@/components/StudentCounseling/counseling-hero-section";
import ServicesSection from "@/components/StudentCounseling/counseling-services-section";
import AboutSection from "@/components/StudentCounseling/counseling-about-section";
import AdmissionsCoachingSection from "@/components/StudentCounseling/counseling-admission-coaching-section";
// import TestimonialsSection from "@/components/StudentCounseling/testimonials-section";
import FAQSection from "@/components/StudentCounseling/counseling-faq-section";
// import ContactSection from "@/components/StudentCounseling/contact-section";
import HowItWorksSection from "@/components/StudentCounseling/counseling-how-it-works-section";
import StudentStoriesSection from "@/components/StudentCounseling/counseling-student-stories-section";
import FeatureSection from "@/components/StudentCounseling/counseling-feature-section";
import DreamSchoolSection from "@/components/StudentCounseling/counseling-dream-school-section";
export default function StudentCounselingPage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AdmissionsCoachingSection/>
      <HowItWorksSection />
      <StudentStoriesSection/>
      <FeatureSection/>
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <DreamSchoolSection />
      {/* <ContactSection /> */}
    </div>
  );
}
