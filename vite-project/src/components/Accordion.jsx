import React, { useState } from 'react'
import FAQ from "../API/faq.json"
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
function Accordion() {
    const [faqData, setfaqData] = useState(FAQ)
    const [previousSelectedId, setpreviousSelectedId] = useState(false)

    const toggleBtnHandler = (id) =>{
        console.log(id)
        console.log({previousSelectedId}, {id})
// Agar previousSelectedId equal hogaye updatedId yani (Id) ky to hamey automatically old accord ko band karwana hy taky new accord open hogy or 
// purana wala accord  band hogy to agar previousSelectedId equal hoti hay updatedId yani (Id) ky yani condition TRUE hojati hay to ham "false"
// set karwa dein yani band karwa do precious accord ko or agar conditon meet nahe karti to updatedId yani (Id) ko setpreviousSelectedId(id) 
// my save karwa do. 
        setpreviousSelectedId(previousSelectedId === id ? false : id)
        }
return (
<>
<section className='mt-40'>
<h1 className='font-semibold text-5xl mb-8'>FAQs</h1>
<div className='w-full md:flex flex-wrap justify-between gap-y-4 h-max'>
    {faqData.map((item)=>{
  return <div key={item.id} className='border border-gray md:w-[49%] h-max rounded-lg bg-[#fafafc] p-3 mb-4'>
        <div  className=' flex justify-between items-center '>
        <p className='text-lg font-semibold'>{item.question}</p>
        <button onClick={()=>toggleBtnHandler(item.id)}>{(previousSelectedId === item.id) ?  <span className='text-2xl opacity-30 font-thin'><IoIosArrowUp /></span>  :<span className='text-3xl opacity-30 font-thin'><MdKeyboardArrowDown /></span> }</button>
        </div>
        <div className='flex flex-col grow '>
        <p className='mt-6 text-lg'>{(previousSelectedId === item.id) && item.answer}</p> 
        </div>
  </div>
})}
</div>

<div className='mt-8'>
<p className='opacity-80 text-lg'>More questions? Visit our 
<a  className="opacity-100  border-dotted border-b border-b-ashGray hover:border-b-darkGrey hover:border-solid" href="#"> Docs</a>. Or  
<a  className="opacity-100 border-dotted border-b border-b-ashGray hover:border-b-darkGrey hover:border-solid" href="#"> send us a message</a>.</p>
</div>
</section>
</>)}

export default Accordion
{/* {selectedId === item.id && <p className='mt-6 text-lg'>{item.answer}</p> } */}