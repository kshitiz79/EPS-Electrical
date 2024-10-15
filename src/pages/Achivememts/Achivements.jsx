// AchievementsPage.jsx
import React from 'react';
import certificate1 from './../../../public/c1.png'; // Replace with your certificate image path
import certificate2 from './../../../public/c2.png';
import award1 from './../../../public/award1.jpeg'; // Replace with your award image paths
import award2 from './../../../public/award2.jpeg';
import award3 from './../../../public/award3.jpeg';
import award4 from './../../../public/award4.jpeg';
import award5 from './../../../public/award5.jpeg';

import award6 from './../../../public/award6.jpeg';

const AchievementsPage = () => {
  return (
    <div>
      {/* Video Banner */}
      <div className="relative">
        <video
          className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[90vh]"
          src="/video4.mp4" // Replace with your video path
          autoPlay
          loop
          muted
        />
       
      </div>

      {/* Certificates Section */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 h-full">
          <img src={certificate1} alt="Certificate 1" className="w-full " />
          <img src={certificate2} alt="Certificate 2" className="w-full " />
        </div>
      </section>

      {/* Award Ceremony Section */}
      <section className="py-8">
        <h2 className="text-center text-3xl font-bold mb-6">Award Ceremony</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          <img src={award1} alt="Award 1" className="w-full h-auto" />
          <img src={award2} alt="Award 2" className="w-full h-auto" />
          <img src={award3} alt="Award 3" className="w-full h-auto" />
          <img src={award4} alt="Award 4" className="w-full h-auto" />
          <img src={award5} alt="Award 5" className="w-full h-auto" />
          <img src={award6} alt="Award 5" className="w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
