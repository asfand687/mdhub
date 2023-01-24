import React from 'react'
import DescriptionGrid from '../../components/DescriptionGrid'
import { ServicesMedicalLaboratoryHero } from '../../assets'

const ServicesMedicalLaboratory = () => {
  return (
    <section className="font-body">
      <DescriptionGrid
        title="Lab Testing"
        imageSrc={ServicesMedicalLaboratoryHero}
        reverse
      >
        <p>
          MD HUB offers a full range of certified laboratory testing to meet all your medical needs. Our members benefit from an affordable and efficient service with precise and fast results.
        </p>
        <p>
          Members with a lab requisition on hand may simply load it on our form bellow and select a preferred nurse testing time and date. Otherwise if you do not have a requisition form getting one on MD HUB is easy (Learn more)

        </p>
      </DescriptionGrid>
    </section>
  )
}

export default ServicesMedicalLaboratory