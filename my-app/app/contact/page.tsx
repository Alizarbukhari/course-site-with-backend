export default function ContactUs() {
    return (
      <>
        <div className=" w-full h-auto flex justify-center">
          <div className=" w-full max-w-[1050px] py-[12w0px] h-400px]">

          
          {/* Title div */}
          <div className="text-[24px] md:text-[44px] font-bold text-center md:text-left">찾아오는 길</div>
          {/* Google Map div */}
          <div className="w-full h-[300px] md:h-[400px] border-[2px] border-black mt-16">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090415!2d-122.41941558468159!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f197e203%3A0x18d8cbf77f02e0e9!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1638760195580!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
          {/* Details div */}
          <div className="flex flex-col items-center md:items-start mt-6">
            <div className="text-[14px] md:text-[16px] font-bold text-center md:text-left">
              정승환 - 에그서울 대표
            </div>
            <div className="text-[12px] md:text-[14px] font-normal text-center md:text-left mt-2">
              담론은 재치 있는 사람을, 필기는 정확한 사람을, 독서는 완성된 사람을 만든다
            </div>
            <div className="text-[12px] md:text-[14px] font-medium mt-4 text-[#ff6016] text-center md:text-left">
              김포 마리나베이
            </div>
            <div className="text-[12px] md:text-[14px] font-medium text-center md:text-left">
              첫 모임 8/14(수) 19:40
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
  