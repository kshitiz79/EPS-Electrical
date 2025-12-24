// AchievementsPage.jsx
import React, { useEffect, useState } from "react";

// Certificates
import certificate1 from "./../../../public/c1.png";
import certificate2 from "./../../../public/c2.png";

// Awards Ceremony Images
import award1 from "./../../../public/award1.jpeg";
import award2 from "./../../../public/award2.jpeg";
import award3 from "./../../../public/award3.jpeg";
import award4 from "./../../../public/award4.jpeg";
import award5 from "./../../../public/award5.jpeg";
import award6 from "./../../../public/award6.jpeg";

// Auto-scroll Awards (Carousel)
const images = [
  "/assets/add-p.png",
  "/assets/add-p1.png",
  "/assets/add-p2.png",
];

const AchievementsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ================= Video Banner ================= */}
      <div className="relative">
        <video
          className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[90vh]"
          src="/video4.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* ================= Certificates Section ================= */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <img src={certificate1} alt="Certificate 1" className="w-full" />
          <img src={certificate2} alt="Certificate 2" className="w-full" />
        </div>
      </section>

      {/* ================= Awards Auto Carousel ================= */}
      <section className="py-12">
        <div className="relative w-100vh h-auto mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`award-slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Award Ceremony Section ================= */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Award Ceremony
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          <img src={award1} alt="Award 1" className="w-full h-auto" />
          <img src={award2} alt="Award 2" className="w-full h-auto" />
          <img src={award3} alt="Award 3" className="w-full h-auto" />
          <img src={award4} alt="Award 4" className="w-full h-auto" />
          <img src={award5} alt="Award 5" className="w-full h-auto" />
          <img src={award6} alt="Award 6" className="w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
