import React from 'react'
import Logo from "../assets/headerLogo.avif"
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import footerImage from "../assets/footer-image.svg"

function Footer() {
  return (
    <section className='mt-20 flex flex-col'>
<div className="py-12 px-8 rounded-xl border border-gray flex flex-col justify-center items-center lg:items-stretch lg:flex-row lg:justify-between bg-[#fafafc]">
  {/* First div: Changes order based on screen size */}
  <div className="flex items-center order-2 lg:order-1 ">
    <img src={Logo} alt="Logo" />
    <p className="text-lg font-semibold capitalize">toDesktop</p>
  </div>

  {/* Second div: Changes order based on screen size */}
  <div className="lg:flex items-center gap-10 order-1 lg:order-2">
    <h1 className="text-lg opacity-60 hover:opacity-100 transition">Documentation</h1>
    <div className='flex justify-center lg:justify-between items-center gap-10 mt-10 mb-10'>
    <span className="text-xl font-semibold opacity-60 hover:opacity-100 transition">
      <FaTwitter />
    </span>
    <span className="text-xl font-semibold opacity-60 hover:opacity-100 transition">
      <FaGithub />
    </span>
    </div>
  </div>
</div>


<div className='mx-auto place-items-center mt-12 mb-12 '>
<div className='inline-flex justify-between items-center gap-3'>
    <img className='w-3 h-3' src={footerImage} alt="" />
    <span className='text-sm opacity-70'>A Y Combinator company.</span>
</div>
 
<div className='text-sm opacity-40 pt-4'>© 2024 ToDesktop, Inc. All rights reserved.</div>

</div>
     
    </section>
  )
}

export default Footer