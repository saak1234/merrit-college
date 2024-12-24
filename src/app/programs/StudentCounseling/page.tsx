import HeroSection from "@/components/StudentCounseling/hero-section";
import ServicesSection from "@/components/StudentCounseling/services-section";
import AboutSection from "@/components/StudentCounseling/about-section";
import AdmissionsCoachingSection from "@/components/StudentCounseling/admission-coaching-section";
// import TestimonialsSection from "@/components/StudentCounseling/testimonials-section";
import FAQSection from "@/components/StudentCounseling/faq-section";
// import ContactSection from "@/components/StudentCounseling/contact-section";
import HowItWorksSection from "@/components/StudentCounseling/how-it-works-section";
import StudentStoriesSection from "@/components/StudentCounseling/student-stories-section";
import FeatureSection from "@/components/StudentCounseling/feature-section";
import DreamSchoolSection from "@/components/StudentCounseling/dream-school-section";
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
