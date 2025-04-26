import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-green-700 text-white py-8 mt-16">
      <div className="max-w-[95%] mx-auto px-4 sm:px-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-300 mb-4">KilimoHub</h3>
            <p className="text-gray-200 mb-4">
              Your one-stop platform for buying farm products and tools. Connecting farmers to the resources they need to succeed.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-gray-200">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-green-500 transition-all duration-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-2xl hover:text-green-500 transition-all duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-green-500 transition-all duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-green-500 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-green-300 transition-all duration-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300 transition-all duration-300">Products</a></li>
              <li><a href="#" className="hover:text-green-300 transition-all duration-300">Services</a></li>
              <li><a href="#" className="hover:text-green-300 transition-all duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-gray-200 mb-4">Contact</h4>
            <p className="text-gray-200">123 KilimoHub St., Nairobi, Kenya</p>
            <p className="text-gray-200">+254 701 234 567</p>
            <p className="text-gray-200">info@kilimohub.com</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-gray-200 text-sm">
            &copy; {new Date().getFullYear()} KilimoHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
