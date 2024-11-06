import React, { useState, useEffect, useRef } from 'react';

function DownloadProgressBar() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Download version 1.12.0…");
  const [isActive, setIsActive] = useState(false); // State to track if the component is in view
  const progressRef = useRef(null);

  // Reset progress and start downloading when component becomes active (in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true); // Set component as active when it's visible
          setProgress(0); // Reset progress to 0
        } else {
          setIsActive(false); // Stop downloading when the component is not in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  // Handle progress bar updates when the component is active
  useEffect(() => {
    if (!isActive) return; // Stop if the component is not active

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setStatus("Installed"); // Show installed message when 100% is reached
          setTimeout(() => setProgress(0), 10000); // Reset after 10-second delay
          return 100;
        }
        return prevProgress + (Math.random() * 30); // Increase progress by 2%
      });
    }, 800);

    return () => clearInterval(interval); // Clear interval when component is not active
  }, [isActive, progress]);

  // Update status text based on progress
  useEffect(() => {
    if (progress === 100) {
      setStatus("Installed");
    } else if (progress >= 75) {
      setStatus("Installing the application...");
    } else if (progress >= 50) {
      setStatus("Extracting app...");
    } else {
      setStatus("Download version 1.12.0…");
    }
  }, [progress]);

  return (
    <div ref={progressRef} style={{ width: '40%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <p style={{ marginBottom: '10px' }}>{status}</p>
      <div style={{ width: '100%', background: '#f3f3f3', borderRadius: '5px', overflow:"hidden"}}>
        <div
          style={{
            width: `${progress}%`,
            height: '7px',
            backgroundColor: '#5778fd',
            borderRadius: '5px',
            // transition: 'width 0.5s ease-out', // Smooth transition with longer duration
            // Apply transition only when progress is greater than 0
            transition: progress > 0 ? 'width 0.5s ease-out' : 'none',
          }}
        ></div>
      </div>
      {/* <p style={{ marginTop: '5px', textAlign: 'center' }}>{progress}%</p> */}
    </div>
  );
}

export default DownloadProgressBar;
