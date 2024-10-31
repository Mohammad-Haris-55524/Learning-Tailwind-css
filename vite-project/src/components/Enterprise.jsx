import React from "react";
import { FaCheck } from "react-icons/fa6";

function Enterprise() {
  return (
    <section className="mt-8 ">
    <div className="md:w-3/4 basis-3/5 lg:w-full lg:flex justify-between border-2 pt-10 pb-6 px-8 lg:p-10 bg-[#000000] rounded-2xl">
      <div className="w-full lg:w-[60%] border-2 flex flex-col justify-between">
        <div>
          <h3 className="uppercase font-bold font-lg text-white opacity-80">Dedicated support and expert guidance.</h3>
          <h1 className="text-5xl font-bold mt-3 text-white ">Enterprise</h1>
        </div>

        <div className="flex gap-[15%] lg:gap-[20%]">
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

        <div className="lg:w-[35%] flex flex-col justify-center items-center gap-4 bg-white px-20 py-8 xl:px-12 xl:py-10 mt-6 rounded-xl">
          <div className="w-[62%] lg:w-full">
          <p className="opacity-50 font-semibold text-md text-center mb-4 lg:mb-3 xl:mb-6">
            Secure, reliable cross-platform desktop apps for enterprise teams.
          </p>
          <button className="w-full mt-4 mb-4 px-8 py-3 xl:mb-2 border border-[#cbcbe2] font-semibold rounded-lg shadow-md bg-secondary text-white text-lg hover:border-[#acacc0]">
            {" "}
           Contact Sales
          </button>
          <p className="text-xs opacity-60">
            You may also live chat with us by <a className="underline" href="#">clicking here</a>.
          </p>
          </div>
        </div>

    </div>
    </section>
  );
}

export default Enterprise;
