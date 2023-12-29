import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoGlobeSharp } from "react-icons/io5";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap');
</style>
const Footer = () => {
  return (
    <div className=' h-[60px] w-full  bg-gradient-to-r from-[#30A8B9] to-[#A6D6E1] p-1'>
    <div className='flex gap-2 items-center ml-6 text-white'>
        <div><BiSolidPhoneCall/></div>
        <div>+91 801 3662456</div>
    </div>
    <div className='flex gap-2 items-center ml-6 text-white'>
        <div><IoGlobeSharp/></div>
        <a href="https://www.elegantprodesigns.com" target='_blank' className='border-b-2'>www.elegantprodesigns.com</a>
    </div>
    </div>
  )
}

export default Footer