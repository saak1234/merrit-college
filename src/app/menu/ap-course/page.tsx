"use client";


import APCourseHeroSection from "@/components/APCourse/ap-course-hero-section";
import APCourseAboutSection from "@/components/APCourse/ap-course-about-section";
import APCourseDetailSection from "@/components/APCourse/ap-course-detail-section";
import APCourseWhySection from "@/components/APCourse/ap-course-why-section";
import APCourseFAQSection from "@/components/APCourse/ap-course-faq-section";

export default function APCourse() {
    return (
        <div>
            <APCourseHeroSection/>
            <APCourseAboutSection/>
            <APCourseDetailSection/>
            <APCourseWhySection/>
            <APCourseFAQSection/>
        </div>
    );
}