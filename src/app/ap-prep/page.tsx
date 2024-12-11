"use client";

import Hero from "@/app/components/APPrep/hero";
import Courses from "@/app/components/APPrep/courses";
import About from "@/app/components/APPrep/about";
import ContactUs from "@/app/components/APPrep/contact-us";

export default function APPrep() {
    return (
        <div>
            <Hero/>
            <Courses/>
            <About/>
            <ContactUs/>
        </div>
    );
}