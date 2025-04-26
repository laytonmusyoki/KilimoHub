import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1 className='text-center text-4xl mb-2 font-extrabold'>Welcome Back !!</h1>
        <form action="">
            <div>
                <label for="">Username</label>
                <input type="text" className='border rounded-md w-full h-[45px] pl-2 my-2 outline-green-700' placeholder='Enter username'/>
            </div>
            <div>
                <label for="">Password</label>
                <input type="password" className='border rounded-md w-full h-[45px] pl-2 my-2 outline-green-700' placeholder='Enter password'/>
            </div>
            <div className='flex items-center justify-between my-2'>
                <div className='flex items-center gap-x-2'>
                    <input type="checkbox"/>
                    <p>Show password</p>
                </div>
                <div>
                    <a href='' className='text-blue-600'>Forgot Password?</a>
                </div>
            </div>
            <div>
                <button className='w-full outline-none border-none py-3 bg-green-700 rounded-full text-white'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
