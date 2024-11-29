import { APP_LINKS } from "../utils/constant";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:px-[230px] px-[10px] h-auto md:h-[80px] font-[Pretendard] bg-[#FF6016] text-black  ]">
        {/* Home div */}
        <div className="">
          <span className="font-bold text-xl flex flex-col">공간 </span> 
          <span className="font-bold text-xl">밀도</span>
        </div>

        {/* Links div */}
        <div className="flex gap-10 mt-2 px-[10px] md:mt-0">
          {APP_LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <p className="font-normal text-sm md:text-base">{link.name}</p>
            </Link>
          ))}
        </div>

   
      </div>
    </>
  );
}






      

   
