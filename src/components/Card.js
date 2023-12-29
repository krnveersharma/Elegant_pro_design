import React from 'react'
import "../App.css";
const Card = (props) => {
  return (
    <div style={{backgroundColor:`${props.color}`}} className='w-36 rounded-full py-2 px-4 flex flex-col justify-center items-center text-white text-sm h-12 font-container1 shadow-md shadow-gray-700 sm:text-[0.592rem] sm:w-[100px]'>
        <div>{props.txt}</div>
        <div>{props.txt2}</div>
    </div>
  )
}

export default Card