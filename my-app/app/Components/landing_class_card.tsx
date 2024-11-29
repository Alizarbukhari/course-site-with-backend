'use client';

import { useRef } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import HomeCards from "./home_cards";

export default function LandingClassCard() {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  // Handle right scroll
  const handleScrollRight = () => {
    if (cardContainerRef.current) {
      const containerWidth = cardContainerRef.current.offsetWidth;  // Container ki width
      const scrollLeft = cardContainerRef.current.scrollLeft;  // Current scroll position
      const scrollWidth = cardContainerRef.current.scrollWidth;  // Total scrollable width

      // Agar scroll end tak nahi pahucha, to scroll right
      if (scrollLeft + containerWidth < scrollWidth) {
        cardContainerRef.current.scrollBy({
          left: containerWidth - 50, // Yeh 50 margin ke liye diya gaya hai (mobile ke liye adjust kar sakte hain)
          behavior: "smooth",
        });
      }
    }
  };

  // Handle left scroll
  const handleScrollLeft = () => {
    if (cardContainerRef.current) {
      const containerWidth = cardContainerRef.current.offsetWidth;  // Container ki width
      const scrollLeft = cardContainerRef.current.scrollLeft;  // Current scroll position

      // Agar scroll start par nahi hai, to scroll left
      if (scrollLeft > 0) {
        cardContainerRef.current.scrollBy({
          left: -(containerWidth - 50), // Yeh 50 margin ke liye diya gaya hai (mobile ke liye adjust kar sakte hain)
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="w-full flex flex-wrap justify-center mt-8">
        <div className="max-w-full w-[1050px] px-4">
          {/* title div start */}
          <div className="flex justify-between flex-wrap">
            <div className="text-2xl font-semibold">High-Density Class.</div>
            <div className="flex gap-2">
              <div>
                <FaCircleChevronLeft
                  className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
                  onClick={handleScrollLeft}
                />
              </div>
              <div>
                <FaCircleChevronRight
                  className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
                  onClick={handleScrollRight}
                />
              </div>
            </div>
          </div>
          {/* card div start */}
          <div
            ref={cardContainerRef}
            className="flex md:gap-4 gap-24 overflow-x-auto mt-4 sm:w-full md:w-auto scrollbar-hidden"
          >
            <HomeCards />
          </div>
        </div>
      </div>
    </>
  );
}
