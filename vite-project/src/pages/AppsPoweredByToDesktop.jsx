import React from 'react'
import AnimationSlider from '../components/AnimationSlider'
import NormalPage from '../components/NormalPage'

function AppsPoweredByToDesktop({toggleDarkMode, isDarkMode}) {
  return (
    <>
    <AnimationSlider toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <NormalPage/>
    </>
  )
}

export default AppsPoweredByToDesktop