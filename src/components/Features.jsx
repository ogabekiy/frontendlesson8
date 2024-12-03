import React from 'react'
import Users from '../images/users.svg'
import Correct from '../images/correct.svg'
import Edit from '../images/edit.svg'
import Chat from '../images/chat.svg'
import Clock from '../images/clock.svg'
import List from '../images/list.svg'
export default function Features() {
  return (
    <div className='bg-[#F4F6FC]'>
        <div className='container mx-auto font-[Poppins] pt-[100px] '>
            <div className='flex flex-col  items-center gap-7'>
                    <h4 className='text-1xl text-center'>Features</h4>
                    <h5 className='text-5xl text-center  w-[630px]  h-[192px] font-semibold text-[#282938]'>Design that solves problems, one product at a time</h5>
            </div>
            <div className='pt-5 left-[50px] '>
                <div className='flex justify-center gap-10'>
                <div>
                    <div className='w-[405px] h-[316px] top-2812px left-[160px] bg-white items-center pt-10 pl-10'>
                    <img className='w-[32px]' src={Users} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>Uses Client First</h3>
                    <p className='w-[324px] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                </div>
                <div className=''>
                <div className='w-[408px] h-[316px] top-2812px left-[597pxpx] bg-white pt-10 pl-10'>
                    <img className='w-[32px]' src={Correct} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>Two Free Revision Round</h3>
                    <p className='w-[324pxpx] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                </div>
                <div>
                    <div className='w-[405px] h-[316px] top-2812px left-[1035px] bg-white pt-10 pl-10'>
                    <img className='w-[32px]' src={Edit} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>Template Customization</h3>
                    <p className='w-[324px] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                </div>
                </div>
                <div className='flex justify-center gap-10 pt-8'>
                <div>
                <div className='w-[405px] h-[316px] top-2812px left-[160px] bg-white pt-10 pl-10'>
                    <img className='w-[32px]' src={Chat} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>24/7 Support</h3>
                    <p className='w-[324px] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                </div>
                <div>
                <div className='w-[405px] h-[316px] top-2812px left-[597px] bg-white pt-10 pl-10'>
                    <img className='w-[32px]' src={Clock} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>Quick Delivery</h3>
                    <p className='w-[324px] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                </div>
                <div>
                <div className='w-[405px] h-[316px] top-2812px left-[1035px] bg-white pt-10 pl-10'>
                    <img className='w-[32px]' src={List} alt="users" />
                    <h3 className='pt-5 text-[#282938] text-2xl font-semi-bold leading-9'>Hands-on approach</h3>
                    <p className='w-[324px] pt-5 opacity-70'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
