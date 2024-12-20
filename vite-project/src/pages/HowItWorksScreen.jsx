import React from 'react'
import HowItWorks from '../components/HowItWorks'
import image1 from "../assets/HowItWorks01.svg"

function HowItWorksScreen() {
  return (
    <>
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
    </>
  )
}

export default HowItWorksScreen