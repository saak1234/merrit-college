import React from 'react'
import HeroSection from '@/components/Homestay/home-hero-section';
import HomeStay from '@/components/Homestay/home-homestay';
import HomeDescription from '@/components/Homestay/home-description';
const homestay = () => {
  return (
    <div>
        <HeroSection/>
        <HomeDescription/>
        <HomeStay/>
    </div>
  )
}

export default homestay