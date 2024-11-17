import React,{useState, useRef, useEffect} from 'react'
import grid01Image from '../assets/bento-grid/notification.png'
import grid02Image from '../assets/bento-grid/autoupdate.png'
import grid03Image from '../assets/bento-grid/plugin.png'
import grid04Image from '../assets/bento-grid/api.png'
import grid05Image from '../assets/bento-grid/look-and-feel.png'
import grid06Image from '../assets/bento-grid/installers.png'
import { GoDotFill } from "react-icons/go";


function BentoGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [row1Translate, setRow1Translate] = useState(false);
  const [row2Translate, setRow2Translate] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0); // Ref to keep track of last scroll position

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // If not visible, don't add scroll event

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setRow1Translate((prev) => prev - 15); // Move row 1 to the right
        setRow2Translate((prev) => prev + 15); // Move row 2 to the left
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setRow1Translate((prev) => prev + 15); // Move row 1 to the left
        setRow2Translate((prev) => prev - 15); // Move row 2 to the right
      }

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);


  return (
    <section className='mb-32'>
    <div className='mt-40'>
    <div className='sm:w-[30rem]'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-10 leading-snug'>ToDesktop handles the details</h1>
    </div>
    
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 h-fit'>

        <div className="border border-gray rounded-2xl justify-center content-center bg-gradient-color transition ">
          <div className='flex flex-col justify-between items-center px-4 py-8 lg:p-4'>
          <h2 className='text-2xl font-bold text-center mb-3 lg:mb-5'>Native Notifications</h2>
          <img src={grid01Image} alt="" />
          </div>
        </div>

        <div className="border border-gray lg:row-start-1 lg:row-end-3 lg:col-start-2 rounded-2xl justify-center content-center bg-gradient-color transition ">
          <div className = "flex flex-col justify-between items-center px-8 py-2 lg:p-4">
          <h2 className='text-2xl font-bold text-center mt-4 mb-5'>Auto Updates</h2>
          <p className='text-lg text-center mb-4'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
          <img className='mb-4' src={grid02Image} alt="" />
          </div>
        </div>

        <div className="border border-gray rounded-2xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-between items-center p-4 ">
          <h2 className='text-2xl font-bold text-center mt-3 lg:mt-6 mb-3 lg:mb-5'>Plugins</h2>
          <img className='mb-4 lg:mb-6' src={grid03Image} alt="" />
          </div>
        </div>

        
        <div className="border border-gray lg:col-start-1 lg:row-start-2 lg:row-end-4 rounded-2xl justify-center content-center bg-gradient-color transition ">
          <div className = "flex flex-col justify-between items-center px-8 py-4 gap-y-3 lg:gap-y-5">
          <h2 className='text-2xl font-bold text-center mt-4'>Access to Native APIs</h2>
          <p className='text-lg text-center'>ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
          <img className='mb-4' src={grid04Image} alt="" />
          </div>
        </div>


        <div className="border border-gray lg:col-start-2 lg:row-start-3 lg:row-end-3 rounded-2xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-center items-center gap-y-2 lg:gap-y-8">
          <h2 className='text-2xl font-bold text-center mt-8 lg:mt-10'>Customizable look and feel</h2>
          <img className='mt-auto' src={grid05Image} alt="" />
          </div>
        </div>

        <div className="border border-gray lg:row-start-2 lg:row-end-4 rounded-2xl justify-center content-center bg-gradient-color transition">
          <div className = "flex flex-col justify-between items-center p-4 gap-y-3 lg:gap-y-5">
          <h2 className='text-2xl font-bold text-center mt-4 lg:mt-0 '>Native Installers</h2>
          <p className='text-lg text-center'>We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
          <img className='mb-4 lg:mb-0' src={grid06Image} alt="" />
          </div>
        </div>
        
      </div>

<div className='border border-gray mt-14 overflow-hidden rounded-xl 'ref={sectionRef}>

<ul className='flex w-[200%] gap-6 lg:gap-x-6 py-16 lg:py-8'
 style={{
  translate: '-510px' ,
  transform:`translateX(${row1Translate}px)`,
 transition:'transform 1s ease'}}>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Deep Linking</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span> Code Signing</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span> Offline Support</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span>Download Analytics</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Global Hotkeys</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4 '><span className='text-gray text-sm '><GoDotFill /></span>Custom Menus </li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Multi-window support</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Trays</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Deep Linking</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Launch at Startup</li>
  <li className='text-[1.40rem] font-bold inline-flex justify-center items-center gap-4'><span className='text-gray text-sm '><GoDotFill /></span>Multi-window support</li>
</ul>

</div>
    
  </div>
  </section>
  )
}

export default BentoGrid