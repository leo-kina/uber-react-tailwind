import React from 'react'
import logo from '../assets/uberlogo.png'
const Header = () => {
  return (
    <div className='w-full bg-black h-20 px-2'>
    <div className='mx-auto h-20 w-full flex items-center justify-between max-w-7xl'>
        <div className='flex items-center'>
        <img className='w-20 mr-7' src={logo}/>
        <nav className='hidden sm:flex items-center gap-5'>
            <a href="#" className='text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Company</a>
            <a href="#" className='text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Safeety</a>
            <a href="#" className='text-white font-medium hover:bg-zinc-900 px-2 py-2 rounded-lg duration-500'>Help</a>
        </nav>
        </div>
        <div className='flex items-center gap-4'>
            <a href="#" className='text-white font-medium '>Login</a>
            <a href="#" className='bg-white px-3 py-1 rounded-full font-medium '>Sing up</a>
        </div>
    </div>
    </div>
  )
}

export default Header
