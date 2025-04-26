import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const cartCount = 3;
  const favoriteCount = 2;

  return (
    <div className="w-full mx-auto max-w-[95%] bg-white sticky z-50 top-0 py-4 px-4 flex items-center justify-between overflow-x-hidden">
      
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="KilimoHub Logo" className="w-6 h-6" />
        <h1 className="text-2xl md:text-4xl font-bold text-green-900 whitespace-nowrap">KilimoHub</h1>
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex space-x-6 text-green-900 font-medium">
        <a href="#" className="hover:text-green-700 font-bold">Home</a>
        <a href="#" className="hover:text-green-700 font-bold">About</a>
        <a href="#" className="hover:text-green-700 font-bold">Contact</a>
      </div>

      {/* Right: Icons and Login */}
      <div className="flex items-center space-x-4 relative">
        {/* Favorites */}
        <button className="relative hover:text-green-700 text-green-900">
          <FaHeart className="text-base md:text-xl" />
          {favoriteCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
              {favoriteCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button className="relative hover:text-green-700 text-green-900">
          <FaShoppingCart className="text-base md:text-xl" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
              {cartCount}
            </span>
          )}
        </button>

        {/* Login */}
        <button className="bg-green-800 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full hover:bg-green-700">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
