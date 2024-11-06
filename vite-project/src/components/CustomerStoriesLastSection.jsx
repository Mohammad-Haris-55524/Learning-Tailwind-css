import React from 'react'
import CustomerStories from './CustomerStories'
import bgImage from '../assets/customer stories/screenshot.2xP1-Xus.png'
 
function CustomerStoriesLastSection() {
  return (
    <>
  <div className='py-10 '>
  <CustomerStories topLogo = {false}  topText={"Ready to start building?"} title="Create your desktop app for free*"
  description = "ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes."
  bgImage = {bgImage}
  showButton = "Downlaod ToDesktop Builder"
  textBelowBtn = "*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers."
conditionalClass = 'font-styling-for-customer-stories-2'
bgColor='bg-color-black-class'
fontColor = {false}
imageClass= {"custom-styling-for-right-side-image-customer-stories"}
border


/>
</div>
    </>
  )
}

export default CustomerStoriesLastSection