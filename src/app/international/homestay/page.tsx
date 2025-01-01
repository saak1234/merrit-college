import React from 'react'
// import HeroSection from '@/components/Homestay/home-hero-section';
import HomeStay from '@/components/Homestay/home-homestay';
import HeroSection from "@/components/ui/hero-section";
import HomeDescription from '@/components/Homestay/home-description';
const homestay = () => {
  return (
    <div>
        <HeroSection header="HomeStay" description="Our homestays provide you a truly 
            affordable and safe way to stay, when studying in Ontario Canada.
            We assist students with their applications and advise them based 
            on their own unique situations."
            image ="homestay-hero.jpg"/>
        <HomeDescription/>
        <HomeStay/>
    </div>
  )
}

export default homestay