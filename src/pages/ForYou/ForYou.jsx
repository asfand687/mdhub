import React from 'react'
import { ForYouHeaderSection } from '../../sections'

const ForYou = () => {
  return (
    <section>
      <ForYouHeaderSection />
      <section className="w-full max-w-[1130px] mx-auto py-10 font-main">
        <div className="space-y-6">
          <h2 className="text-4xl">Lorem ipsum dolor.</h2>
          <p className="font-body font-light">Lorem ipsum dolor sit amet consectetur. Rhoncus sed imperdiet mauris facilisi at imperdiet hendrerit enim. Sed fames pharetra sagittis pellentesque ullamcorper amet dolor pellentesque. Amet enim dictum ut et eu nulla vitae cras varius. Consectetur aliquet cras sit aliquam a faucibus at. Tortor nunc amet vel ipsum congue. Amet in tristique vitae ultrices mi tempus egestas vitae ac. Eget euismod vel etiam elementum laoreet etiam amet viverra. Blandit scelerisque elementum euismod nullam massa ullamcorper tellus donec amet. Pretium tincidunt hendrerit morbi id pellentesque ac facilisis. Ut nec nulla dignissim convallis sit sit donec. Et nullam sed porttito.</p>
          <button className={`rounded-full text-lg shadow-cardService group hover:ring-1 hover:ring-primary px-10 py-3 border flex justify-center items-center space-x-2  border-primary bg-transparent`}>
            Sign Up Today
          </button>
        </div>
      </section>
    </section>
  )
}

export default ForYou