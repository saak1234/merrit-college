"use client";

import Hero from "@/components/APPrep/hero";
import Courses from "@/components/APPrep/courses";
import About from "@/components/APPrep/about";
import ContactUs from "@/components/APPrep/contact-us";

export default function APCourse() {
    return (
        <div>
            <h1>AP Course</h1>
            <Hero/>
            <Courses/>
            <About/>
            <ContactUs/>
        </div>
    );
}