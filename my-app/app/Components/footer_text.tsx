import React from 'react';

interface Footer_Text_Type {
  line?: boolean; // line is optional
  text: string;
}

export default function Footer_text({ line, text }: Footer_Text_Type) {
  return (
    <>
      <div className="flex gap-2 items-center">
        {/* Line div - renders only if line is true */}
        {line && (
          <div className="w-1 h-5 border bg-[#FFFFFF]"></div>
        )}
        {/* Text div */}
        <div>{text}</div>
      </div>
    </>
  );
}
