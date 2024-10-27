import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import cardBodyImage1 from "../assets/customer stories/customer-logo-Rise._nYytet0.png";
import cardCustomerImage1 from "../assets/customer stories/card1Customer.jpg";

function CardsOfCustomerStories() {
  return (
    <div className="border border-secondary rounded-2xl w-[32%] p-10 bg-gray">
      <div className="rounded-full border object-cover w-12 h-12 flex justify-center items-center">
        <span className="text-lg font-bold">
          <IoCodeSlashOutline />
        </span>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-semibold">Native APIs</h1>
        <p className="mt-8 text-lg">
        <p className="mt-8 text-lg">
  <span className="text-2xl opacity-30 pb-4">“</span>What sets ToDesktop apart is its seamless integration with native APIs, using our existing web codebase. By tapping into 
  APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.<span className="text-2xl opacity-30">”</span>
</p>
        </p>
      </div>

      <div className="flex gap-x-12 border-2 mt-8">
        <div className="flex relative">
          <img
            className="rounded-full object-cover w-12 h-12"
            src={cardBodyImage1}
            alt=""
          />
          <img
            className="rounded-full border border-white object-cover w-12 h-12 absolute left-8"
            src={cardCustomerImage1}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-md font-semibold">Rick Pastoor</h2>
          <p className="opacity-75 underline cursor-pointer">Rise</p>
        </div>
      </div>
    </div>
  );
}

export default CardsOfCustomerStories;
