import { SiKakaotalk,SiInstagram } from "react-icons/si";
import { IconType } from 'react-icons';
interface Footer_list_Type{
  id:number,
  icon:IconType
}

export default function Footer_list() {

  const icons: Footer_list_Type[] = [
    { id: 0, icon: SiKakaotalk, },
    { id: 1, icon: SiKakaotalk, },
    { id: 2, icon: SiInstagram, },
  ];
  return (
    <>
     {icons.map((item) => (
        <div
          key={item.id}
          className="h-11 w-11 bg-white rounded-full flex justify-center items-center"
        >
          {/* Render the icon with dynamic properties */}
          <item.icon className={`text-[#585858] text-2xl`} />
        </div>
      ))}
    {/* <div className="h-11 w-11 bg-white rounded-full flex justify-center items-center">
      
    < SiKakaotalk className="text-[#585858] text-2xl z-10" />
    </div> */}
    

    
    
    </>
  )
}













// "use client"
// import React, { useState } from 'react';
// import { MdKeyboardArrowDown } from "react-icons/md";
// const FooterList = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleList = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-white text-black p-4 border rounded h-[45px] w-[215px]">
//       <div 
//         className="flex justify-between items-center cursor-pointer"
//         onClick={toggleList}
//       >
//         <span className="font-bold">한국어</span>
//         <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
//         <MdKeyboardArrowDown className='text-2xl' />
//         </span>
//       </div>

//       {isOpen && (
//         <ul className="mt-2 pl-4 list-disc">
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FooterList;
