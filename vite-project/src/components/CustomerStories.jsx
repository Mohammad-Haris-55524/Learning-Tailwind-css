import React from "react";
// import image1 from '../assets/customer stories/clickUp.svg'
// import image2 from '../assets/customer stories/CustomerStory.png'
// import image3 from '../assets/customer stories/image3.jpeg'

import { FaCheck } from "react-icons/fa6";

function CustomerStories({
  topLogo,
  topText,
  title,
  features,
  description,
  founderImage,
  founderName,
  founderDesignation,
  bgImage,
  showButton,
  textBelowBtn,
  conditionalClass,
  bgColor,
  fontColor,
  imageClass
}) {
  console.log(bgColor);
  return (
    <>
      <div className={`lg:flex justify-between rounded-xl max-w-full border border-gray pt-8 sm:pt-2 lg:pt-5 h-max overflow-hidden 
        ${
          bgColor === "bg-color-grey-class"
            ? "bg-[#faf2f2]"
            : "bg-[#000000]"
        }`}>
        <div className="px-7 sm:p-8 lg:px-12 lg:max-w-2xl">
          {topLogo && <img src={topLogo} alt="" />}
          {topText && <p className="text-md font-bold uppercase text-white opacity-80 mt-6">Ready to start building?</p>}
          <h1 className={`${conditionalClass}`}>
            {title}
          </h1>
          {features && (
            <ul className="flex flex-wrap gap-3 mb-12">
              {features?.map((item, index) => {
                console.log("I am boss, ", item);
                return (
                  <li
                    key={index}
                    className="flex flex-wrap gap-2 items-center rounded-lg px-3 py-1 text-sm text-[#713f12] font-bold  bg-[#fff6cc] border border-yellow text"
                  >
                    <span className="text-sm ">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                );
              })}

            </ul>
          )}
          <p className={`text-lg opacity-65 ${(!fontColor) && 'text-white opacity-80'}`}>{description}</p>

          <div className="flex items-center gap-4 mt-8 mb-8">
            {founderImage &&
            <div className="">
              <img className="w-12 h-12 rounded-full" src={founderImage} alt="" />
            </div>
            }
            {(founderName && founderDesignation) && 
            <div className="flex flex-col">
              <h3 className="font-semibold">{founderName}</h3>
              <p className="opacity-65">{founderDesignation}</p>
            </div>
            }

            {showButton && (
              <div className="mt-6">
                <button className="w-fit mb-4 px-8 py-3 bg-secondary sm:mb-0 font-semibold rounded-lg shadow-md text-white text-lg hover:bg-opacity-90">
                  {showButton}
                </button>
                <div className="mt-6">
                  <p className={`text-xs italic ${(!fontColor) && 'text-white opacity-80'} `}>{textBelowBtn}</p>
                </div>
              </div>
            )}
          </div>
        </div>

{bgImage && 
        <div className={`${imageClass} relative border-4 border-secondary `}>
          <img className={`${fontColor ? 'lg:max-w-lg' : 'object-center lg:max-w-[100%] xl:max-w-2xl h-full' } `} src={bgImage} alt="" />
        </div>
}
      </div>
    </>
  );
}

export default CustomerStories;
