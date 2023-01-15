import React from 'react'
import Hero from '../assets/hero.png'
import {FiArrowUpRight} from 'react-icons/fi'

const HomeHeroSection = () => {
  return (
    <section className="max-w-[90rem] mx-auto flex items-center py-20 relative">
      <aside className="hidden lg:block absolute -left-[70px] 2xl:-left-[150px] top-[430px] text-black opacity-20 transform -rotate-90">
        &copy; 2023 MDHub Inc
      </aside>
      <article className="flex-1 pl-20">
        <h2 className="font-main text-8xl max-w-[700px]">Your health care,  <span className="pl-6">in your hands.</span></h2>
        <p className="font-body font-extralight text-gray-900 text-xl py-8 max-w-[630px]">
          From meeting a doctor to ordering a perscription get the 360 healthcare you need all in one place.
        </p>
        <div className='flex space-x-6 font-main text-gray-700'>
          <button className="rounded-full px-8 py-2 border flex items-center space-x-2  border-primary  bg-transparent">
              <span>Get Started</span> <FiArrowUpRight className="text-lg"/>
          </button>
          <button className="rounded-full px-8 py-2 border flex items-center space-x-2  border-primary  bg-transparent">
            <span>Login</span> <FiArrowUpRight className="text-lg"/>
          </button>
        </div>
      </article>
      <article className="flex-1 flex justify-center">
        <img className="w-[550px]" src={Hero} alt="Hero"/>
      </article>
    </section>
  )
}

export default HomeHeroSection