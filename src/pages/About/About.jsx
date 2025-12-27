import React from 'react';
import Client from '../../components/Clients/Clients';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <h1 className="text-4xl lg:text-7xl font-bold">
            About Us
          </h1>
          <p className="mt-7 mb-14 text-lg lg:w-7/12">
            EPS Electricals & Services was established in the year 2020, as an Electrical Engineering Contractors. With our hard work and sheer commitment, today, our organization is standing amidst the leading Electrical Contracting Service providers.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <p className="text-gray-600 text-lg leading-relaxed lg:w-10/12">
            EPS Electricals as constructors with an aim to serve the industries in the fields of Electrical Industry. Over the years we have completed numerous Commercial & Industrial Projects of National Importance. Since 2020 EPS Electrical continues to strive for providing reliable, efficient & cost-effective projects to many Local and Multinational Companies on India Basis. EPS Electrical proudly acclaims to provide the best services and can undertake the responsibility to design, execute and manage the whole project on India basis. Please find our list of services and clientele that might speak of our work quality and experience. Our commitment with clients is also backed up by extensive technical support, after sales service, and a comprehensive level of stock, for immediate response to customer’s requirements. If you have any queries for the pre-qualification of our company, please do not hesitate to contact us. We will be really glad to assist you. Thanking and assuring you of our best services and cooperation.
          </p>
        </div>
      </section>

      {/* Happy Customers Section */}
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
      {/* Clients Section */}
      <section>
        <Client />
      </section>
    </>
  );
};

export default About;
