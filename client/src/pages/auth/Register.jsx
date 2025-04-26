import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <h1 className='text-center text-4xl mb-2 text-green-700 font-extrabold'>Create Account !!</h1>
        <form action="" >
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-2'>
            <div>
                <label for="" className='my-1'>Username</label>
                <input type="text" className='border rounded-md w-full h-[45px] pl-2 outline-green-700' placeholder='Enter username'/>
            </div>
            <div>
                <label for="" className='my-1'>Email</label>
                <input type="email" className='border rounded-md w-full h-[45px] pl-2 outline-green-700' placeholder='Enter email'/>
            </div>
            <div>
                <label for="" className='my-1'>Phone</label>
                <input type="text" className='border rounded-md w-full h-[45px] pl-2 outline-green-700' placeholder='Enter phone'/>
            </div>
            <div>
                <label for="" className='my-1'>Password</label>
                <input type="password" className='border rounded-md w-full h-[45px] pl-2 outline-green-700' placeholder='Enter phone'/>
            </div>
            </div>
            <div>
                <label for="" className='my-1'>Confirm Password</label>
                <input type="password" className='border rounded-md w-full h-[45px] pl-2 outline-green-700' placeholder='Confirm password'/>
            </div>
            <div className='flex items-center my-2 gap-x-2'>
                <input type="checkbox"/>
                <p>Show password</p>
            </div>
            <div>
                <button className='w-full outline-none border-none py-3 bg-gray-700 rounded-full text-white'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register
