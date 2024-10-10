import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className=" text-white py-10  bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="font-semibold text-lg">About us:</h2>
            <p className="mt-4">
              EPS Electricals & Services was established in the year 2020, as an Electrical Engineering Contractors. 
              With our hard work and sheer commitment, today, our organization is standing amidst the leading Electrical Contracting Service providers.
            </p>
          </div>

          {/* Power Quality & Voltage Regulation Solutions */}
          <div>
            <h2 className="font-semibold text-lg">Power Quality Solutions Products:</h2>
       
              <li>Hybrid Power Factor Correction Panel</li>
              <li>Detuned Reactor</li>
              <li>Dynamic Voltage Regulator</li>
              <li>3-Level Active Harmonic Filter</li>
              <li>Active Harmonic Filter 600VA to 4.8 MW UPS Range LV/MV Range of Capacitor</li>
          
           
          </div>

          <div> <h2 className="font-semibold text-lg ">Voltage Regulation Solution Products:</h2>
          
              <li>Dynamic Voltage Regulator</li>
              <li>Servo Stabilizer</li>
           
            </div>
        

          {/* EV Infra & E-mobility Solutions */}
          <div>
            <h2 className="font-semibold text-lg">Ev Infra & E-mobility Solutions:</h2>
            <ul className="mt-4 space-y-2">
              <li>AC Charger</li>
              <li>AC Type 2 Charger</li>
              <li>DC Charger DC Charger</li>
            </ul>
            {/* Contact Information */}
        
          </div>
        </div>

        <div className='border-t border-white mt-10'>


<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 '>
<div>
<h2 className="font-semibold text-lg ">Address :</h2>
            <p className="mt-4">
            Thirupalya Main Rd, Electronic City, Bengaluru, <br/> 
            Bommasandra, Karnataka 560100.
            </p>
            </div>

            <div>
           < h2 className="font-semibold text-lg ">Contact Us :</h2>
          
          <ul className='mt-4'>
          <li> <span className='font-extrabold'>Call us: </span>+91 9901034214</li>
          <li> <span className='font-extrabold'>Mail: </span>rajeev@epselectricals.com</li>
          </ul>


            </div>

</div>



        </div>







       
      </div>
    </footer>
    

<footer className=" text-white py-2 bg-black">
<div className="max-w-7xl mx-auto   ">
<div className=" pt-8 flex flex-col sm:flex-row justify-between text-sm mb-9">
          <p>COPYRIGHT © EPS Electricals 2024</p>
          <p>Design By amediaservices.com</p>
        </div>
</div>
</footer>
</>
  );
};

export default Footer;
