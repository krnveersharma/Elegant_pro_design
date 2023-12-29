import React from 'react'
import "../App.css";
const Topicon = () => {
    return (
<div className='bg-gradient-to-b from-[#EDEAFB] to-[#e2e6f9] h-[60px]'>
<div className='flex ml-6'>
                <div className='text-5xl mt-2'>E</div>
                <div className='text-3xl flex font-container mt-2'>
                    <div style={{ textDecorationColor: '#cc5500', textDecorationLine: 'underline' }}>le</div>
                    <div>g</div>
                    <div style={{ textDecorationColor: '#cc5500', textDecorationLine: 'underline' }}>ant</div>
                </div>
            </div>
            <div className=' mt-[-15px] ml-12 text-xs flex gap-4 sm:ml-[50px]'>
                <div>PRO</div>
                <div>DESIGNS</div>
            </div>

        </div>

    )
}

export default Topicon