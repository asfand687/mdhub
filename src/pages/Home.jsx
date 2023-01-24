import React from 'react'
import HomeBrandsSection from '../sections/HomeBrandsSection'
import HomeExploreSolutionsSection from '../sections/HomeExploreSolutionsSection'
import HomeHeadspaceSection from '../sections/HomeHeadspaceSection'
import HomeHeroSection from '../sections/HomeHeroSection'
import HomeHowItWorksSection from '../sections/HomeHowItWorksSection'
import HomeMembershipBenefitsSection from '../sections/HomeMembershipBenefitsSection'
import HomeMembershipCostCtaSection from '../sections/HomeMembershipCostCtaSection'

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeExploreSolutionsSection />
      <HomeMembershipBenefitsSection />
      <HomeHeadspaceSection />
      <HomeHowItWorksSection />
      <HomeMembershipCostCtaSection />
      <HomeBrandsSection />
    </div>
  )
}

export default Home