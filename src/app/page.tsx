import FeatureSection from "@/components/LandingPage/landing-feature-section";
import AboutSection from "@/components/LandingPage/landing-about-section";
import ProgramSection from "@/components/LandingPage/landing-program-section";
import WhySection from "@/components/LandingPage/landing-why-section";
import UpcomingEvents from "@/components/LandingPage/landing-upcoming-events-section";
import LatestNewsSection from "@/components/LandingPage/landing-latest-news-section";
import LandingPageHeroSection from "@/components/LandingPage/landing-page-hero";
import Courses from "@/components/APPrep/courses";
import Collaboration from "@/components/LandingPage/landing-collaboration";
import StickyButtonGroup from "@/components/LandingPage/landing-sticky-button-group";
import ContactSection from '@/components/Admission/admission-contact-section';
export default function Home() {
    return (
        <div>
            <LandingPageHeroSection/>
            <FeatureSection/>
            <AboutSection/>
            <WhySection/>
            <ProgramSection/>
            <Courses/>
            <UpcomingEvents/>
            <Collaboration/>
            <LatestNewsSection/>
            <ContactSection/>
            <StickyButtonGroup />
        </div>
    );
}