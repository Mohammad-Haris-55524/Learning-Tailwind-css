import './App.css'
import React, {useState} from "react";

import HomeScreen from './pages/HomeScreen';
import AppsPoweredByToDesktop from './pages/AppsPoweredByToDesktop';
import HowItWorksScreen from './pages/HowItWorksScreen';
import CustomerScreen from './pages/CustomerScreen';
import PricePlanScreen from './pages/PricePlanScreen';
import Accordion from './components/Accordion';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
return (
<div>
<HomeScreen toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>

<AppsPoweredByToDesktop toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>

<main className="px-6 sm:px-6 lg:px-8 xl:px-8 mb-12 border-4">

<HowItWorksScreen/>

<CustomerScreen/>

<PricePlanScreen/>

<Accordion/>
</main>

</div>
  )
}

export default App
