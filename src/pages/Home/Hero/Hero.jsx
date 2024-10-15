import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [showText, setShowText] = useState(true);

  // Automatically change video after 5 seconds
  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setShowSecondVideo(true);
    }, 5000);

    // Hide text after 3 seconds
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 3000);

    // Clean up timers on component unmount
    return () => {
      clearTimeout(videoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="relative bg-gray-800 text-white h-[50vh] lg:h-[85vh] sm:h-[50vh] flex items-center justify-center">
      {/* First Video */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          showSecondVideo ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          poster="https://via.placeholder.com/1600x900" // Replace with first video poster
        >
          <source src="./video2.mp4" type="video/mp4" /> {/* Replace with actual video URL */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          showSecondVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          poster="https://via.placeholder.com/1600x900" // Replace with second video poster
        >
          <source src="./video.mp4" type="video/mp4" /> {/* Replace with actual video URL */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Overlay - Disappears after 3 seconds */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
        {showText && (
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
              E P S Electricals
            </h1>
            <p className="text-base md:text-xl lg:text-2xl">
              E P S Electricals & Services was established in the year 2020
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
