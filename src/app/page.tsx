// pages/index.tsx
import FeatureSection from "@/app/components/LandingPage/feature-section";
import AboutSection from "@/app/components/LandingPage/about-section";
import ProgramSection from "@/app/components/LandingPage/program-section";
import WhySection from "@/app/components/LandingPage/why-section";
import UpcomingEvents from "@/app/components/LandingPage/upcoming-events-section";
import LatestNewsSection from "@/app/components/LandingPage/latest-news-section";
import LandingPageHeroSection from "@/app/components/LandingPage/landing-page-hero";
import Courses from "@/app/components/APPrep/courses";


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