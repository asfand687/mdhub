import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className="flex py-4">
        <article className="lg:pl-12">
          <img className="w-28" src={Logo} alt="MD Hub"/>
        </article>
        <article className="flex text-xl font-medium flex-1 justify-center space-x-14 font-main">
          <span>for you</span>
          <span>for family</span>
          <span>for corporate</span>
          <span>for services</span>
        </article>
        <article>
          <div className="lg:pr-28 font-body space-x-6">
            <button className="rounded-full px-8 py-1 border border-primary text-primary bg-transparent">
              Login
            </button>
            <button className="rounded-full px-8 py-1 border border-primary text-white bg-primary bg-transparent ">
              Sign Up
            </button>
          </div>
          <div className="absolute flex flex-col justify-center space-y-1 top-0 right-0 bg-primary text-white py-6 px-4">
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-4 h-[2px] bg-white"></span>
          </div>
        </article>
      </div>
    </nav>
  )
}

export default Navbar