import React from 'react';

const Happy = () => {
  return (
    <section className="py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between">
        {/* Left Content */}
        <div className="mb-12 lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Happy Faces of Happy Customers</h2>
          <p className="text-base sm:text-lg text-gray-600">
            The smiley face rating system is a simple way of collecting information about how your customers feel and how satisfied they are.
          </p>
          <div className="text-center lg:text-left mt-8">
            <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md">
              View All Testimonials
            </button>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-8">
          {/* Column 1 - Two Portrait Images */}
          <div className="grid grid-rows-2 gap-2">
            <img src="./Happy/happy2.jpg" alt="Happy Customer 2" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md" />
            <img src="./Happy/happy4.jpg" alt="Happy Customer 4" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md" />
          </div>

          {/* Column 2 - Two Landscape Images */}
          <div className="grid grid-rows-2 gap-2">
            <img src="./Happy/happy1.jpg" alt="Happy Customer 1" className="w-full h-[150px] sm:h-[175px] lg:h-[200px] object-cover rounded-md" />
            <img src="./Happy/happy5.jpg" alt="Happy Customer 5" className="w-full h-[150px] sm:h-[175px] lg:h-[200px] object-cover rounded-md" />
          </div>

          {/* Column 3 - Two Portrait Images */}
          <div className="grid grid-rows-2 gap-2">
            <img src="./Happy/happy3.jpg" alt="Happy Customer 3" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md" />
            <img src="./Happy/happy6.jpg" alt="Happy Customer 6" className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happy;
