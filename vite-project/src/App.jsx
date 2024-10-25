import './App.css'
import Header from './components/Header'
import headerLogo from './assets/headerLogo.avif'
import Home from './components/Home'
import HowItWorks from './components/HowItWorks'
import image1 from "./assets/HowItWorks01.svg"
import AnimationSlider from './components/AnimationSlider'
import NormalPage from './components/NormalPage'

function App() {

return (
<div className='scroll-smooth'>
<Header logo = {headerLogo}/>
<Home/>
<AnimationSlider/>
<NormalPage/>
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
</div>
  )
}

export default App
