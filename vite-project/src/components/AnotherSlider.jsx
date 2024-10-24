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



// import React from "react";
// import image1 from "../assets/HowItWorks01.svg";
// import { FaCheck } from "react-icons/fa6"
// function HowItWorks() {
//   return (
//     <section className="border-2 px-6 sm:px-9 ">
//       <h1 className="text-5xl font-semibold mt-24 mb-14">How it works</h1>

//       <div className="lg:flex m-auto justify-between  p-12 pb-24 bg-gray rounded-xl max-w-full border-4">

//         <div className="max-w-xl border-2">
//           <button className=" rounded-lg px-4 py-[0.4rem] text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text">Step 1</button>
//           <h1 className="text-[2.6rem] leading-none font-semibold pt-12 pb-5">Bootstrap straight from your web app</h1>
//           <p className="text-lg ">
//             Copy and paste your web app url into ToDesktop. Customise your app
//             design, app icon and window frame UI with no code.
//           </p>

//           <div className="pt-14 flex gap-16">
//             <ul className="flex flex-col gap-2">
//               <li className="flex items-center gap-3 text-lg underline "><span className="text-base"><FaCheck /></span> Multiple windows</li>
//               <li className="flex items-center gap-3 text-lg underline"> <span className="text-base"><FaCheck /></span>Customisable menus</li>
//               <li className="flex items-center gap-3 text-lg"> <span className="text-base"><FaCheck /></span>Menubar/tray menus</li>
//             </ul>

//             <ul className="flex flex-col gap-2">
//               <li className="flex items-center gap-3 text-lg underline">  <span className="text-base"><FaCheck /></span> Launch on startup</li>
//               <li className="flex items-center gap-3 text-lg underline"> <span className="text-base"><FaCheck /></span> Offline support</li>
//               <li className="flex items-center gap-3 text-lg"> <span className="text-base"><FaCheck /></span> Tabs (Mac only)</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="max-w-xl border-2 flex-grow ">
//           <img className="max-h-screen"src={image1} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HowItWorks;
