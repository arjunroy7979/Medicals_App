import React, { createContext } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import RegisterSection from './components/pages/RegisterSection'
import FacilitySection from './components/pages/FacilitySection'
import OurServicesSection from './components/pages/OurServicesSection'
import VideoSection from './components/pages/VideoSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetails from './components/pages/UserDetails'

const OurServices = createContext();

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <RegisterSection />
            <FacilitySection />
            <OurServices.Provider value={'Our Services'}>
              <OurServicesSection />
            </OurServices.Provider>
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
export { OurServices };