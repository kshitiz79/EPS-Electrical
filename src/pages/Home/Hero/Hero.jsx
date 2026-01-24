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
    <div className="relative bg-gray-800 text-white h-[24.1vh] lg:h-[95vh] overflow-hidden">

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
                  className="md:w-full w-auto md:h-full h-auto object-cover"
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
