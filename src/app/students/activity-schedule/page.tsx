import React from 'react'
// import HeroSection from '@/components/ActivitySchedule/activities-hero-section';
import Activites from '@/components/ActivitySchedule/activities';
import StudentSupport from '@/components/ActivitySchedule/activities-student-support';
import HeroSection from '@/components/ui/hero-section';
const Activity = () => {
  return (
    <div>
        <HeroSection
        header="Embracing Learning with Discovery and Joy"
        description="Welcome to our Student Life page, where the magic of childhood comes
          alive through enriching experiences and adventures. At our
          kindergarten school, we strive to create a holistic and engaging 
          environment that nurtures every aspect of a child&#39;s development."
        image="activity-hero.jpg"/>
        <Activites/>
        <StudentSupport/>
    </div>
  )
}

export default Activity