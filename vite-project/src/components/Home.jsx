import React from 'react'
import { FaFileCode } from "react-icons/fa6";
import { TfiHandDrag } from "react-icons/tfi";
import { FaRegWindowRestore } from "react-icons/fa";


function Home() {
  return (
    <section className='bg-primary'> 

    <div className='m-auto w-[60%] min-h-screen bg-gray border-2'>

    <div className='mb-8 text-center'>
        <button className='border border-gray-400 border-opacity-50 px-3 py-1 font-semibold rounded-lg'><a href="#">vO.24.1</a></button>
    </div>

    <div className='flex justify-center items-center gap-8 border-2'>
        <div className='flex items-center text-lg text-[#6d6e73] font-medium gap-2'>
            <span><FaFileCode /></span>
            Code optional
        </div>
        <div className='flex items-center text-lg  text-[#6d6e73] font-medium gap-2'>
            <span><TfiHandDrag /></span>
            Drag & drop builder
        </div>
        <div className='flex items-center text-lg font-medium text-[#6d6e73] gap-2'>
            <span><FaRegWindowRestore /></span>
            Windows, Mac, Linux
        </div>
    </div>

        <div className='text-center mt-8'>
            <h1 className='font-bold text-7xl'>Web app to desktop app in minutes</h1>
        </div>

        <div className='mt-8 text-center '>
            <h2 className= 'text-2xl text-[#2f3033]'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</h2>
        </div>

        <div className='flex mt-12 gap-4 items-center justify-center'>
        <div><button className='bg-primary px-8 py-3 font-semibold rounded-lg'>Download Now</button></div>
        <div><button className='border border-gray-400 px-8 py-3 font-semibold rounded-lg'>Read docs</button></div>
        </div>
        </div>
    </section>
  )
}

export default Home