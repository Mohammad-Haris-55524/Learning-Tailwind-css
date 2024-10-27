import React from 'react'
import image1 from '../assets/customer stories/clickUp.svg'
import image2 from '../assets/customer stories/CustomerStory.png'
import image3 from '../assets/customer stories/image3.jpeg'


import { FaCheck } from "react-icons/fa6"

function CustomerStories() {
  return (
    <>
    <section>
        
        <div className="lg:flex justify-between rounded-xl max-w-full bg-[#faf2f2] border border-gray pt-8 sm:pt-2 lg:pt-5 h-max ">
        <div className="px-7 sm:p-8 lg:px-12 lg:max-w-2xl ">
            <img src={image1} alt="" />
            <h1 className='text-[1.5rem] lg:text-[1.35rem] font-bold mt-8 mb-8'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h1>
            <ul className='flex flex-wrap gap-3 mb-12'>
                <li className='flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text'><span  className='text-sm '><FaCheck/></span> Chromeless UI</li>
                <li className='flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text'> <span className='text-sm '><FaCheck/></span> Native spellcheck</li>
                <li className='flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text'> <span className='text-sm '><FaCheck/></span> Task time in menubar</li>
                <li className='flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text'> <span className='text-sm '><FaCheck/></span> Notification count in the dock</li>
                <li className='flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text'> <span className='text-sm '><FaCheck/></span> Global hotkey to create task</li>
            </ul>
            <p className='text-lg opacity-65'>“ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our
            outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”</p>

            <div className='flex items-center gap-4 mt-8 mb-8'>
            <div className=''>
                <img className='w-12 h-12 rounded-full' src={image3} alt="" />
            </div>
            <div className='flex flex-col'>
            <h3 className='font-semibold'>Zeb Evans</h3>
            <p className='opacity-65'>Founder & CEO, ClickUp</p>
            </div>
        </div>
        </div>

        <div className="pl-7 lg:p-0 lg:px-0 justify-self-end self-end flex-grow max-w-lg">
        <img className="lg:max-w-lg"src={image2} alt="" />
        </div>
    </div>
    </section>
    </>
  )

}

export default CustomerStories