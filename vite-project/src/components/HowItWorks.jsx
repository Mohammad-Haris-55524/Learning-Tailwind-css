import React from "react";
import { FaCheck } from "react-icons/fa6"
function HowItWorks({step, title, description, image, featuresLeft, featuresRight }) {
  console.log(step, title, description, image, featuresLeft, featuresRight )
  return (

    <section className="mb-10 border-2">
      <div className="lg:flex gap-12 items-center p-6 sm:px-6 sm:p-8 lg:p-12 xl:p-12 lg:pt-14 xl:pt-10 pb-12 lg:pb-28 xl:pb-20 rounded-xl max-w-full bg-[#faf2f2] border border-gray">
        <div className="w-full lg:w-[43%] xl:w-[45%]">
          <button className=" rounded-lg px-3 py-[0.3rem] text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text">{step}</button>
          <h1 className="text-[2.1rem] sm:text-[2.1rem] xl:text-[2.2rem] leading-none font-semibold pt-10 pb-5">{title}</h1>
          <p className="text-lg ">{description}</p>

<div className="flex gap-[15%]">
        {/* Features left */}
          <div className="pt-12 flex flex-col gap-2 ">
          {featuresLeft.map((item,index)=>{
            console.log(item)
              return <ul className="flex" key={index}>
              <li className="flex items-baseline gap-2  text-lg underline "><span className="text-sm xl:text-md"><FaCheck /></span>{item}</li>
              </ul>
            })}</div>

      {/* Features right */}
          <div className="pt-12 flex flex-col gap-2">
          {featuresRight.map((item,index)=>{
            console.log(item)
              return <ul className="flex items-center" key={index}>
              <li className="flex items-baseline  gap-2 text-lg underline"><span className="text-sm xl:text-md"><FaCheck /></span>{item}</li>
              </ul>
            })}
          </div>

          </div>
        </div>
        
        <div className="mt-16 w-full lg:w-[45%] flex-grow flex-shrink-0 justify-items-center">
          <img className="w-[90%] sm:max-w-fit lg:w-[28rem] xl:w-[28rem] "src={image} alt="" />
        </div>
      </div>
    </section>

  );
}

export default HowItWorks;
