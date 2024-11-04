import React, { useState } from 'react'
import FAQ from "../API/faq.json"
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
function Accordion() {
    const [faqData, setfaqData] = useState(FAQ)
    
    const [toggleBtn, setToggleBtn] = useState(false)
    const [selectedId, setSelectedId] = useState(false)

    // console.log(faqData)


    const openAccordHandler = (id) =>{
    console.log(id)
    // setToggleBtn(!toggleBtn)
    console.log({selectedId}, {id})
    setSelectedId(selectedId === id ? false : id)
    }
  return (
<>
<h1 className='font-semibold text-5xl'>FAQs</h1>
<section>
    {/* <div className='flex flex-wrap justify-between gap-y-4 h-max'>
    {faqData.map((item)=>{
        return <div key={item.id} className='border border-gray w-[49%] h-fit rounded-lg bg-[#fafafc] opacity-70 p-6'>
        <div  className=' flex justify-between '>
        <p className='text-lg font-semibold'>{item.question}</p>
        <button onClick={()=>toggleBtnHandler(item.id)}>{(selectedId === item.id) ?  <span className='text-2xl opacity-30 font-thin'><IoIosArrowUp /></span>  :<span className='text-3xl opacity-30 font-thin'><MdKeyboardArrowDown /></span> }</button>
        </div>
        <div className='flex flex-col grow '>
        <p className='mt-6 text-lg'>{(selectedId === item.id) && item.answer}</p> 
        </div>

        </div>

})}
    </div> */}


<div className=' flex justify-between '>
      <h1>{faqData.question}</h1>
      <button onClick={()=>openAccordHandler(faqData.id)}>{toggleBtn ? "CLOSE" : "OPEN"}</button>
      <p>{(selectedId === faqData.id) && faqData.answer}</p>


        </div>
</section>
</>
  )
}

export default Accordion
{/* {selectedId === item.id && <p className='mt-6 text-lg'>{item.answer}</p> } */}