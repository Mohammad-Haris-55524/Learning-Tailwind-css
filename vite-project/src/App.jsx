import './App.css'
import Header from './components/Header'
import headerLogo from './assets/headerLogo.avif'
import Home from './components/Home'
import Slider from './components/Slider'

function App() {

return (
<div className='scroll-smooth'>
<Header logo = {headerLogo}/>
<Home/>
<Slider/>
</div>
  )
}

export default App
