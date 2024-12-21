import HeroSection from "@/components/Admission/admission-hero-section";
import Section from "@/components/Admission/admission-services-section";
import AdmissionProcess from "@/components/Admission/admission-process-section";
import ContactSection from "@/components/Admission/admission-contact-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Section />
      <AdmissionProcess />
      <ContactSection />
    </div>
  );
}
