import React from 'react'
import { FaFileCode } from "react-icons/fa6";
import { TfiHandDrag } from "react-icons/tfi";
import { FaRegWindowRestore } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import fixedImage from '../assets/whiteIcon.svg'


function Home({toggleDarkMode, isDarkMode}) {
  return (
    <section className={`bg-[#F2F0FF] ${isDarkMode ? 'bg-primary text-white ' : 'bg-white text-primary'} relative`}> 
    {/* HERO CONTAINER */}
    <div className='p-6 sm:flex flex-col max-w-4xl mx-auto items-center sm:p-10'>
    
    <div className='w-fit mt-2 sm:mb-8 sm:mt-4 px-3 py-2 rounded-lg gap-2 flex items-center bg-[#fff6cc] border border-yellow hover:shadow-lg hover:-translate-y-1 transition duration-500 group'>
    <div className='w-2 h-2 bg-[#facc15] rounded-full border-[#713f12]'> </div>
    <p className='font-bold rounded-lg text-[#713f12] flex items-center justify-between gap-1 text-sm'>vO.24.1 
    <span className='text-[#ca8a04] text-xl group-hover:translate-x-1 transition duration-300'><GoArrowRight /></span></p>
   </div>

    <div className='hidden sm:flex justify-center items-center gap-6'>
        <div className={`flex items-center text-md  ${isDarkMode ? 'text-white' : 'text-[#6d6e73]'}  font-medium gap-2`}>
            <span><FaFileCode /></span>
            Code optional
        </div>
        <div className={`flex items-center text-md   ${isDarkMode ? 'text-white' : 'text-[#6d6e73]'}  font-medium gap-2`}>
            <span><TfiHandDrag /></span>
            Drag & drop builder
        </div>
        <div className={`flex items-center text-md font-medium ${isDarkMode ? 'text-white' : 'text-[#6d6e73]'}  gap-2`}>
            <span><FaRegWindowRestore /></span>
            Windows, Mac, Linux
        </div>
    </div>

        <div className='sm:text-center mt-8'>
            <h1 className='text-5xl sm:text-[3.8rem] md:text-[4.4rem] font-semibold'>Web app to desktop app in minutes</h1>
        </div>

        <div className='mt-8 sm:text-center'>
            <h2 className={`text-xl text-opacity-85 sm:text-2xl  ${isDarkMode ? 'text-white' : 'text-[#2f3033]'}`}>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</h2>
        </div>

        <div className='sm:flex mt-12 gap-4 items-center justify-center'>
        <div><button className='w-full mb-2 px-8 py-3 bg-secondary sm:mb-0 font-semibold rounded-lg shadow-md text-white text-lg hover:bg-opacity-90'>Download Now</button></div>
        <div><button className='w-full px-8 py-3 border border-[#cbcbe2] font-semibold rounded-lg shadow-md text-lg hover:border-[#acacc0]'>Read docs</button></div>
        </div>
        </div>
        <div className='w-12 h-12 rounded-full bg-[#3238f2] flex justify-center items-center fixed bottom-5 right-5 z-50'>
        <img className='w-6 h-6 object-contain fill-current brightness-200 contrast-200 text-white ' src={fixedImage} alt="" />

        </div>
    </section>
  )
//   bg-[#3238f2]
}

export default Home