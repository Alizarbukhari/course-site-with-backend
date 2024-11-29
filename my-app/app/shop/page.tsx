import Footer from "../Components/footer";
import Navbar2 from "../Components/navbar2";
import ShopCards from "../Components/shop_card";


export default function SHOP() {
  return (
    <div>
        <Navbar2/>
        {/* body section */}
        <div className='w-full flex flex-wrap justify-center mt-8'>
        <div className='w-[950px]'>
            {/* title div start */}
            <div className="flex justify-between flex-wrap">
                <div className="text-2xl font-semibold ">High-Density Class.</div>
               
            </div>
            {/* card div start */}
            <div className="flex flex-wrap gap-2 justify-center"><ShopCards/></div>
        </div>
    </div>
    <div className="mt-16"><Footer/></div>
    </div>
  )
}
