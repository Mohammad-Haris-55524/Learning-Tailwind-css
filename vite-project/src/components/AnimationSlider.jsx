import React,{useEffect,useState, useRef} from "react";
import myImage from '../assets/pointer-image.svg'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'
import image16 from '../assets/image16.png'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'
import image20 from '../assets/image20.png'
import image21 from '../assets/image21.png'
import image22 from '../assets/image22.png'
import image23 from '../assets/image23.png'
import image24 from '../assets/image24.png'
import image25 from '../assets/image25.png'
import image26 from '../assets/image26.png'
import image27 from '../assets/image27.png'
import image28 from '../assets/image28.png'


function AnimationSlider() {

    const [isVisible, setIsVisible] = useState(false);
    const [row1Translate, setRow1Translate] = useState(0);
    const [row2Translate, setRow2Translate] = useState(0);
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
          setRow1Translate((prev) => prev + 3); // Move row 1 to the right
          setRow2Translate((prev) => prev - 3); // Move row 2 to the left
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setRow1Translate((prev) => prev - 3); // Move row 1 to the left
          setRow2Translate((prev) => prev + 3); // Move row 2 to the right
        }
  
        lastScrollY.current = currentScrollY; // Update last scroll position
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isVisible]);
  
  
  console.log(row1Translate, row2Translate)
  
  return (
    <section className="max-h-fit bg-[#F2F0FF]" // Add overflow-y-scroll to make it scrollable
    ref={sectionRef}>
        
      <div className="overflow-x-hidden">
        <div className="flex justify-center items-center gap-4">
        <span><img className="w-6 h-6 sm:w-8 sm:h-8 mt-4 " src={myImage} alt="pointer-image" /></span>
        <p className="text-lg sm:text-xl font-semibold uppercase">Apps powered by ToDesktop </p>
        <span className="-scale-x-90"><img className="w-6 h-6 sm:w-8 sm:h-8 mt-4" src={myImage} alt="pointer-image" /></span>
        </div>

        {/* Row # 01 */}

        <div className={`hidden sm:flex gap-4 sm:w-max on-transform duration-700 transition mt-12`}
        style={{ transform: `translateX(${row1Translate}px)`,
        transition:'transform 1s ease-out' }}>
        {/* transition:'transform ease linear'}}> */}
            
        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image1} alt=""/>
        <p className="text-center font-bold mt-2 text-lg leading-tight w-max">Morgon</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image2} alt="" />
        <p className="text-center font-bold mt-2 text-lg leading-tight w-max">Covy</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image3} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Sunsama</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image4} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Campsite</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image5} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Rise</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image6} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">ClickUp</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image7} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Cursor</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image8} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Kitemaker</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image9} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Voiceflow</p>

        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image10} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Linear</p>

        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image11} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">ClickUp</p>

        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image12} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">ClickUp</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image27} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Notion calender</p>
        </div>


        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image13} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">ClickUp</p>
        </div>

  
      </div>

    {/* ROW # 02 */}
      <div className={`hidden sm:flex gap-4 w-max mt-4 on-transform duration-500 overflow-hidden`}
       style={{ transform: `translateX(${row2Translate}px)`,
      transition:'transform 1s ease-out' }}>
    {/* transition:'transform ease linear' }}> */}
        
        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image14} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Moises</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image15} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Bases</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image16} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Bento</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image17} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Notion calender</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image18} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Grain</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image19} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Voiceflow</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image20} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Cron</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image21} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Notion calender</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image22} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Cal</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image23} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Cursor</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image24} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Beeper</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image25} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Web</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image26} alt="" />
        <p className="text-center font-bold mt-2 text-lg  leading-tight w-max">Notion calender</p>
        </div>

        <div className="max-w-[9.5rem] max-h-[9.5rem] border border-gray shadow-sm rounded-xl p-10 flex flex-col justify-center items-center bg-white">
        <img src={image27} alt="" />
        <p className="text-center font-bold mt-2  text-lg leading-tight w-max">Notion calender</p>
        </div>
      </div>


    {/* --------------------------------------------------- Row # 01 for mobile responsive -------------------------------------------------*/}

    <div className={`sm:hidden flex gap-4 w-max on-transform duration-500 mt-8`}
        style={{transform: `translateX(${row1Translate}px)`,
        transition:'transform 1s ease-out'}}>
        {/* transition:'transform ease linear'}}> */}
            
        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image1} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Morgon</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image2} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Covy</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image3} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Sunsama</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image4} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Campsite</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image5} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Rise</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image12} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">ClickUp</p>
        </div>


        </div>


    {/* --------------------------------------------------- Row # 02 for mobile responsive -------------------------------------------------*/}
    <div className={`sm:hidden flex gap-4 w-max mt-4 on-transform duration-500 overflow-hidden`}
       style={{ transform: `translateX(${row2Translate}px)`,
      transition:'transform 1s ease-out' }}>
    {/* transition:'transform ease linear' }}> */}

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image6} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">ClickUp</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image7} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Cursor</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image8} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Kitemaker</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image9} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Voiceflow</p>

        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image10} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Linear</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image11} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">ClickUp</p>
        </div>
        
        </div>


{/* --------------------------------------------------- Row # 03 for mobile responsive -------------------------------------------------*/}

    <div className={`sm:hidden flex gap-4 w-max on-transform duration-500 mt-6`}
        style={{transform: `translateX(${row1Translate}px)`,
        transition:'transform 1s ease-out' }}>
        {/* transition:'transform ease linear'}}> */}
            
        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image22} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Notion</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image23} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Calender</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image24} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Bento</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image25} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Cursor</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image26} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Click Up</p>
        </div>

        <div className="max-w-28 max-h-28 border border-gray shadow-sm rounded-xl p-8 flex flex-col justify-center items-center bg-white">
        <img src={image27} alt="" />
        <p className="text-center font-bold mt-2 leading-tight w-max">Linear</p>
        </div>
        </div>

      </div>
    </section>
  );
}

export default AnimationSlider;
