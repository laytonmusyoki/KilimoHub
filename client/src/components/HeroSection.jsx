import React from 'react';

function HeroSection() {
  return (
    <div className="text-center px-4 py-16 bg-[#fefdf7] text-green-900">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Buy Agricultural Products <br /> with Ease
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Explore a wide range of farm-fresh produce, grains, livestock, and tools.
      </p>

      {/* Get Started Button */}
      <button className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium">
        Get Started
      </button>
    </div>
  );
}

export default HeroSection;
