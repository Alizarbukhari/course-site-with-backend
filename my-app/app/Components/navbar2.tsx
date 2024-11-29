import { APP_LINKS } from "../utils/constant";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Navbar2() {
  return (
    <>
      <div className="w-full h-auto md:h-[80px] font-[Pretendard] bg-[#FF6016] text-black flex flex-wrap items-center justify-between px-4">
        {/* Home div */}
        <div className="text-center md:text-left">
          <span className="font-bold text-lg">spatial</span> <br className="md:hidden" />
          <span className="font-light">density</span>
        </div>

        {/* Links div */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-2 md:mt-0">
          {APP_LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <p className="font-normal text-sm md:text-base">{link.name}</p>
            </Link>
          ))}
        </div>

        {/* Login div */}
        <div className="text-2xl text-slate-500"><CiSearch /></div>
      </div>
    </>
  );
}



