import React from 'react'
import grid01Image from '../assets/bento-grid/notification.png'
import grid02Image from '../assets/bento-grid/autoupdate.png'
import grid03Image from '../assets/bento-grid/plugin.png'
import grid04Image from '../assets/bento-grid/api.png'
import grid05Image from '../assets/bento-grid/look-and-feel.png'
import grid06Image from '../assets/bento-grid/installers.png'
import { GoDotFill } from "react-icons/go";


function BentoGrid() {
  return (
    <section>
    <div className='mt-40'>
    <div className='w-[30rem]'>
        <h1 className='text-5xl font-bold mb-10 leading-snug'>ToDesktop handles the details</h1>
    </div>
    
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 h-fit'>

        <div className="border border-gray rounded-3xl justify-center content-center bg-gradient-color transition ">
          <div className='flex flex-col justify-between items-center p-4 '>
          <h2 className='text-2xl font-bold text-center mb-5'>Native Notifications</h2>
          <img src={grid01Image} alt="" />
          </div>
        </div>

        <div className="border border-gray lg:row-start-1 lg:row-end-3 lg:col-start-2 rounded-3xl justify-center content-center bg-gradient-color transition ">
          <div className = "flex flex-col justify-between items-center p-4 ">
          <h2 className='text-2xl font-bold text-center mt-4 mb-5'>Auto Updates</h2>
          <p className='text-lg text-center mb-4'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
          <img className='mb-4' src={grid02Image} alt="" />
          </div>
        </div>

        <div className="border border-gray rounded-3xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-between items-center p-4 ">
          <h2 className='text-2xl font-bold text-center mt-6 mb-5'>Plugins</h2>
          <img className='mb-6' src={grid03Image} alt="" />
          </div>
        </div>

        
        <div className="border border-gray lg:col-start-1 lg:row-start-2 lg:row-end-4 rounded-3xl justify-center content-center bg-gradient-color transition ">
          <div className = "flex flex-col justify-between items-center p-4 gap-y-5">
          <h2 className='text-2xl font-bold text-center'>Access to Native APIs</h2>
          <p className='text-lg text-center'>ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
          <img src={grid04Image} alt="" />
          </div>
        </div>


        <div className="border border-gray lg:col-start-2 lg:row-start-3 lg:row-end-3 rounded-3xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-between items-center p-4 gap-y-8 ">

          <h2 className='text-2xl font-bold text-center mt-8'>Customizable look and feel</h2>
          <img src={grid05Image} alt="" />
          </div>
        </div>

        <div className="border border-gray lg:row-start-2 lg:row-end-4 rounded-3xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-between items-center p-4 gap-y-5">
          <h2 className='text-2xl font-bold text-center'>Native Installers</h2>
          <p className='text-lg text-center'>We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
          <img src={grid06Image} alt="" />
          </div>
        </div>
        
      </div>

<div className='border border-gray mt-12 mb-24 overflow-hidden '>
<ul className='flex w-[200%]  gap-6 lg:gap-x-8 py-16 lg:py-8 '>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span> Offline Support</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span>Download Analytics</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Global Hotkeys</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span>Custom Menus </li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Multi-window support</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Trays</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Deep Linking</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Launch at Startup</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Multi-window support</li>


</ul>
</div>
    </div>
     
    </section>
  )
}

export default BentoGrid