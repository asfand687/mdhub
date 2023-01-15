import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-primary text-white ">
      <div className="flex justify-center space-x-28 py-12">
        <header>
          <img className="w-36" src={Logo} alt="Logo"/>
        </header>
        <article className="space-y-6">
          <h2 className="font-main text-2xl">Contact Info</h2>
          <ul className="font-body text-sm">
            <li>Motreal, QC</li>
            <li>+1 416 222 3333</li>
            <li>info@mdhub.com</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">Useful Links</h2>
          <ul className="font-body text-sm">
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Memberships</li>
            <li>Virtual Doctor</li>
            <li>Online Pharmacy</li>
            <li>Nursing & Homecare</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="font-main text-2xl">Subscribe</h2>
          <div className="font-body text-sm space-y-2">
            <p className="max-w-[230px]">Subscribe to our newsletter for latest news and updates</p>
            <form className="flex space-x-1 text-xs">
              <input className="px-2 bg-transparent text-white border border-white placeholder:text-white" placeholder="E-mail"/>
              <button className="bg-white text-primary px-3 py-1" type="submit">Subscribe</button>
            </form> 
          </div>
        </article>
        </div>
        <div className="bg-[#5d95b6] text-white font-body text-lg py-4 px-8 2xl:px-12 flex justify-between items-center">
          <p>&copy; 2023 MDHub Inc</p>
          <div className="flex items-center space-x-6">
            <img className="w-16" src={Facebook} alt="Facebook"/>
            <img className="w-16" src={Linkedin} alt="Linkedin"/>
            <img className="w-16" src={Twitter} alt="Twitter"/>
          </div>
        </div>
    </footer>
  )
}

export default Footer