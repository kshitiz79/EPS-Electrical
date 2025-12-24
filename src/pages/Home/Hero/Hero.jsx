import React, { useState, useEffect, useRef } from "react";

const carouselItems = [
  { type: "image", src: "/assets/add-p.png" },
  { type: "image", src: "/assets/add-p1.png" },
  { type: "image", src: "/assets/add-p2.png" },
  { type: "video", src: "/video.mp4" },
  { type: "video", src: "/video2.mp4" }, // full play
];

const HeroSection = () => {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  /* ---------------- Hero background logic ---------------- */
  useEffect(() => {
    const videoTimer = setTimeout(() => setShowSecondVideo(true), 5000);
    const textTimer = setTimeout(() => setShowText(false), 3000);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  /* ---------------- Carousel logic ---------------- */
  useEffect(() => {
    const currentItem = carouselItems[currentIndex];

    // Pause all videos so previous ones don't keep playing
    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    // IMAGE → auto move after 4 sec
    if (currentItem.type === "image") {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 4000);

      return () => clearTimeout(timer);
    }

    // VIDEO → wait till video ends
    if (currentItem.type === "video") {
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo) {
        currentVideo.play().catch((err) => console.log("Video play error:", err));
      }
    }
  }, [currentIndex]);

  /* ---------------- When video ends ---------------- */
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="relative bg-gray-800 text-white h-[50vh] lg:h-screen overflow-hidden">

      {/* ================= Background Videos ================= */}
      {/* <div
        className={`absolute inset-0 transition-opacity duration-700 ${showSecondVideo ? "opacity-0" : "opacity-100"
          }`}
      >
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="./video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${showSecondVideo ? "opacity-100" : "opacity-0"
          }`}
      >
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div> */}

      {/* ================= Text Overlay ================= */}
      {/* {showText && (
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
            E P S Electricals
          </h1>
          <p className="text-base md:text-xl lg:text-2xl">
            E P S Electricals & Services was established in the year 2020
          </p>
        </div>
      )} */}

      {/* ================= Award Carousel ================= */}
      <div className="w-full h-full overflow-hidden rounded-xl bg-black/40">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover"
                  muted
                  onEnded={handleVideoEnd}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
