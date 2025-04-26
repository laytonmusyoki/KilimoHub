import React from 'react'
import { FaHome, FaTimes,FaInfoCircle,FaEnvelope,FaHeart, FaCartPlus } from 'react-icons/fa'

function SmallNavbar({onClose,isOpen}) {

    

const menuLinks = [
  {
    label: "Home",
    path: '/',
    icon: <FaHome size={20} className='text-gray-600'/>
  },
//   {
//     label: "About",
//     path: '#about',
//     icon: <FaInfoCircle size={20} className='text-gray-600'/>
//   },
//   {
//     label: "Contact",
//     path: '#contact',
//     icon: <FaEnvelope size={20} className='text-gray-600'/>
//   },
  {
    label: "Favourites",
    path: '/favorites',
    icon: <FaHeart size={20} className='text-gray-600'/>
  },
  {
    label: "Cart",
    path: '/cart',
    icon: <FaCartPlus size={20} className='text-gray-600'/>
  }
  
];

    
  return (
    <div
      className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl md:text-4xl font-bold text-green-900 whitespace-nowrap">KilimoHub</h1>
        <FaTimes size={20} onClick={onClose}/>
      </div>
      <hr className='my-4'/>
      <div>
        {
            menuLinks.map((menu,index)=>(
                <li key={index} className='list-none flex items-center gap-x-2 my-4'>
                    {menu.icon}
                    <a href={menu.path} className='text-gray-700 font-semibold text-xl'>{menu.label} </a>
                </li>
            ))
        }
      </div>
    </div>
  )
}

export default SmallNavbar
