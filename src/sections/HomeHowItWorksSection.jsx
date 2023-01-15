import React from 'react'
import Banner from '../assets/how-it-works-banner.png'
import HowItWorksHeading from '../assets/how-it-works-heading.png'
import HowItWorks01 from '../assets/how-it-works-01.png'
import HowItWorks02 from '../assets/how-it-works-02.png'
import HowItWorks03 from '../assets/how-it-works-03.png'
import HowItWorks04 from '../assets/how-it-works-04.png'
import HowItWorksStepsBg from '../assets/how-it-works-steps-bg.png'

const HomeHowItWorksSection = () => {
  return (
    <section className="py-20 flex items-center max-w-[90rem] mx-auto">
        <img className="w-[1000px] h-[600px]" src={Banner} alt="How It Works"/>
        <article className="p-4 shadow-xl -ml-[100px] relative">
          <img className="absolute top-0 left-0 w-full h-full" src={HowItWorksStepsBg} alt="Steps Background"/>
          <div className="w-[450px] border-2 border-[#00adcc] p-6 space-y-4 relative z-10">
            <img className="w-44" src={HowItWorksHeading} alt="How It Works"/>
            <article className="flex items-center justify-between">
              <div className="font-body">
                <h2 className="text-2xl text-[#00adcc]">Step 1</h2>
                <p className="text-sm text-gray-700">Describe your symptoms</p>
              </div>
              <img className="w-12" src={HowItWorks01} alt="Diagnosis Sheet"/>
            </article>

            <article className="flex items-center justify-between">
              <div className="font-body">
                <h2 className="text-2xl text-[#00adcc]">Step 2</h2>
                <p className="text-sm text-gray-700">Chat with a medical professional</p>
              </div>
              <img className="w-12" src={HowItWorks02} alt="Chat"/>
            </article>

            <article className="flex items-center justify-between">
              <div className="font-body">
                <h2 className="text-2xl text-[#00adcc]">Step 3</h2>
                <p className="text-sm text-gray-700">Get a diagnosis, prescription, and if required a lab requisition</p>
              </div>
              <img className="w-12" src={HowItWorks03} alt="Report"/>
            </article>

            <article className="flex items-center justify-between">
              <div className="font-body">
                <h2 className="text-2xl text-[#00adcc]">Step 4</h2>
                <p className="text-sm text-gray-700">Utilize our services to get treatment, online pharmacy, mobile nurse or lab testing</p>
              </div>
              <img className="w-12" src={HowItWorks04} alt="Treatment"/>
            </article>
          </div>
        </article>
    </section>
  )
}

export default HomeHowItWorksSection