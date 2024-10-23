import './App.css'
import Header from './components/Header'
import headerLogo from './assets/headerLogo.avif'
import Home from './components/Home'
import Slider from './components/Slider'
import AnotherSlider from './components/AnotherSlider'
import HowItWorks from './components/HowItWorks'

function App() {

return (
<div className='scroll-smooth'>
<Header logo = {headerLogo}/>
<Home/>
<Slider/>
<AnotherSlider/>
<HowItWorks/>
</div>
  )
}

export default App
