import React from 'react'
import bgImage from '../assets/nextImage01.jpg'
import insideImage from '../assets/nextImage02.png'

function AnotherSlider() {
  return (
    <section className='px-6 pb-12 pt-[4.5rem] sm:px-9 sm:pt-[6.6rem] sm:pb-20'>
        <div className='relative flex justify-center items-center'>
            <div className='border border-gray rounded-2xl'>
                <img className="rounded-2xl" src={bgImage} alt="" />
            </div>

        <div className='max-w-[55%] shadow-2xl drop-shadow-2xl rounded-xl  border border-[#cedddd] absolute  '>
          <img src={insideImage} alt="" />
        </div>

        </div>


    </section>
  )
}

export default AnotherSlider