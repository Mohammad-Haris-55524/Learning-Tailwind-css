import React from 'react'
import { FaFileCode } from "react-icons/fa6";
import { TfiHandDrag } from "react-icons/tfi";
import { FaRegWindowRestore } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";


function Home() {
  return (
    <section className='min-h-screen bg-[#F2F0FF]'> 
    {/* HERO CONTAINER */}
    <div className='p-6 sm:flex flex-col max-w-4xl mx-auto items-center sm:p-12'>
    
    <div className='w-fit mt-2 sm:mb-8 sm:mt-4 px-4 py-2 rounded-lg gap-2 flex items-center bg-[#fff6cc] border border-yellow hover:shadow-md hover:-translate-y-1 transition duration-500 group'>
    <div className='w-2 h-2 bg-[#facc15] rounded-full border-[#713f12]'> </div>
    <p className='font-bold rounded-lg text-[#713f12] flex items-center justify-between gap-1'>vO.24.1 
    <span className='text-[#ca8a04] text-xl group-hover:translate-x-1 transition duration-300'><GoArrowRight /></span></p>
   </div>

    <div className='hidden sm:flex justify-center items-center gap-6'>
        <div className='text-md flex items-center sm:text-sm md:text-xl text-[#6d6e73] font-medium gap-2'>
            <span><FaFileCode /></span>
            Code optional
        </div>
        <div className='text-md flex items-center sm:text-sm md:text-xl  text-[#6d6e73] font-medium gap-2'>
            <span><TfiHandDrag /></span>
            Drag & drop builder
        </div>
        <div className=' text-md flex items-center sm:text-sm md:text-xl font-medium text-[#6d6e73] gap-2'>
            <span><FaRegWindowRestore /></span>
            Windows, Mac, Linux
        </div>
    </div>

        <div className='sm:text-center mt-8'>
            <h1 className='text-5xl sm:text-[3.7rem] md:text-[4.2rem] lg:text-[5rem] font-bold'>Web app to desktop app in minutes</h1>
        </div>
        {/* md:text-[4rem] sm:text-6xl sm:tracking-wider */}
        {/* text-5xl md:text-7xl md:font-semibold lg:text-[5rem] lg:font-bold */}
        <div className='mt-8 sm:text-center'>
            <h2 className='text-xl text-opacity-85 sm:text-2xl text-[#2f3033]'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</h2>
        </div>

        <div className='sm:flex mt-12 gap-4 items-center justify-center'>
        <div><button className='w-full mb-2 py-3 bg-primary sm:px-9 sm:mb-0 sm:py-4 font-semibold rounded-lg shadow-md text-white text-lg hover:bg-opacity-90'>Download Now</button></div>
        <div><button className='w-full py-3 border border-[#cacae4] sm:px-9 sm:py-4 font-semibold rounded-lg shadow-md text-lg hover:border-[#b6b6d3]'>Read docs</button></div>
        </div>
        </div>
    </section>
  )
}

export default Home