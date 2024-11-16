import React, { useEffect, useState, useRef } from 'react';
import bgImage from '../assets/nextImage01.jpg';
import insideImage from '../assets/nextImage02.png';
import { FaCirclePlay } from "react-icons/fa6";

function NormalPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [translateY, setTranslateY] = useState(0); // For the second image
  const [translateYDiv, setTranslateYDiv] = useState(0); // For the last div
  const sectionRef = useRef(null);
  const lastScrollY = useRef(window.scrollY); // Initialize to the current scroll position
  const maxTranslateDiv = -20; // Maximum upward movement for the last div
  const minTranslateDiv = 20; // Maximum downward movement for the last div
  const maxTranslate = -20; // Maximum upward movement for the second image
  const minTranslate = 10; // Maximum downward movement for the second image

  // Observe visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Handle scroll movement
  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? 1 : -1; // 1 for down, -1 for up

      // Update the last div's position
      setTranslateYDiv((prev) => {
        const newTranslate = prev + scrollDirection * 5; // Move by 5px per scroll event
        if (newTranslate < maxTranslateDiv) return maxTranslateDiv; // Limit upward movement
        if (newTranslate > minTranslateDiv) return minTranslateDiv; // Limit downward movement
        return newTranslate;
      });

      // Update the second image's position
      const deltaY = scrollDirection * -2; // Move up for down scroll, down for up scroll
      setTranslateY((prev) => {
        const newTranslate = prev + deltaY;
        if (newTranslate < maxTranslate) return maxTranslate; // Limit upward movement
        if (newTranslate > minTranslate) return minTranslate; // Limit downward movement
        return newTranslate;
      });

      lastScrollY.current = currentScrollY; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section className="px-6 pb-12 pt-[4.5rem] sm:px-9 sm:pt-[6.6rem] sm:pb-20" ref={sectionRef}>
      <div className="relative flex justify-center items-center -z-20">
        {/* Background Image */}
        <div className="border border-gray rounded-2xl">
          <img className="rounded-2xl" src={bgImage} alt="" />
        </div>

        {/* Second Image */}
        <div className="max-w-[55%] shadow-2xl drop-shadow-2xl rounded-xl border-[#cedddd] absolute md:bottom-8">
          <img
            className="bg-[#FBF4F8] -z-10"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: 'transform 2s ease', // Smooth movement for the second image
            }}
            src={insideImage}
            alt=""
          />
        </div>

        {/* Moving Div */}
        <div style={{
            transform: `translateY(${translateYDiv}px)`,
            transition: 'transform 2s ease', // Smooth movement for the last div
          }}
         className='bg-primary inline-flex justify-end items-center gap-4 rounded-xl shadow-md  shadow-secondary hover:shadow-2xl hover:shadow-secondary
         text-white text-lg font-bold px-6 py-3 z-10 absolute top-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <span><FaCirclePlay /></span> Watch: Build a desktop app in 90 secs</div>
      </div>
    </section>
  );
}

export default NormalPage;
