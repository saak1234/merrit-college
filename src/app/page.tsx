// pages/index.tsx
import FeatureSection from "@/components/LandingPage/feature-section";
import AboutSection from "@/components/LandingPage/about-section";
import ProgramSection from "@/components/LandingPage/program-section";
import WhySection from "@/components/LandingPage/why-section";
import UpcomingEvents from "@/components/LandingPage/upcoming-events-section";
import LatestNewsSection from "@/components/LandingPage/latest-news-section";
import LandingPageHeroSection from "@/components/LandingPage/landing-page-hero";
import Courses from "@/components/APPrep/courses";


export default function Home() {
    return (
        <div>
            <LandingPageHeroSection/>
            <FeatureSection/>
            <AboutSection/>
            <Courses/>
            <ProgramSection/>
            <WhySection/>
            <UpcomingEvents/>
            <LatestNewsSection/>
        </div>
    );
}