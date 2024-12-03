import React from 'react'

export default function Navbar() {
  return (
   <div  className='bg-[#1C1E53]'>
     <div className='container mx-auto flex justify-between py-7'>
    
    <div>
        <a href="#" className='text-white text-2xl font-bold'> {"{"}Finsweet</a>
    </div>
   <div className='flex gap-7'>
   <nav>
        <ul className='flex gap-6 py-2'>
            <li>
                <a href="#" className='text-white'>Home</a>
            </li>
            <li> <a href="#" className='text-[#BBBBCB]'>About us</a></li>
            <li><a href="#" className='text-[#BBBBCB]'>Features</a></li>
            <li> <a href="#" className='text-[#BBBBCB]'>Pricing</a></li>
            <li><a href="#" className='text-[#BBBBCB]'>FAQ</a></li>
            <li> <a href="#" className='text-[#BBBBCB]'>Blog</a></li>
        </ul>
    </nav>
    <div>
        <button className='px-6 py-2 text-white border-2 border-gray-300 rounded-full hover:bg-gray-700 '>
            Contact us
        </button>
    </div>
   </div>

    </div>
   </div>
  )
}



