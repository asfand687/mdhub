import React from 'react'
import ServicesCard from '../components/ServicesCard'
import {
  TestingIcon,
  DoctorIcon,
  MedicineIcon,
  NursingIcon,
  PharmacyIcon
} from '../assets'

const ServicesHeaderSection = () => {
  return (
    <section>
      <h2 className="font-main py-6 text-4xl text-center">Services</h2>
      <div className="flex justify-center gap-x-6 text-white font-main">
        <ServicesCard title={"virus testing"} bgPrimary>
          <TestingIcon className="text-white" />
        </ServicesCard>

        <ServicesCard title={"virtual doctor"}>
          <DoctorIcon className="text-primary" />
        </ServicesCard>

        <ServicesCard title={"medical laboratory"}>
          <MedicineIcon className="text-primary" />
        </ServicesCard>

        <ServicesCard title={"nursing & homecare"}>
          <NursingIcon className="text-primary" />
        </ServicesCard>

        <ServicesCard title={"online pharmacy & delivery"} wideCaption>
          <PharmacyIcon className="text-primary" />
        </ServicesCard>
      </div>
    </section>
  )
}

export default ServicesHeaderSection