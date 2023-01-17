import React from 'react'
import Hero from '../assets/hero.png'
import {FiArrowUpRight} from 'react-icons/fi'

const HomeHeroSection = () => {
  return (
    <section className="max-w-[90rem] mx-auto flex flex-col-reverse gap-y-6 md:flex-row items-center py-10 md:py-20 relative">
      <aside className="hidden lg:block absolute -left-[70px] 2xl:-left-[150px] top-[430px] text-black opacity-20 transform -rotate-90">
        &copy; 2023 MDHub Inc
      </aside>
      <article className="flex-1 px-4 md:pl-20">
        <h2 className="font-main text-center md:text-left text-4xl md:text-8xl max-w-[700px]">Your health care,  <span className="md:pl-6">in your hands.</span></h2>
        <p className="font-body text-center md:text-left font-extralight text-gray-900 md:text-xl py-4 md:py-8 max-w-[630px]">
          From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.
        </p>
        <div className='flex justify-center md:justify-start space-x-6 font-main text-gray-700'>
          <button className="rounded-full group hover:ring-1 hover:ring-primary px-8 py-2 border flex items-center space-x-2  border-primary  bg-transparent">
            <span>See A Doctor</span> <FiArrowUpRight className="text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
          </button>
          <button className="rounded-full group hover:ring-1 hover:ring-primary px-8 py-2 border flex items-center space-x-2  border-primary  bg-transparent">
            <span>Sign Up</span> <FiArrowUpRight className="text-lg transition-colors ease-out duration-150 group-hover:text-primary" />
          </button>
        </div>
      </article>
      <article className="flex-1 flex justify-center">
        <img className="w-full max-w-[550px]" src={Hero} alt="Hero" />
      </article>
    </section>
  )
}

export default HomeHeroSection