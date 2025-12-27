import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Contact
          </h1>
          <p className="mt-7 mb-14 text-lg lg:w-7/12">
            We’d love to hear from you! Whether you have a question about our products, need assistance, or just want to say hello, we’re here to help. Feel free to reach out using the contact information below:
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="lg:w-2/3">
            <h1 className="font-bold text-4xl lg:text-5xl mb-6">
              Have Questions?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you require assistance with an order, product, or any other inquiry, our customer support team is ready to help. You can reach them by:
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column: Contact Info */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-12">
                <div>
                  <h2 className="font-bold text-2xl mb-2 text-gray-900">Emergency? Call Us:</h2>
                  <p className="text-xl text-blue-600 font-semibold">+91 9901034214</p>
                </div>

                <div>
                  <h2 className="font-bold text-2xl mb-2 text-gray-900">Send Us Mail</h2>
                  <p className="text-xl text-blue-600 font-semibold">rajeev@epselectricals.com</p>
                </div>

                <div>
                  <h2 className="font-bold text-2xl mb-6 text-gray-900">Find Us</h2>
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.4703713578374!2d77.66921617507371!3d12.812852887488186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ4JzQ2LjMiTiA3N8KwNDAnMTguNSJF!5e0!3m2!1sen!2sin!4v1766824697155!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-1/2 bg-white p-8 lg:p-10 rounded-2xl shadow-xl shadow-gray-100 border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    id="subject"
                    type="text"
                    placeholder="Inquiry Subject"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    id="message"
                    rows="4"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                  type="button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
