import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesVirusTesting from './pages/ServicesVirusTesting'
import ServicesVirtualDoctor from './pages/ServicesVirtualDoctor'


function App() {

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
      <Navbar/>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />}>
              <Route index element={<ServicesVirusTesting />} />
              <Route path="virtual-doctor" element={<ServicesVirtualDoctor />} />
            </Route>
          </Routes>
        </main>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
