import React from 'react'
import HeroSection from '@/components/ActivitySchedule/activities-hero-section';
import Activites from '@/components/ActivitySchedule/activities';
import StudentSupport from '@/components/ActivitySchedule/activities-student-support';
const Activity = () => {
  return (
    <div>
        <HeroSection/>
        <Activites/>
        <StudentSupport/>
    </div>
  )
}

export default Activity