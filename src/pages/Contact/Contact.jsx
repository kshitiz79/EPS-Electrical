import React from 'react'

const Contact = () => {
  return (
    <>
      <section>
        <div>
          <h1 className='text-5xl sm:text-7xl font-bold ml-8 sm:ml-32 mt-8 sm:mt-16'>
            Contact
          </h1>
          <p className='ml-4 sm:ml-72 w-10/12 sm:w-3/12 mt-4 sm:mt-7 mb-6 sm:mb-14'>
            We’d love to hear from you! Whether you have a question about our products, need assistance, or just want to say hello, we’re here to help. Feel free to reach out using the contact information below:
          </p>
        </div>
      </section>

      <section>
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="font-bold text-4xl sm:text-6xl">
            Have Questions?
          </h1>
          <p className='ml-0 sm:ml-32 mt-2 px-4 sm:px-14'>
            If you require assistance with an order, product, or any other inquiry, our customer support team is ready to help. You can reach them by:
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-start px-8 sm:px-28 mt-14">
        {/* Left Column: Contact Info */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="font-bold text-2xl mb-4">Emergency? Call Us:</h2>
          <p className="text-lg mb-6">+91 9901034214</p>

          <h2 className="font-bold text-2xl mb-4 mt-12">Send Us Mail</h2>
          <p className="text-lg mb-6">rajeev@epselectricals.com</p>

          <h2 className="font-bold text-2xl mb-4 mt-20">Find the Studio</h2>
          <div className="w-full h-64 mb-20">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.176768771719!2d77.67936501435885!3d12.84723482143986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72679744baf5%3A0x9d9a6767d982f5ad!2sGM%20INFINITE!5e0!3m2!1sen!2sin!4v1696939079609!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2 lg:ml-20">
          <form className="pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Your Email Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
