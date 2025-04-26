import React, { useState } from 'react';
import { FaBars, FaHeart, FaShoppingCart, FaUser, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import SmallNavbar from './SmallNavbar';

function Navbar() {
  // Use a fallback of an empty array in case `cart.items` or `favorite.items` is undefined
  const cartItems = useSelector(state => state.cart?.items || []);
  const favoriteItems = useSelector(state => state.favorite?.items || []);

  const cartCount = cartItems.length; // Get the length of cart items
  const favoriteCount = favoriteItems.length; // Get the length of favorite items
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin,setIsLogin]=useState(false)
  const [isRegister,setIsRegister]=useState(false)
  const [smallMenu,setSmallMenu]=useState(false)
  

  const HandleLoginModal=()=>{
    setIsModalOpen((prev)=>(!prev))
    setIsLogin(true)
  }

  const HandleRegisterModal=()=>{
    setIsModalOpen((prev)=>(!prev))
    setIsRegister(true)
  }

  return (
    <div className="w-full mx-auto max-w-[95%] bg-white sticky z-50 top-0 py-4 px-4 flex items-center justify-between overflow-x-hidden">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="KilimoHub Logo" className="w-6 h-6" />
        <h1 className="text-2xl md:text-4xl font-bold text-green-900 whitespace-nowrap">KilimoHub</h1>
      </div>

      {/* Center: Navigation */}
      <div className="hidden md:flex space-x-6 text-green-900 font-medium">
        <a href="/" className="hover:text-green-700 font-bold">Home</a>
        <a href="#about" className="hover:text-green-700 font-bold">About</a>
        <a href="#contact" className="hover:text-green-700 font-bold">Contact</a>
      </div>

      {/* Right: Icons and Login */}
      <div className="flex items-center space-x-4 relative">
        {/* Favorites Link */}
        <a href="/favorites" className="relative hover:text-green-700 text-green-900">
          <FaHeart size={20} className="text-base md:text-xl" />
          {favoriteCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
              {favoriteCount}
            </span>
          )}
        </a>

        {/* Cart Link */}
        <a href="/cart" className="relative hover:text-green-700 text-green-900">
          <FaShoppingCart size={20} className="text-base md:text-xl" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] md:text-xs font-bold px-[5px] py-[1px] rounded-full leading-none">
              {cartCount}
            </span>
          )}
        </a>

        {/* Login/register Button */}
        <div onClick={()=>{setIsModalOpen(true)}} className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer'>
          <FaUserCircle size={20}/>
        </div>

        {/* Menu */}
        <div className='md:hidden'>
          <FaBars size={20} onClick={()=>{setSmallMenu(true)}} />
        </div>
      </div>
      {/* Modal for Login/Register */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={()=>{setIsModalOpen(false)}}>
            <h2 className="text-xl font-bold mb-4">Login / Register</h2>
            <div className="space-y-4">
            <button className="w-full py-2 bg-green-700 text-white rounded-full" onClick={()=>{HandleLoginModal()}}>Login</button>
            <button className="w-full py-2 bg-blue-700 text-white rounded-full" onClick={()=>{HandleRegisterModal()}}>Register</button>
        </div>
        </Modal>
      )}
      {/* overlay */}
      {smallMenu && (
        <div className="fixed inset-0  bg-black bg-opacity-50 p-2 z-50">

        </div>
      )}
      {/* small navbar toggle */}
      {smallMenu && (
        <SmallNavbar onClose={()=>{setSmallMenu(false)}} isOpen={smallMenu}/>
      )}

      {/* modal for login */}
      {isLogin && (
        <Modal isOpen={isLogin} onClose={()=>{setIsLogin(false)}}>
          <Login onClose={()=>{setIsLogin(false)}}/>
        </Modal>
      )}

      {/* modal for registerr */}
      {isRegister && (
        <Modal isOpen={isRegister} onClose={()=>{setIsRegister(false)}}>
          <Register onClose={()=>{setIsRegister(false)}}/>
        </Modal>
      )}
    </div>
    
  );
}

export default Navbar;

{/* overlay */}
<div className='w-full inset-0 bg-black/40'>

</div>