import React from 'react'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="flex items-center justify-between md:py-4">
        <article className="pl-4 lg:pl-12">
          <img className="w-28" src={Logo} alt="MD Hub"/>
        </article>
        <article className="hidden md:flex justify-between text-xl font-medium flex-1 font-main">
          <ul className="flex flex-1 justify-center items-center space-x-14">
            <li className="flex items-center space-x-[1px]">
            <RxDotFilled className="opacity-50" /> 
            <span>for you</span>
            </li>
            <li>for family</li>
            <li>for corporate</li>
            <li>for services</li>
          </ul>
          <div className="lg:pr-28 font-body space-x-6">
            <button className="rounded-full px-8 py-1 border border-primary font-body text-primary bg-transparent">
              Login
            </button>
            <button className="rounded-full px-8 py-1 border border-primary font-body text-white bg-primary">
              Sign Up
            </button>
          </div>
        </article>
        <article className="md:absolute flex flex-col justify-center space-y-1 top-0 right-0 bg-primary text-white py-6 px-4">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-4 h-[2px] bg-white"></span>
        </article>
      </div>
    </nav>
  )
}

export default Navbar