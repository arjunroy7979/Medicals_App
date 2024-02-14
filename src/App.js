import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import RegisterSection from './components/pages/RegisterSection'
import FacilitySection from './components/pages/FacilitySection'
import OurServicesSection from './components/pages/OurServicesSection'
import VideoSection from './components/pages/VideoSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './components/pages/UserDetails'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <RegisterSection />
            <FacilitySection />
            <OurServicesSection ourservices={'Our Services'}/>
            <VideoSection />
          </>} />
          <Route path='/userdetails' element={
            <>
              <Navbar />
              <UserDetails />
            </>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App