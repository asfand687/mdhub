import React from 'react'
import {
  CorporateOverview01,
  CorporateOverview02,
  CorporateOverview03,
  CorporateOverview04,
} from '../../assets'

const CorporateOverview = () => {
  return (
    <section className="font-main pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        <article>
          <div className="relative flex">
            <img className="w-full" src={CorporateOverview01} alt="Corporate Overview" />
            <h2 className="absolute bottom-8 left-8 text-white text-4xl">Corporate Overview</h2>
          </div>

          <div className="py-10 flex justify-center gap-x-10 text-center">
            <article>
              <h2 className="text-primary text-8xl">91%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of medical issues resolved in the first interaction
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">65%</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Of visits prevent a workplace absense
              </p>
            </article>
            <article>
              <h2 className="text-primary text-8xl">3.6</h2>
              <p className="text-xl  w-full max-w-[250px] leading-6 font-body">
                Hours saves per consultation on average
              </p>
            </article>
          </div>

          <div>
            <p className="font-body text-xl text-center py-8 font-light">
              Lorem ipsum dolor sit amet consectetur. Duis nibh a lobortis nunc tortor fermentum nisi ac hendrerit.
            </p>
            <div className="flex justify-center gap-x-12">
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                5-10 Employees
              </button>
              <button className={`rounded-full text-xl group hover:ring-1 hover:ring-primary px-10 py-2 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
                10+ Employees
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CorporateOverview