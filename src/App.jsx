import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomeBrandsSection from './sections/HomeBrandsSection'
import HomeExploreSolutionsSection from './sections/HomeExploreSolutionsSection'
import HomeHeadspaceSection from './sections/HomeHeadspaceSection'
import HomeHeroSection from './sections/HomeHeroSection'
import HomeHowItWorksSection from './sections/HomeHowItWorksSection'
import HomeMembershipBenefitsSection from './sections/HomeMembershipBenefitsSection'
import HomeMembershipCostCtaSection from './sections/HomeMembershipCostCtaSection'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <HomeHeroSection/>
      <HomeExploreSolutionsSection/>
      <HomeMembershipBenefitsSection/>
      <HomeHeadspaceSection/>
      <HomeHowItWorksSection/>
      <HomeMembershipCostCtaSection/>
      <HomeBrandsSection/>
      <Footer/>
    </div>
  )
}

export default App
