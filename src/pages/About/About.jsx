import React from 'react';
import Client from '../../components/Clients/Clients';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section>
        <div className="px-4 lg:px-32 mt-16">
          <h1 className="text-4xl lg:text-7xl font-bold">
            About Us
          </h1>
          <p className="mt-7 mb-14 text-lg lg:w-6/12 lg:ml-10">
            EPS Electricals & Services was established in the year 2020, as an Electrical Engineering Contractors. With our hard work and sheer commitment, today, our organization is standing amidst the leading Electrical Contracting Service providers.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 lg:px-32 lg:ml-[10%] justify-center items-center">
        <p className="text-gray-500 text-base lg:w-10/12">
          EPS Electricals as constructors with an aim to serve the industries in the fields of Electrical Industry. Over the years we have completed numerous Commercial & Industrial Projects of National Importance. Since 2020 EPS Electrical continues to strive for providing reliable, efficient & cost-effective projects to many Local and Multinational Companies on India Basis. EPS Electrical proudly acclaims to provide the best services and can undertake the responsibility to design, execute and manage the whole project on India basis. Please find our list of services and clientele that might speak of our work quality and experience. Our commitment with clients is also backed up by extensive technical support, after sales service, and a comprehensive level of stock, for immediate response to customer’s requirements. If you have any queries for the pre-qualification of our company, please do not hesitate to contact us. We will be really glad to assist you. Thanking and assuring you of our best services and cooperation.
        </p>
      </section>

      {/* Happy Customers Section */}
      <section className="py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between">
          <div className="mb-12 lg:w-2/5">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Happy Faces of Happy Customers</h2>
            <p className="text-base lg:text-lg text-gray-600">
              The smiley face rating system is a simple way of collecting information about how your customers feel and how satisfied they are.
            </p>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                View All Testimonials
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 1 - Two Portrait Images */}
            <div className="grid grid-rows-2 gap-2">
              <img src="./Happy/happy2.jpg" alt="Happy Customer 2" className="w-full h-[300px] object-cover rounded-md" />
              <img src="./Happy/happy4.jpg" alt="Happy Customer 4" className="w-full h-[300px] object-cover rounded-md" />
            </div>

            {/* Column 2 - Two Landscape Images */}
            <div className="grid grid-rows-2 gap-2">
              <img src="./Happy/happy1.jpg" alt="Happy Customer 1" className="w-full h-[200px] object-cover rounded-md" />
              <img src="./Happy/happy5.jpg" alt="Happy Customer 5" className="w-full h-[200px] object-cover rounded-md" />
            </div>

            {/* Column 3 - Two Portrait Images */}
            <div className="grid grid-rows-2 gap-2">
              <img src="./Happy/happy3.jpg" alt="Happy Customer 3" className="w-full h-[300px] object-cover rounded-md" />
              <img src="./Happy/happy6.jpg" alt="Happy Customer 6" className="w-full h-[300px] object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section>
        <Client />
      </section>
    </>
  );
};

export default About;
