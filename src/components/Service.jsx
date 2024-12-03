import React from 'react'
import pointer1 from '../images/pointer1.svg';
import pointer2 from '../images/pointer2.svg';
import pointer3 from '../images/pointer3.svg';
import pointer4 from '../images/pointer4.svg';

export default function Service() {
  return (
    <div className='h-[661px] top=[760px] bg-[#F4F6FC] flex justify-center font-[Poppins] gap-[320px]'>
        <div className='pt-[120px]'>
        <h2 className='text-5xl font-semibold w-[405px] h-[64px] top-[888px] left-[165px] ' >How we work</h2>
        <p className='w-[405px] h-[56px] top-[968px] left-[165px] opacity-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <a href='#' className='font-semibold w-[244px] h-[32px] top-[1040px] left-[165px] text-[#2405F2]'>Get in touch with us {'->'}</a>
        </div>
        <div className='grid grid-cols-2 pt-[80px]'>
            <div>
              <div>            <img src={pointer1} alt="p1"/>
              </div>
            <h2 className='w-[328px] h-[48px] top-[954px] left-[712px] text-2xl pt-[10px]'>Strategy</h2>
            <p className='w-[303px] h-[56px] top-[1010px] left-[712px] opacity-[70%]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
            <div>
              <div>            <img src={pointer2} alt="p2" />
              </div>
            <h2 className='w-[328px] h-[48px] top-[954px] left-[712px] text-2xl pt-[10px]'>Wireframing</h2>
            <p className='w-[303px] h-[56px] top-[1010px] left-[712px] opacity-[70%]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>

            </div>
            <div>
              <div>            <img src={pointer3} alt="p3" />
              </div>
            <h2 className='w-[328px] h-[48px] top-[954px] left-[712px] text-2xl pt-[10px]'>Design</h2>
            <p className='w-[303px] h-[56px] top-[1010px] left-[712px] opacity-[70%]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>

            </div>
            <div>
              <div>            <img src={pointer4} alt="p4" />
              </div>
            <h2 className='w-[328px] h-[48px] top-[954px] left-[712px] text-2xl pt-[10px]'>Development</h2>
            <p className='w-[303px] h-[56px] top-[1010px] left-[712px] opacity-[70%]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>

            </div>
        </div>
    </div>
    
  )
}
