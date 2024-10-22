import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaAlignJustify } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
function Header({ logo }) {
  
const [toggleNavBar, settoggleNavBar] = useState(false)
console.log(toggleNavBar)

  return (
  //------------------------------------------------------------ Header for normal screen -------------------------------------------------
    <header className="flex justify-between items-center p-4 relative ">
    <div className="flex items-center gap-2 z-30 lg:flex-1" >
        <img className="w-12 h-12 object-cover lg:w-16 lg:h-16" src={logo} alt="Logo" />
        <p className="sm:text-xl lg:text-2xl font-semibold">ToDesktop</p>
    </div>

      <nav>
        <ul className=" hidden lg:flex gap-16 cursor-pointer">
          <li> <a className="sm:text-xl font-semibold hover:text-primary" href="#">Pricing</a> </li>
          <li> <a className="sm:text-xl font-semibold hover:text-primary" href="#">Docs</a> </li>
          <li><a className="sm:text-xl font-semibold  hover:text-primary" href="#">ChangeLog</a></li>
          <li><a className="sm:text-xl font-semibold  hover:text-primary" href="#">Blog</a></li>
          <li><a className="sm:text-xl font-semibold  hover:text-primary"href="#">Login</a></li>
        </ul>
      </nav>

<div className="hidden lg:flex items-center lg:flex-1 justify-end">
<button className=" lg:flex items-center border border-gray-400 gap-3 px-4 py-3 text-lg font-semibold rounded-lg hover:border-gray-600" >
        <img className="w-6" src="https://www.todesktop.com/_app/immutable/assets/electron-icon.E8mrXtZM.svg" alt="Electron-image" />
        <span>Electron Developer</span>
        <div className="text-2xl"><GoArrowRight/></div>
      </button>
</div>
{/*------------------------------------------------------ For Mobile responsiveness ------------------------------------------------------ */}
{/* Jesy hi Lg point hit hoga yah button hide hogy ga yaad rahy button ky andar humberger and cross wala icon hay.  */}
<button className="lg:hidden z-30"
onClick={()=>settoggleNavBar(!toggleNavBar)}>{toggleNavBar ? <ImCross /> : <div> <FaAlignJustify /></div>}
</button>
{toggleNavBar && <div className="absolute left-0 right-0 top-0 h-screen bg-white z-20">

  <nav className="pb-4 ml-4 mr-4">
        <ul className="flex flex-col mt-20 cursor-pointer">
          <li className="py-2 "> <a className="text-xl font-semibold hover:bg-gray block rounded-md p-1" href="#">Pricing</a> </li>
          <li className="py-2"> <a className="text-xl font-semibold  hover:bg-gray block rounded-md p-1" href="#">Docs</a> </li>
          <li className="py-2"><a className="text-xl font-semibold   hover:bg-gray block rounded-md p-1" href="#">ChangeLog</a></li>
          <li className="py-2"><a className="text-xl font-semibold   hover:bg-gray block rounded-md p-1" href="#">Blog</a></li>
          <li className="py-2"><a  className="text-xl font-semibold  hover:bg-gray block rounded-md p-1" href="#">Login</a></li>
        </ul>
      </nav>

<div className="border-t-2 border-gray ml-4 mr-4">
      <button className="flex items-center gap-2 border border-gray-400 px-2 py-1 text-xl font-semibold rounded-lg hover:border-gray-600 mt-10" >
        <img src="https://www.todesktop.com/_app/immutable/assets/electron-icon.E8mrXtZM.svg" alt="Electron-image" />
        <span>Electron Developer</span>
        <div> <GoArrowRight /></div>
      </button>
</div>
</div>
}
{/* -------------------------------------------------------------------------------------------------------------------------------------- */}

</header>
  );
}

export default Header;
