// import HeroSection from '@/components/Leadership/leadership-hero-section'
import Gallery from '@/components/Leadership/leadership-gallery-section'
import Section from '@/components/Leadership/leadership-section'
import React from 'react'
import HeroSection from '@/components/ui/hero-section'
const leadership = () => {
  return (
    <div>
      <HeroSection 
      header="Leadership Program"
      description=" Develop essential leadership skills through hands-on experience and mentorship
       opportunities. Our program focuses on building confident, capable leaders for tomorrow."
      image="leadership.jpg"/>
      {/* <HeroSection/> */}
      <Section/>
      <Gallery/>
    </div>
  )
}

export default leadership