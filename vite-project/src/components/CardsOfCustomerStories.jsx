import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";



function CardsOfCustomerStories({iconBgColorCode,  title, description, customerName, customerWebisteName, cardLogoImages, customerStoriesImages,}) {
  console.log(cardLogoImages, customerStoriesImages)
  return (
    <div className="flex flex-col justify-between border border-gray rounded-2xl w-[32.2%] p-10 bg-[#f7f4f4] mt-12">
      <div>
      <div className={`text-lg font-bold rounded-full object-cover w-12 h-12 flex justify-center items-center bg-[${iconBgColorCode}]`}>
          <IoCodeSlashOutline />
       </div>

      <div className="mt-5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-6 text-lg opacity-90">
        <span className="text-2xl opacity-30 -ml-6 p-2">“</span>
        {description}
        <span className="text-2xl opacity-30 ml-2">”</span>
        </p>
      </div>
      </div>

      <div className="mt-8 flex gap-4 items-center">
       <div className="flex">

          <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center -mr-3">
          <img
            className="object-cover w-16 h-16"
            src={cardLogoImages}
            alt=""
            />
          </div>

        <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border-white">
        <img
        className="object-cover w-16 h-16"
        src={customerStoriesImages}
        alt=""
        />
      </div> 
      </div>

        <div className="flex-grow" >
          <h2 className="text-md font-semibold">{customerName}</h2>
          <span className="opacity-60 border-dotted border-b border-b-ashGray hover:border-b-darkGrey hover:border-solid cursor-pointer">{customerWebisteName}</span>
        </div>
      </div>
    </div>
  );
}

export default CardsOfCustomerStories;
