"use client";

import VisaHeroSection from "@/components/VisaPage/visa-hero-section";
import VisaDescriptionSection from "@/components/VisaPage/visa-description-section";
import VisaApplicationStepsSection from "@/components/VisaPage/visa-application-steps-section";
import VisaEventsSection from "@/components/VisaPage/visa-events-section";
import VisaFAQSection from "@/components/VisaPage/visa-faq-section";

export default function VisaPage() {
    return (
        <div>
            <VisaHeroSection/>
            <VisaDescriptionSection/>
            <VisaApplicationStepsSection/>
            <VisaEventsSection/>
            <VisaFAQSection/>
        </div>
    );
}