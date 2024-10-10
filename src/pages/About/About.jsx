import React from 'react'
import Client from '../../components/Clients/Clients'

const About = () => {
  return (


    <>

<section >
<div>
<h1 className='text-7xl font-bold ml-32 mt-16'>
About Us
</h1>
<p className='ml-72 w-3/12 mt-7 mb-14' >
EPS Electricals & Services was established in the year 2020, as an Electrical Engineering Contractors. With our hard work and sheer commitment, today, our organization is standing amidst the leading Electrical Contracting Service providers.
</p>
</div>

</section>


<section className='justify-center items-center lg:ml-[10%]' >
  <p className='w-10/12 text-gray-500 '>
  EPS Electricals as constructors with an aim to serve the industries in the fields of Electrical Industry. Over the years we have completed numerous Commercial & Industrial Projects of National Importance. Since 2020 EPS Electrical continues to strive for providing reliable, efficient & cost-effective projects to many Local and Multinational Companies on India Basis. EPS Electrical proudly acclaims to provide the best services and can undertake the responsibility to design, execute and manage the whole project on India basis. Please find our list of services and clientele that might speak of our work quality and experience. Our commitment with dient is also backed up by extensive technical support, after sales service and comprehensive level of stock, for immediate response to customer’s requirements. If you have any  querles for the pre-qualification of our company, please do not hesitate to contact us. We will be really glad to assist you.  Thanking and assuring you of our best services and Co-operation.
  </p>
</section>




<section className=" py-12 mt-16" >
      <div className="max-w-6xl mx-auto px-4 flex flex-cols">
        <div className=" mb-12 w-1/3" >
          <h2 className="text-4xl font-bold mb-4">Happy Faces of Happy Customers</h2>
          <p className="text-lg text-gray-600">
            The smiley face rating system is a simple way of collecting information about how your customers feel and how satisfied they are.
          </p>
          <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            View All Testimonials
          </button>
        </div>


        </div>

    

        <div className="grid grid-cols-3 gap-4 ml-28">
          {/* Column 1 - Single Image */}
          <div className="flex justify-center items-center">
            <img src="/path-to-your-image1.jpg" alt="Happy Customer 1" className="w-full h-auto object-cover rounded-md" />
          </div>

          {/* Column 2 - Four Images */}
          <div className="grid grid-cols-2 gap-2">
            <img src="/path-to-your-image2.jpg" alt="Happy Customer 2" className="w-full h-auto object-cover rounded-md" />
            <img src="/path-to-your-image3.jpg" alt="Happy Customer 3" className="w-full h-auto object-cover rounded-md" />
            <img src="/path-to-your-image4.jpg" alt="Happy Customer 4" className="w-full h-auto object-cover rounded-md" />
            <img src="/path-to-your-image5.jpg" alt="Happy Customer 5" className="w-full h-auto object-cover rounded-md" />
          </div>

          {/* Column 3 - Single Image */}
          <div className="flex justify-center items-center">
            <img src="/path-to-your-image6.jpg" alt="Happy Customer 6" className="w-full h-auto object-cover rounded-md" />
          </div>
        </div>

        {/* View All Testimonials Button */}
       
      </div>
    </section>







<section>


<Client/>

</section>
    </>
 
  )
}

export default About