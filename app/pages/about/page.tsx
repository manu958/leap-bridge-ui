import React from 'react'
import AboutHero from '@/app/components/About/AboutHero'
import HappyCustomer from '@/app/components/About/HappyCustomer'
import Aboutmap from '@/app/components/About/Aboutmap'
import VisionAbout from '@/app/components/About/VisionAbout'
import FounderAbt from '@/app/components/About/FounderAbt'
import ScheduleCallSection from '@/app/components/About/ScheduleCallSection'

const about = () => {
  return (
     <><AboutHero />
     <HappyCustomer />
     <Aboutmap/>
     <VisionAbout/>
     <FounderAbt/>
     <ScheduleCallSection/>
     </>
  )
}

export default about