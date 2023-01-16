import React from 'react'
import MedicalBenefitsInfograph from '../assets/essential-medical-infograph.png'
import NeverWaitForDoctorAgainImage from '../assets/never-wait-for-doctor.png'
import {FiArrowUpRight} from 'react-icons/fi'
import MedicalBenefitsBg from '../assets/medical-essential-benefits-background.png'

const HomeExploreSolutionsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center pb-20">
      <article className="flex-1 relative">
        <img className="w-full -ml-10 md:ml-0 relative z-10 max-w-[650px]" src={MedicalBenefitsInfograph} alt="medical benefits inforgraph" />
        <img className="absolute left-0 -bottom-6 2xl:-bottom-10" src={MedicalBenefitsBg} alt="Medical Benefits Background"/>
        <FiArrowUpRight className="text-2xl absolute bottom-0 left-full md:left-20" />
      </article>
      <article className="flex-1 relative font-main bg-gray-100">
        <div>
          <img className="w-full h-96 md:h-auto object-cover" src={NeverWaitForDoctorAgainImage} alt="never wait for doctor again" />
          <h2 className="text-4xl absolute z-10 top-6 left-8">Never wait for a <br/> doctor again.</h2>
        </div>
        <div className="p-10 flex flex-col items-center md:block font-body text-2xl">
          <p className=" text-gray-700 w-full text-center md:text-left tracking-wide max-w-[440px] pb-24">Spend more time with the people you love and less time in waiting rooms with MDHub.</p>
          <h2 className="font-main flex items-center space-x-2"><span>Explore our 360 solutions.</span> <FiArrowUpRight /></h2>
        </div>
      </article>
    </section>
  )
}

export default HomeExploreSolutionsSection