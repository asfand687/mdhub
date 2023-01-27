import React from 'react'
import {
  HowItWorksBanner,
  HowItWorksHeading,
  HowItWorks01,
  HowItWorks02,
  HowItWorks03,
  HowItWorks04,
  HowItWorksStepsBg
} from '../../assets'
import Slider from '../../components/Slider'

const HomeHowItWorksSection = () => {
  return (
    <section className="w-full max-w-[90rem] mx-auto py-10">
      <h2 className="text-4xl font-main text-center">How It Works</h2>
      <img className="w-44 mx-auto" src={HowItWorks01} />
      <Slider />
    </section>
  )
}

export default HomeHowItWorksSection