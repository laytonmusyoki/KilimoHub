import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTools } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  return (
    <div className='bg-gray-50'>
        <div className="max-w-[95%] mx-auto py-20 px-4 sm:px-10 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
          Contact KilimoHub
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          We’d love to hear from you! Whether you need information about our products or want to inquire about our services, drop us a message, and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form and Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div
          className="bg-white rounded-md  p-8"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div
          className="bg-white rounded-md  p-8"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
          <p className="text-gray-700 mb-6">
            Reach out to us through any of the following methods, and we’ll be happy to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="mr-4 text-2xl text-green-700" />
              <span className="text-lg">123 KilimoHub St., Nairobi, Kenya</span>
            </div>

            <div className="flex items-center text-gray-700">
              <FaPhoneAlt className="mr-4 text-2xl text-green-700" />
              <span className="text-lg">+254 701 234 567</span>
            </div>

            <div className="flex items-center text-gray-700">
              <FaEnvelope className="mr-4 text-2xl text-green-700" />
              <span className="text-lg">info@kilimohub.com</span>
            </div>

            <div className="flex items-center text-gray-700">
              <FaTools className="mr-4 text-2xl text-green-700" />
              <span className="text-lg">Farm Tools & Equipment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
