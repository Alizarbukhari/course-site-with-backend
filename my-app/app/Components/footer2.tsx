import Image from "next/image"
import Footer_text from "./footer_text"

export default function Footer2() {
  return (
    <>
    
    <div className="w-full h-auto md:h-[222px] bg-[#9E9E9E] flex items-center justify-center py-4">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* logo div start */}
            <div className="flex flex-col md:flex-row md:mt-3 items-center gap-4">
            
            <div>
            <Image src={"/footer2/logo.png"} height={66} width={65} alt="logo" />
            </div>

            <div>
                <div><Image className="w-[120px]" src={"/footer2/vector.png"} height={50} width={120} alt="" /></div>
        <div className="text-[10px] text-white">The Ten_Million Sales Club</div>
            </div>
        </div>
        {/* dis div */}
        <div>
            {/* end content */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-center text-white">
                <Footer_text line={true} text="Privacy Policy" />
                <Footer_text line={true} text="Terms of Service" />
                <Footer_text line={true} text="Quality Error Report" />
                <Footer_text line={true} text="Quality Error Report Confirmation" />
          </div>
          {/* Contact div */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 text-white mt-8">
            
             <Footer_text line={false} text="대표 000" />
             <Footer_text line={true} text="사업자번호 000-00-00000" />
            <Footer_text line={true} text="Tel 00-000-0000" />
            <Footer_text line={true} text="Fax 00-000-0000" />
            <Footer_text line={true} text="E-mail 00-000-0000" />  
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 text-white">
          <Footer_text  text="서울 00구 000길 00. 123호 (00동,건물이름 1차)" />
          <Footer_text line={true} text="Copyright(c) 2023~A2P.com All right Reserved." />
          </div>
        </div>
        </div>
    </div>
    
    </>
  )
}
