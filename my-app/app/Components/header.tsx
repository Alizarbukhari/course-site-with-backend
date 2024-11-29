"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';

export default function Header() {
  const images = [
    '/headerimage/header 3.png',
    '/headerimage/header1.jpeg',
    '/headerimage/header2.jpeg',
  ]; // Array of image paths

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for tracking current image index

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next image, loop back to start if at the end
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Move to previous image, loop to the end if at the start
  };

  return (
    <>

      {/* Header div start */}
      <div className='w-full h-auto flex justify-center mt-10 items-center gap-6'>
        {/* Left icon */}
        <div onClick={handlePrevious} className='cursor-pointer'>
          <FaChevronLeft className="text-xl text-[#2A2F5E]" />
        </div>

        {/* Header div with image */}
        <div className='w-full max-w-[1050px] h-[560px] bg-[#C4C4C4] rounded-lg flex justify-center items-center'>
          <div className='w-full max-w-[700px] h-full'>
            <Image
              className='h-full w-full'
              src={images[currentImageIndex]}
              width={600}
              height={500}
              alt='header image'
            />
          </div>
        </div>

        {/* Right icon */}
        <div onClick={handleNext} className='cursor-pointer'>
          <FaChevronRight className="text-xl text-[#2A2F5E]" />
        </div>
      </div>
      {/* Header div end */}
    </>
  );
}
