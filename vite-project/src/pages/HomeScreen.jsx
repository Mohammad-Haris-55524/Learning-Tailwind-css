import React from 'react'
import { useState } from 'react';
import headerLogo from '../assets/headerLogo.avif'
import Header from '../components/Header';
import Home from '../components/Home';
function HomeScreen({toggleDarkMode, isDarkMode}) {

return (
    <div className={`scroll-smooth bg-white dark:bg-primary ${isDarkMode ? 'dark' : ''}`}>
    <Header logo={headerLogo} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
    </div>
  )
}

export default HomeScreen