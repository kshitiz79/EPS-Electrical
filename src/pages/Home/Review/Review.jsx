import React from "react";

const ReviewsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mr-28">
          {/* Google Reviews */}
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-2">4.8</h2>
            <p className="text-yellow-500 text-xl">★★★★★</p>
            <p className="mt-2 text-lg font-medium">2,394 Ratings</p>
            <p className="text-gray-500">Google Reviews</p>
          </div>

          {/* BBB Rating */}
          <div className="text-center mr-36">
            <h2 className="text-6xl font-bold mb-2">A+</h2>
            <p className="text-yellow-500 text-xl">★★★★★</p>
            <p className="mt-2 text-lg font-medium">125 B2B Reviews</p>
            <p className="text-gray-500">BBB Rating</p>
          </div>

          {/* Trust Statement */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">
              Trusted by over 7000 Worldwide. Since 2024.
            </h3>
            <div >
              <h2 className="font-extrabold mt-6">Rajeev Ranjan <span className="text-gray-500 font-semibold">(Director)</span> </h2>

              <p className="md:mt-0 mt-5">Best Control panel & fire fighting panel manufacturing company. best quality and delivery.</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
