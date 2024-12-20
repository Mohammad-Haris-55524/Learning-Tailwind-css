import React from "react";
import { FaCheck } from "react-icons/fa6";
// md:w-[42rem]
function Enterprise() {
  return (
    <section className="mt-8 sm:flex lg:flex-col justify-center">
    <div className="flex-shrink-0 flex-grow-0 md:basis-[41rem] lg:basis-0 w-full lg:w-full lg:flex justify-between border-2 pt-10 pb-6 px-8 lg:p-10 bg-[#000000] rounded-2xl">
      <div className="w-full lg:w-[55%] xl:w-[60%] border-2 flex flex-col justify-between">
        <div>
          <h3 className="uppercase font-bold font-lg text-white opacity-80">Dedicated support and expert guidance.</h3>
          <h1 className="text-5xl font-bold mt-3 text-white ">Enterprise</h1>
        </div>

        <div className="mt-4 sm:flex gap-[15%] lg:gap-[20%]">
          <ul>
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Whiteglove onboarding</li>
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Priority support</li>
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Dedicated account manager</li>
          </ul>

          <ul >
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Custom features</li>
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Shared Slack channel</li>
            <li className="flex items-baseline gap-3 text-lg py-3 lg:py-2 xl:py-3 text-white"><span className="text-sm xl:text-lg"><FaCheck /></span>
            Custom Billing</li>
          </ul>
        </div>
      </div>
      {/* flex-col */}
        <div className="lg:w-[38%] xl:w-[33%] flex justify-center lg:justify-between items-center gap-20 bg-white px-14 py-6 sm:px-20 sm:py-8 lg:px-10  xl:px-14  mt-6 lg:-mt-4 lg:-mr-3 rounded-xl">
          <div className="w-full sm:w-[68%] md:w-[62%] lg:w-full">
          <div>
          <p className="opacity-50 font-semibold text-md text-center mb-4 lg:mb-3 xl:mb-6">
            Secure, reliable cross-platform desktop apps for enterprise teams.
          </p>
          </div>
          <div>
          <button className="w-full mt-3 mb-3 md:mt-4 md:mb-4 px-8 py-3 xl:mb-2 border border-[#cbcbe2] font-semibold rounded-lg shadow-md bg-secondary text-white text-lg hover:border-[#acacc0]">
            {" "}
           Contact Sales
          </button>
          <p className="text-xs opacity-60 lg:mt-3">
            You may also live chat with us by <a className="underline" href="#">clicking here</a>.
          </p>
          </div>
          </div>
        </div>

    </div>
    </section>
  );
}

export default Enterprise;
