import React from "react";
import image1 from '../assets/HowItWorks01.svg'
function HowItWorks() {
  return (
    <section className="border-4 px-6  sm:px-9 ">
    <h1>How it works</h1>
      <div className="flex justify-between p-12  bg-gray rounded-xl border-2 max-w-full h-screen ">
        <div className="w-[35%] border-2">
          <button>Step 1</button>
          <h1>Bootstrap straight from your web app</h1>
          <p>
            Copy and paste your web app url into ToDesktop. Customise your app
            design, app icon and window frame UI with no code.
          </p>
          <ul>
            <li>Multiple windows</li>
            <li>Customisable menus</li>
            <li>Menubar/tray menus</li>
            <li>Launch on startup</li>
            <li>Offline support</li>
            <li>Tabs (Mac only)</li>
          </ul>
        </div>
        <div className="w-[55%] border-2">
            <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
