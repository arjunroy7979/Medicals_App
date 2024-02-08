import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import RegisterSection from './components/pages/RegisterSection'
import FacilitySection from './components/pages/FacilitySection'
import OurServicesSection from './components/pages/OurServicesSection'
import VideoSection from './components/pages/VideoSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <RegisterSection />
      <FacilitySection />
      <OurServicesSection />
      <VideoSection />
    </div>
  )
}

export default App