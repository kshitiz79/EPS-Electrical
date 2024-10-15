import React from 'react'
import { Link } from 'react-router-dom'

const BelowHero = () => {
  return (
<>
    <section>
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center">
      {/* Left Text Section */}
      <div className="text-left mb-8 lg:mb-0 ">
        <div className='flex flex-row justify-between'>
        <h4 className="text-gray-500 uppercase mb-2">Change Your Life</h4>



        <div className="lg:w-1/3 flex lg:justify-end  ">
        <Link to="/productandservices">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          View All Products
        </button>
</Link>


      </div>
      </div>
        <h1 className="text-5xl font-bold mb-6">
          Start Your Journey of <br />
          <span className="text-black">epselectricals</span> Today!
        </h1>
        <p className="text-gray-700 mb-6 mt-20">
         
Change Your Life
Start Your Journey of epselectricals Today!
View All Products
EPS Electricals & Services was established in the year 2020, as an Electrical Engineering Contractors. With our hard work and sheer commitment, today, our organization is standing amidst the leading Electrical Contracting Service providers. We offer wide range of services for Erection, Installation and Maintenance of UPS, Active Harmonic Filter,PCC/MCC Panel, Servo Voltage Stabilizer, HT/LT Cable Termination, HT/LT Cable Laying, internal building wiring, Industrial Electrification/Retro fitting Services, Switchyard Erection Services, we also manufacturing world class PCC/MCC Panel & Servo Voltage Stabilizer.
        </p>
        <p className="text-gray-700 mt-10">
        EPS Electricals as constructors with an aim to serve the industries in the fields of Electrical industry. Over the years we have completed Commercial & Industrial Projects of National Importance. Since 2020 EPS Electrical continues to strive for providing reliable, efficient & cost-effective projects to many Local and Multinational Companies on India Basis. EPS Electrical proudly acclaims to provide the best services and can undertake the responsibility to design, execute and manage the whole project on India basis. Please find our list of services and clientele that might speak of our work quality and experience. Our commitment with dient is also backed up by extensive technical support, after sales service and comprehensive level of stock, for immediate response to customer’s requirements. If you have any querles for the pre-qualification of our company, please do not hesitate to contact us. We will be really glad to assist you. 
        </p>
      </div>

     
    </div>
  </div>

  </section>
 



  <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-gray-600">Product & Services</h2>
          <hr className="w-16 mx-auto my-4 border-b-2 border-blue-500" />
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product List */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-4">
                <li>⚪ Motor Control Panel</li>
                <li>⚪ Low Tension Panel</li>
                <li>⚪ Power Factor Improvement Panel</li>
                <li>⚪ UPS (Modular/Conventional)</li>
                <li>⚪ Auto Change over Panel</li>
              </ul>
              <ul className="space-y-4">
                <li>⚪ Generator AMF & ATS Panel</li>
                <li>⚪ Power & Lighting DB</li>
                <li>⚪ Bus Tie Duct</li>
                <li>⚪ Active Harmonic Filter</li>
                <li>⚪ Cable Tray</li>
                <li>⚪ Servo Stabilizers</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="./home.png" // Replace with actual image URL
              alt="Team Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BelowHero