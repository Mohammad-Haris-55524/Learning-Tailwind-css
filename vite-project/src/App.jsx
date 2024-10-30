import './App.css'
import React, {useState} from "react";
import Header from './components/Header'
import headerLogo from './assets/headerLogo.avif'
import Home from './components/Home'
import HowItWorks from './components/HowItWorks'
import image1 from "./assets/HowItWorks01.svg"
import AnimationSlider from './components/AnimationSlider'
import NormalPage from './components/NormalPage'
//Customer Stories section Images 
import img1 from './assets/customer stories/clickUp.svg'
import img2 from './assets/customer stories/CustomerStory.png'
import img3 from './assets/customer stories/image3.jpeg'

import CustomerStories from './components/CustomerStories'
import CardsOfCustomerStories from './components/CardsOfCustomerStories';
import cardBodyImage1 from "./assets/customer stories/customer-logo-Rise._nYytet0.png";
import cardBodyImage2 from "./assets/customer stories/customer-logo-Basedash.3zVpqFz2.png";
import cardBodyImage3 from "./assets/customer stories/customer-logo-LifeAt.-Gg__Z7j.png";

import cardCustomerImage1 from "./assets/customer stories/card1Customer.jpg";
import cardCustomerImage2 from "./assets/customer stories/Max.V2rqrzg6.jpg";
import cardCustomerImage3 from "./assets/customer stories/Pouya.Q0zAbZRS.jpg";
import CustomerStoriesLastSection from './components/CustomerStoriesLastSection';
import { FaS } from 'react-icons/fa6';
import PricePlanPage01 from './components/PricePlanPage01';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


return (
<div className={`scroll-smooth bg-white dark:bg-primary ${isDarkMode ? 'dark' : ''}`}>
<Header logo={headerLogo} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
<Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
<AnimationSlider toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
<NormalPage/>

<main className="px-6 sm:px-6 lg:px-8 xl:px-8 mb-12 border-4">
<h1 className=" text-5xl font-bold mt-10 sm:mt-14 mb-14 ">How it works</h1>

<HowItWorks step = "step 1"
title = "Bootstrap straight from your web app"
description = "Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code."
image = {image1}
featuresLeft = {[
  "Multiple windows",
  "Customisable menus",
  "Menubar/tray menus"
]}
featuresRight = {[
  "Launch on startup",
  "Offline support",
  "Tabs (Mac only)"
]}
/>

<HowItWorks step = "step 2"
title = "Add desktop code to customise your web app"
description = "No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality."
image = {image1}
featuresLeft = {[
  "Native notifications",
  "Application menu",
  "Context menu",
  "Dock/Icon"
]}
featuresRight = {[
  "File system access",
  "Global keyboard shortcuts",
  "Isolated browser views",
  "…plus more APIs in our docs"
]}
/>

<HowItWorks step = "step 3"
title = "Publish"
description = "One-click will publish your desktop app to your customers and give you a download link to put on your website."
image = {image1}
featuresLeft = {[
  "Super-fast global CDN",
  "Magic universal links",
  "Manage version numbers"
]}
featuresRight = {[
  "Download links on your domain",
  "Download analytics",
  "Native installers for all platforms"
]}
/>
{/*---------------------------------------------------------- Customer stories section ----------------------------------------------------- */}
<section>
<h1 className='text-5xl font-bold mt-10 sm:mt-14 mb-14'>Customer stories</h1>
<CustomerStories topLogo = {img1} topText={false} title='ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.' features = {[
  'Chromeless UI' , 'Native spellcheck', 'Task time in menubar', 'Notification count in the dock', 'Global hotkey to create task']}
  description = "“ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”"
  founderImage={img3}
  founderName = 'Zeb Evans'
  founderDesignation = 'Founder & CEO, ClickUp'
  bgImage = {img2}
  showButton = {false}
  textBelowBtn = {false}
  conditionalClass = 'font-styling-for-customer-stories'
  bgColor = 'bg-color-grey-class'
  fontColor = {true}
  imageClass= {"custom-styling-for-right-side-image-customer-stories"}

/>
<div className='lg:flex justify-between'>
<CardsOfCustomerStories iconBgColorCode= '#ccccff' title = 'Native APIs' description = "What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience." customerName = 'Rick Pastoor' customerWebisteName = 'Rise' cardLogoImages = {cardBodyImage1} customerStoriesImages = {cardCustomerImage1}/>
<CardsOfCustomerStories iconBgColorCode= '#ffcecc' title = 'Cleaner, less cluttered UI' description = "Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop." customerName = 'Max Musing' customerWebisteName = 'Basedash' cardLogoImages = {cardBodyImage2} customerStoriesImages = {cardCustomerImage2}/>
<CardsOfCustomerStories iconBgColorCode= '#fff6cc' title = 'Code optional' description = "It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries." customerName = 'Pouya Rad' customerWebisteName = 'LifeAt' cardLogoImages = {cardBodyImage3} customerStoriesImages = {cardCustomerImage3}/>
</div>
</section>

<section className='mt-40'>
<CustomerStoriesLastSection />
</section>


<PricePlanPage01 />
</main>

</div>
  )
}

export default App
