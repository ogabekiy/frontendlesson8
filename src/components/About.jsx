import React from 'react'
import Illustration from '../images/Illustration.png'
export default function About() {
  return (
    <div className='h-[668px] bg-[#1C1E53] font-[Poppins]'>
        <div className='flex justify-center py-[100px] gap-[120px]'>
            <div className='py-[40px]'>
                <div>
                    <h2 className='text-white font-semibold text-6xl w-[582px] h-[222px] top-[218px] left-[100px] leading-[70px]'>Building stellar websites for early startups</h2>
                    <p className='text-[#FFFFFF] w-[562px] h-[56px] left-[160px] top-[464px] opacity-70 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. sit amet consectetur adipisicin</p>
                </div>
                <div class="flex space-x-4 py-[60px]">
                    <button class="px-6 py-2 bg-[#FCD980] rounded-full hover:bg-gray-700 w-[230px] h-[64px]">
                        View our work
                    </button>
                    <button class="px-6 py-2 text-white border-gray-300 rounded-full hover:bg-gray-700 ">
                    View Pricing -{'>'}
                    </button>
                </div>

            </div>

            <div className='w-[638px] h-[362px] top-[241px] left-[820px]'>
            <img src={Illustration} alt="Illustratioin" />
            </div>

        </div>
    </div>
  )
}
