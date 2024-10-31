import React, { useRef, useState } from 'react'
import CardsOfCustomerStories from './CardsOfCustomerStories'

function PricePlanPage01() {

  const [moveBoxRight, setMoveBoxRight] = useState("")
  const [moveBoxLeft, setMoveBoxLeft] = useState("")

// const [toggleClass, setToggleClass] = useState("")

  const handlerOne = () =>{
console.log("1")
setMoveBoxRight("class1")
  }
const handlerTwo = () =>{
  console.log("2")
setMoveBoxLeft("class2")
}
  
  return (
  <section >
{/* <div className='flex justify-between w-full'>
  <div>
  <h1 className='font-bold text-5xl'>Choose a plan that fits your needs</h1> 
  </div>
  {/* px-4 py-4 hover:border-2 transition */} 
  {/* px-12 py-4 border-2 */}
  <div className='border-2 flex justify-between items-center rounded-lg w-[28%] px-12 py-4 '>
    <div className={`border ${moveBoxRight} transition`}>
    <button onClick={handlerOne} className='rounded-lg '><span>Monthly</span></button>
    </div>
    <div className={`flex justify-center items-center gap-2 border ${moveBoxLeft} transition `}>
    <button onClick={handlerTwo} className='rounded-lg '>Yearly
    </button>
    <span className='flex items-center justify-center w-12 h-7 p-1 rounded-full text-secondary text-sm font-bold border bg-[#d5ddff]  border-gray'>-20%</span>

    </div>
</div>

{/* </div> */} 

   <div className=' lg:flex justify-between '>
     
    <CardsOfCustomerStories title={'Free'} description={"For personal use or testing your app before deploying to customers."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Key Features"} 
    features = {[
    "Free for personal use",
    "Run app locally",
    "No Code Signing",
    "No Native Installers"
    ]}
  />
   <CardsOfCustomerStories title={'Essential'} description={"For simple desktop apps."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Key Features"} pricing="$100"
    features = {[
    "Windows, Mac & Linux",
    "Code Signing",
    "Native Installers",
    "Email/chat support"
    ]}
  />
     <CardsOfCustomerStories title={'Professional'} description={"For sophisticated desktop apps."}
    customerStoriesSection = {false} pricePlan={true} featuresTitle={"Everything in Essential Plus"} pricing="$250"
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