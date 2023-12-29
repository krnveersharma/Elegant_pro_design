import React from 'react';
import Card from './Card';
import "../App.css";
const Body = () => {
  return (
    <div style={{ height: 'calc(90vh - 60px)' }} className=' bg-gradient-to-b from-[#e2e6f9] to-[#A7D6E8] w-full flex flex-col  items-center justify-center'>
        <div className='relative w-[150px] h-[150px] border rounded-full bg-[#5F5CA9] shadow-xl sm:h-[100px] sm:w-[100px]'>
        <div className='absolute inset-0 border-2 border-dashed border-[#000000] rounded-full h-[170px] w-[170px] left-[-11px] top-[-10px] flex items-center justify-center text-white text-2xl font-container1  sm:h-[120px] sm:w-[120px] sm:text-sm'>
          <div>
            <div>GRAPHIC</div>
            <div>DESIGN</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 sm:gap-8'>
        <div className='flex mt-[-180px] justify-between sm:mt-[-150px]'>
          <span className='ml-12 sm:ml-8'>
            <Card color={'#F46CAA'} txt={'BANNER'} />
          </span>
          <span className='mr-12 sm:mr-8' >
            <Card color={'#F49064'} txt={'LOGO'} />
          </span>
        </div>
        <div className='flex justify-between'>
          <span >
            <Card color={'#12B7EE'} txt={'SOCIAL MEDIA'} txt2={'POST'} />
          </span>
          <span >
            <Card color={'#C9AE95'} txt={'POSTER'} />
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='ml-12 sm:ml-8'>
            <Card color={'#3CB679'} txt={'BUISNESS'} txt2={'CARD'} />
          </span>
          <span className='mr-12 sm:mr-8' >
            <Card color={'#1DBCB0'} txt={'BROCHURE'} />
          </span>
        </div>
        <div className='flex flex-col items-center justify-center mt-6 text-3xl text-[#0B4D8C] sm:text-lg'>
        <div className='border-b border-black font-container1 '>
          PROFESSIONAL GRAPHIC DESIGN
        </div>
        <div className='border-b border-black font-container1 '>
          SERVICES FOR ALL KIND OF BUISNESS
        </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
