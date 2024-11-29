import React from 'react';
import FooterList from './footer_list';
import Footer_text from './footer_text';

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-black flex justify-center items-center">
        <div className="h-auto w-full max-w-[1050px] py-16 flex flex-col text-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* div 1 start */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              {/* title */}
              <div className="text-[24px] text-center md:text-left">모드니펫</div>
              {/* description */}
              <div className="text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Footer_text line={false} text="대표 000" />
                  <Footer_text line={true} text="사업자번호 000-00-00000" />
                  <Footer_text line={true} text="000" />
                  <Footer_text line={true} text="통신판매번호 0000-0000-0000" />
                  <Footer_text line={true} text="사업자번호조회" />
                </div>
                {/* emails */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                  <Footer_text line={false} text="E-mail 00-000-0000" />
                  <Footer_text line={true} text="고객센터 0000-0000" />
                  <Footer_text
                    line={true}
                    text="서울 00구 000길 00. 123호 (00동,건물이름 1차)"
                  />
                </div>
                <div className="flex justify-center md:justify-start mt-2">
                  Copyright(c) All right Reserved.
                </div>
              </div>
              {/* logos */}
              <div className="flex justify-center md:justify-start gap-6 mt-4">
                <FooterList/>
              </div>
            </div>
            {/* div 2 start */}
            {/* <div className="w-full md:w-auto mt-4 md:mt-0">
              <div className="text-center md:text-end">언어를 선택하세요</div>
              <div className="flex justify-center md:justify-end mt-2">
                <FooterList />
              </div>
            </div> */}
          </div>
          {/* line */}
          <div className="h-1 w-full bg-white mt-4"></div>
          {/* end content */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-center">
                <Footer_text line={true} text="개인정보처리방침" />
                <Footer_text line={true} text="이용약관" />
                <Footer_text line={true} text="품질오류신고" />
                <Footer_text line={true} text="품질오류신고확인" />
          </div>
        </div>
      </div>
    </>
  );
}
