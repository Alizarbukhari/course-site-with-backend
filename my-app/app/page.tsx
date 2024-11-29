
import Landing from "./Components/landing";
import Landing_class_card from "./Components/landing_class_card";
export default function Home() {
  return (
    <div >

<Landing/>
{/* event banner div start*/}
<div className="w-full flex justify-center mt-10">
  <div className="w-[1050px] h-[100px] bg-[#FF6016] items-center flex justify-center">
    <div className=" uppercase text-white text-[30px]">event banner</div>
  </div>
</div>
{/* event banner div end*/}
{/* card div start*/}
<div className="">
  <Landing_class_card/>
  <Landing_class_card/>
  <Landing_class_card/>
</div>
{/* card div end*/}


    </div>
  );
}
