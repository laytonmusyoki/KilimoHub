import React, { useState } from 'react';
import { FaBars, FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Navbar() {
  // Use a fallback of an empty array in case `cart.items` or `favorite.items` is undefined
  const cartItems = useSelector(state => state.cart?.items || []);
  const favoriteItems = useSelector(state => state.favorite?.items || []);

  const cartCount = cartItems.length; // Get the length of cart items
  const favoriteCount = favoriteItems.length; // Get the length of favorite items

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Sidebar for small devices */}
      <div
        className={`fixed top-0 left-0 h-full z-[100] bg-green-900 text-white w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            ×
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <a href="/" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[95%] bg-white sticky z-50 top-0 py-4 px-4 flex items-center justify-between ">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="KilimoHub Logo" className="w-6 h-6" />
          <h1 className="text-2xl md:text-4xl font-bold text-green-900 whitespace-nowrap">KilimoHub</h1>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex space-x-6 text-green-900 font-medium">
          <a href="/" className="hover:text-green-700 font-bold">Home</a>
          <a href="/about" className="hover:text-green-700 font-bold">About</a>
          <a href="/contact" className="hover:text-green-700 font-bold">Contact</a>
        </div>

        {/* Right: Icons and User Avatar */}
        <div className="flex items-center space-x-4 relative">
         
          {/* Favorites Link */}
          <a href="/favorites" className="relative hover:text-green-700 text-green-900">
            <FaHeart className="text-base md:text-xl" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
                {favoriteCount}
              </span>
            )}
          </a>

          {/* Cart Link */}
          <a href="/cart" className="relative hover:text-green-700 text-green-900">
            <FaShoppingCart className="text-base md:text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
                {cartCount}
              </span>
            )}
          </a>

          {/* User Avatar and Modal for Login/Register */}
          <button onClick={toggleModal} className="relative text-green-900">
            <FaUserCircle className="text-xl" />
          </button>

          {/* Mobile Sidebar Toggle */}
          <button onClick={toggleSidebar} className="md:hidden text-green-900">
            <FaBars className="text-xl" />
          </button>

        </div>
      </div>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-end">
              <button onClick={toggleModal} className="text-black text-2xl">×</button>
            </div>
            <h2 className="text-xl font-bold mb-4">Login / Register</h2>
            <div className="space-y-4">
              <button className="w-full py-2 bg-green-700 text-white rounded-full">Login</button>
              <button className="w-full py-2 bg-blue-700 text-white rounded-full">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
