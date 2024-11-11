import React, { useRef, useState } from 'react'
import CardsOfCustomerStories from './CardsOfCustomerStories'

function PricePlanPage01() {

const [moveBoxLeftToRight, setMoveBoxLeftToRight] = useState(false)
const [moveBoxRightToLeft, setmoveBoxRightToLeft] = useState(false)

const [monthlyPriceEssential, setmonthlyPriceEssential] = useState(false)
const [monthlyPriceProfessional, setmonthlyPriceProfessional] = useState(false)

console.log({moveBoxLeftToRight})
console.log({moveBoxRightToLeft})

const handlerLeft = () =>{
console.log("left clicked")
setmoveBoxRightToLeft(true)
setMoveBoxLeftToRight(false)
setmonthlyPriceEssential('$125')
setmonthlyPriceProfessional('$300')
}

const handlerRight = () =>{
  console.log("right clicked")
  setMoveBoxLeftToRight(true)
  setmoveBoxRightToLeft(false)
  setmonthlyPriceEssential('$100')
  setmonthlyPriceProfessional('$240')

}


return (
  <section >
<div className="lg:flex justify-between items-center w-full mb-20">
  <div className="w-full md:w-[35rem] shrink-0 lg:w-[38rem] xl:w-[40%]">
    <h1 className="font-bold text-5xl leading-snug">Choose a plan that fits your needs</h1>
  </div>
  
  <div className="flex justify-between items-center rounded-lg w-[23rem] sm:w-[25rem] md:w-[25rem] lg:max-w-[35%] xl:max-w-[30%] relative
   bg-[#FBFBFD] mt-12 border border-gray">
    <div
      className={`absolute ${moveBoxRightToLeft && "translate-x-[0%]"} left-[3px] top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] 
      rounded-lg bg-[#ffffff] shadow-md transition-transform duration-300 ease-in-out translate-x-full`}
    ></div>

    <button className="z-10 px-[17.5%] py-4 flex-shrink-0" onClick={handlerLeft}>
      Monthly
    </button>
    <button className="z-10 px-[17.5%] sm:px-[17.5%] py-4 flex-shrink-0" onClick={handlerRight}>
      Yearly
    </button>
  </div>

</div>


   <div className='lg:flex justify-between '>
     
    <CardsOfCustomerStories title={'Free'} description={"For personal use or testing your app before deploying to customers."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Key Features"} fontClass={false}
    features = {[
    "Free for personal use",
    "Run app locally",
    "No Code Signing",
    "No Native Installers"
    ]}
  />
   <CardsOfCustomerStories title={'Essential'} description={"For simple desktop apps."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Key Features"} 
    pricing={monthlyPriceEssential}  
    fontClass={false}
    features = {[
    "Windows, Mac & Linux",
    "Code Signing",
    "Native Installers",
    "Email/chat support"
    ]}
  />
     <CardsOfCustomerStories title={'Professional'} description={"For sophisticated desktop apps."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Everything in Essential Plus"} pricing={monthlyPriceProfessional} 
    fontClass={false} btnColor = {true}
    features = {[
    "Branded Download links",
    "Analytics",
    "Access to restricted API",
    "Access to restricted API"
    ]}
  />
  </div>

  </section>
  )
}

export default PricePlanPage01