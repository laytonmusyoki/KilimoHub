import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Modal({isOpen,onClose,children}) {
    if(!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 z-50">
        <div className="bg-white p-3 rounded-lg w-full max-w-md">
        <div className="flex justify-end">
            <FaTimes size={20} onClick={onClose}/>
        </div>
        {children}
        </div>
    </div>
  )
}

export default Modal
