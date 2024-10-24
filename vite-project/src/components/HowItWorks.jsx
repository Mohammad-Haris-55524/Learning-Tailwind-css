import React from "react";
import image1 from "../assets/HowItWorks01.svg";
import { FaCheck } from "react-icons/fa6"
function HowItWorks() {
  return (
    <section className="border-2 px-6 sm:px-9 ">
      <h1 className="text-5xl font-semibold mt-24 mb-14">How it works</h1>

      <div className="lg:flex justify-between items-center p-12 pb-24 bg-gray rounded-xl max-w-full border-4">

        <div className="w-full lg:w-6/12 xl:w-[52%]  ">
          <button className=" rounded-lg px-4 py-[0.4rem] text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text">Step 1</button>
          <h1 className="text-[2.6rem] leading-none font-semibold pt-12 pb-5">Bootstrap straight from your web app</h1>
          <p className="text-lg ">
            Copy and paste your web app url into ToDesktop. Customise your app
            design, app icon and window frame UI with no code.
          </p>

          <div className="pt-14 flex gap-16">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 text-lg underline "><span className="text-base"><FaCheck /></span> Multiple windows</li>
              <li className="flex items-center gap-3 text-lg underline"> <span className="text-base"><FaCheck /></span>Customisable menus</li>
              <li className="flex items-center gap-3 text-lg"> <span className="text-base"><FaCheck /></span>Menubar/tray menus</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 text-lg underline">  <span className="text-base"><FaCheck /></span> Launch on startup</li>
              <li className="flex items-center gap-3 text-lg underline"> <span className="text-base"><FaCheck /></span> Offline support</li>
              <li className="flex items-center gap-3 text-lg"> <span className="text-base"><FaCheck /></span> Tabs (Mac only)</li>
            </ul>
          </div>
        </div>
        
        <div className="lg:w-6/12 xl:w-[57%] flex-grow flex-shrink-0 justify-items-center ">
          <img className="w-8/12 lg:w-[35rem] xl:w-[30rem] "src={image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
