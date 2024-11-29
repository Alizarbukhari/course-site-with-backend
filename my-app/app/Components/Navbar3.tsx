import Image from "next/image"
import { APP_LINKS } from "../utils/constant"
import Link from "next/link"
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar3() {
  return (
    <div className='w-full h-auto md:h-[105px] shadow-xl flex justify-between items-center px-[50px]'>
        {/* log div */}
        <div className="flex flex-col md:flex-row items-center gap-4">
        <Image src={"/nabar3/logo.png"} height={66} width={65} alt="logo" />
        <div className=" ">
        <div><Image className="w-[120px]" src={"/nabar3/vector.png"} height={50} width={120} alt="" /></div>
        <div className="text-[10px] text-[#066AFF]">The Ten_Million Sales Club</div>
      </div >
      </div>
        {/* link div */}
        
        <div className="flex flex-col md:flex-row gap-4 ">
        {APP_LINKS.map((link, index) => (
          <Link href={link.href} key={index}>
            <p className=" text-black hover:text-[#066AFF] text-[10px] font-semibold md:text-[15px]">{link.name}</p>
          </Link>
        ))}
      
        </div>
        {/* serch div */}
        <div className="flex flex-col md:flex-row gap-2">
            <div className=" text-[26px] font-bold"><IoIosMenu /></div>
            <div className=" text-2xl text-[#066AFF]"><CiSearch/></div>
        </div>
    </div>
  )
}

export default Navbar3