import React from 'react';

function About() {
  return (
    <div className='max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-[100px] py-10 px-4 sm:px-10 bg-gray-100 text-gray-800' id='about'>
      {/* Text Section */}
      <div className="flex flex-col justify-center" data-aos="fade-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
          About KilimoHub
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
          KilimoHub is your trusted marketplace for farm products and tools. We bridge the gap between farmers and buyers, providing a seamless platform to sell fresh farm produce directly to consumers. In addition, we offer a wide range of farm tools to help farmers improve their productivity.
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          Our mission is to empower farmers by connecting them to buyers who seek fresh, quality products while providing access to essential tools and equipment for better farming. KilimoHub is committed to improving the agricultural value chain by making farming easier, more profitable, and sustainable.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center" data-aos="zoom-in">
        <img
          src="/images/tomato.png" 
          alt="Farm Products and Tools"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-contain drop-shadow-2xl rounded-xl"
          style={{ maxHeight: '450px' }} 
        />
      </div>
    </div>
  );
}

export default About;
