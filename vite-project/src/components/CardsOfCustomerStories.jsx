import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

function CardsOfCustomerStories({
  iconBgColorCode,
  title,
  description,
  customerName,
  customerWebisteName,
  cardLogoImages,
  customerStoriesImages,
  customerStoriesSection,
  features,
  pricePlan,
  featuresTitle,
  pricing,
  fontClass,
  btnColor
}) {

  return (
    <div className="flex flex-col justify-between border border-gray rounded-2xl w-full lg:w-[32.2%] py-4 px-8 lg:p-10 bg-[#fafafc] mb-8 lg:mb-4">
      <div className="flex lg:flex-col items-end lg:items-start gap-x-4 ">
        {customerStoriesSection && (
          <div
            style={{ backgroundColor: `${iconBgColorCode}` }}
            className={`text-lg font-bold rounded-full object-cover w-8 h-8 lg:w-12 lg:h-12 flex flex-col justify-center items-center`}
          >
            <IoCodeSlashOutline />
          </div>
        )}
        <div className="">
        <h1 className={`mt-4 ${fontClass ? 'text-2xl' : 'text-4xl lg:text-2xl'} text-2xl font-semibold`}>{title}</h1>
        {pricePlan && (
          <div>
            {" "}
            <p className="text-lg opacity-60 mt-3  "> {description} </p>
            {pricing && (
              <p className="text-lg mt-6">
                <span className="font-bold text-2xl ">{pricing}</span>/month
              </p>
            )}
          </div>
        )}
        </div>
      </div>

      {customerStoriesSection && (
        <div className="mt-6">
          <p className="text-lg opacity-90 ">
            <span className="text-2xl opacity-30 -ml-6 p-2">“</span>
            {description}
            <span className="text-2xl opacity-30 ml-2">”</span>
          </p>
        </div>
      )}
      {customerStoriesSection && (
        <div className="mt-6 lg:mt-8 flex gap-4 items-center">
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
                className="object-contain w-16 h-16"
                src={customerStoriesImages}
                alt=""
              />
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-md font-semibold">{customerName}</h2>
            <span className="opacity-60 border-dotted border-b border-b-ashGray hover:border-b-darkGrey hover:border-solid cursor-pointer">
              {customerWebisteName}
            </span>
          </div>
        </div>
      )}

      {pricePlan && (
        <div className="flex flex-col justify-between">
          <div className="mt-6 mb-8 lg:mt-8">
            <h3 className="text-md xl:text-lg font-bold uppercase opacity-60">
              {featuresTitle}
            </h3>
            <ul className="mt-4 ">
              {features?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-baseline gap-2 text-lg py-1 opacity-80 "
                  >
                    <span className="text-sm xl:text-lg opacity-80">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="">
            <button className={`w-full px-8 py-3 border border-[#cbcbe2] font-semibold rounded-lg shadow-md text-secondary text-lg
             hover:border-[#acacc0] ${btnColor && 'bg-secondary text-white'}`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardsOfCustomerStories;
