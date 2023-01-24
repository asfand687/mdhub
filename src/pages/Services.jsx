import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ServicesHeaderSection from '../sections/ServicesHeaderSection'

const Services = () => {
  return (
    <div>
      <ServicesHeaderSection />
      <Outlet />
    </div>
  )
}

export default Services