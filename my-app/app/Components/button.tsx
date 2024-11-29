import React from 'react'
import { buttonTypes } from './type'
import { FaAngleRight } from "react-icons/fa6";
function Button(prop:buttonTypes) {
  return (
    <div className=''>
        <button className='${prop.color} flex text-white h-[62px] w-[135px] items-center' style={{ backgroundColor: prop.color }}>{prop.title} <FaAngleRight className='text-white mt-1'/> </button>
    </div>


  )}
//   className="w-[200px] h-[160px] flex flex-col justify-center items-center rounded"
// className=''
//   style={{ backgroundColor: items.color }}

export default Button