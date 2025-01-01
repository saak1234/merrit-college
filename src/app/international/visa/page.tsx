"use client";

// import VisaHeroSection from "@/components/VisaPage/visa-hero-section";
import VisaDescriptionSection from "@/components/VisaPage/visa-description-section";
import VisaApplicationStepsSection from "@/components/VisaPage/visa-application-steps-section";
import VisaEventsSection from "@/components/VisaPage/visa-events-section";
import HeroSection from "@/components/ui/hero-section";
// import VisaFAQSection from "@/components/VisaPage/visa-faq-section";
import ContactSection from '@/components/Admission/admission-contact-section';

export default function VisaPage() {
    return (
        <div>
            {/* <VisaHeroSection/> */}
            <HeroSection header="Visa Application" 
            description="Simplify your travel needs with our expert visa services. Our streamlined
                            process ensures quick and hassle-free visa applications, so you can focus
                            on planning your trip."
            image="visa-hero.jpg"/>
            <VisaDescriptionSection/>
            <VisaApplicationStepsSection/>
            <VisaEventsSection/>
            {/*<VisaFAQSection/>*/}
            <ContactSection/>
        </div>
    );
}