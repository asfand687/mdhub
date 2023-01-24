import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { RxDotFilled } from 'react-icons/rx'
import Drawer from './Drawer'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className="md:border-b border-primary pb-[2px] md:pb-[6px] shadow">
      <Drawer showDrawer={showDrawer} close={setShowDrawer} />
      <div className="flex py-4">
        <article className="pl-4 lg:pl-12">
          <Link to="/">
            <img className="cursor-pointer w-28" src={Logo} alt="MD Hub" />
          </Link>
        </article>
        <article className="hidden md:flex justify-between text-xl font-medium flex-1 font-main">
          <ul className="flex flex-1 justify-center items-center space-x-14">
            <li className="relative cursor-pointer hover:opacity-90">
              <RxDotFilled className="absolute text-primary -left-5 top-[6px]" />
              <span>for you</span>
            </li>
            <li>for family</li>
            <li>for corporate</li>
            <Link to="/services">services</Link>
          </ul>
          <div className="lg:pr-24 text-light text-base space-x-4 font-main font-light">
            <button className="rounded-full px-6 py-1 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all ease-in-out duration-300">
              Login
            </button>
            <button className="rounded-full px-6 py-1 border border-primary text-white bg-primary hover:bg-transparent hover:text-primary transition-all ease-in-out duration-300">
              Sign Up
            </button>
          </div>
        </article>
        <article onClick={() => setShowDrawer(!showDrawer)} className="absolute cursor-pointer flex flex-col justify-center space-y-1 top-0 right-0 bg-primary text-white py-6 px-4 md:py-8 md:px-6">
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-4 h-[2px] bg-white"></span>
        </article>
      </div>
    </nav>
  )
}

export default Navbar