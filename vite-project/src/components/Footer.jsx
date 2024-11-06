import React from 'react'
import Logo from "../assets/headerLogo.avif"
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import footerImage from "../assets/footer-image.svg"

function Footer() {
  return (
    <section className='mt-20 flex flex-col'>
    <div className='py-12 px-8 rounded-xl border border-gray flex justify-between bg-[#fafafc] outline  '>
        <div className='inline-flex items-center'>
        <img className='' src={Logo} alt="" />
        <p className='text-lg font-semibold'>toDesktop</p>
        </div>

        <div className='inline-flex items-center gap-10 '>
            <h1 className='text-lg opacity-50 hover:opacity-100 transition'>Documentation</h1>
            <span className='text-xl font-semibold opacity-50  hover:opacity-100 transition'><FaTwitter /></span> 
       
            <span className='text-xl font-semibold opacity-50 hover:opacity-100 transition'><FaGithub /></span>
        </div>
        </div>


<div className='mx-auto place-items-center mt-12 mb-12 outline'>
 
<div className='inline-flex justify-between items-center gap-3'>
    <img className='w-3 h-3' src={footerImage} alt="" />
    <span className='text-sm opacity-80'>A Y Combinator company.</span>
</div>
 
<div className='text-sm opacity-40 pt-4'>© 2024 ToDesktop, Inc. All rights reserved.</div>

</div>
     
    </section>
  )
}

export default Footer