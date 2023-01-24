import React from 'react'
import Button from './Button'
import { VirusTestingAndVaccination } from '../assets'

const DescriptionGrid = ({ title }) => {
  return (
    <service className="py-20 flex font-body items-center justify-center gap-x-8">
      <article>
        <h2 className="text-4xl font-main text-gray-800">{title}</h2>
        <p className="w-full max-w-[400px] pt-4 pb-6 text-gray-600 font-light text-sm">
          Unlimited 24/7 access to Medical advice, diagnosis, and treatment (including prescriptions, lab work, referrals to specialists, and more). Referral to clinics, when necessary.
        </p>
        <div className="flex space-x-4 font-main">
          <Button wide>
            See A Doctor
          </Button>
          <Button wide>
            Sign Up
          </Button>
        </div>
      </article>
      <article>
        <img className="w-full max-w-[450px]" src={VirusTestingAndVaccination} alt="Virus Testing & Vaccination" />
      </article>

    </service>
  )
}

export default DescriptionGrid