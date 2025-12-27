import React from 'react';

const Happy = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">Happy Faces of Happy Customers</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The smiley face rating system is a simple way of collecting information about how your customers feel and how satisfied they are.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 - Two Portrait Images */}
            <div className="flex flex-col gap-6">
              <img src="/img6.jpeg" alt="Happy Customer 2" className="w-full h-[320px] object-cover  shadow-sm" />
              <img src="/img7.jpeg" alt="Happy Customer 4" className="w-full h-[320px] object-cover  shadow-sm  " />
            </div>

            {/* Column 2 - Two Landscape Images */}
            <div className="flex flex-col gap-6 lg:mt-12">
              <img src="/img8.jpeg" alt="Happy Customer 1" className="w-full h-[240px] object-cover  shadow-sm" />
              <img src="/img9.jpeg" alt="Happy Customer 5" className="w-full h-[240px] object-cover  shadow-sm" />
            </div>

            {/* Column 3 - Two Portrait Images */}
            <div className="flex flex-col gap-6">
              <img src="/img13.jpeg" alt="Happy Customer 3" className="w-full h-[320px] object-cover  shadow-sm" />
              <img src="/img12.jpeg" alt="Happy Customer 6" className="w-full h-[320px] object-cover  shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happy;
