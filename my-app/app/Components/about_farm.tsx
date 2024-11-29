"use client"
import { useState } from 'react';

export default function About_farm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        detail: '' 
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission (sending data to the backend)
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data submitted successfully!');
                // Optionally, clear the form or handle successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    detail: ''
                });
            } else {
                alert('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending the data.');
        }
    };

  return (
    <>
    <div className=' flex justify-center items-center w-full rounded-xl h-full'>
        <div className=' w-full max-w-[200px] md:max-w-[220px] h-[569px]'>
                 <div className='text-[20px] font-extrabold text-black'>
                 브랜드 마케팅 무기학 개론 누구나 쉽게 배우기
                 </div>
                 {/* informaation */}
                 <div className=' flex flex-col gap-2'>
                    <div className='text-[#FF6016] font-semibold text-[14px] flex gap-10 mt-10'>
                        <p >일시</p>
                        <p>07.11 (수) ~ 07.21 (토)</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>위치</p>
                        <p>서대문구</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>비용</p>
                        <p>50,000원</p>
                    </div>
                    <div className='text-[#6D6D6D] font-semibold text-[14px] flex gap-10'>
                        <p>참석</p>
                        <p>지원 <span className='text-[#FF6016]'>51</span>  / 모집 <span className='text-[#FF6016]'>1</span></p>
                    </div>
                    <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
                 </div>
                 {/* data div */}
                 <div className='flex flex-col'>
            {/* Providing input fields with placeholders */}
            <div className='mt-2 text-[16px] font-medium'>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 p-2 border border-[#F5F3F3] rounded"
                />
                <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
            </div>
            <div className='mt-2 text-[16px] font-medium'>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 p-2 border border-[#F5F3F3] rounded"
                />
                <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
            </div>
            <div className='mt-2 text-[16px] font-medium'>
                
                <input
                    type="text"
                    name="phone_number"
                    placeholder="Enter PhoneNumber"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="mt-2 p-2 border border-[#F5F3F3] rounded"
                />
                <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
            </div>
            <div className='mt-2 text-[16px] font-medium'>
                
                <input
                    type="text"
                    name="detail"
                    placeholder="Enter Detail"
                    value={formData.detail}
                    onChange={handleChange}
                    className="mt-2 p-2 border border-[#F5F3F3] rounded"
                />
                <div className="border-b border-[2px] border-[#F5F3F3] mt-4"></div>
            </div>

            {/* Submit button */}
            <div className='w-full h-[50px] bg-[#FF6016] flex justify-center items-center mt-4 rounded'>
                <button
                    className='text-[22px] font-bold text-white'
                    onClick={handleSubmit}
                >
                    예약하기
                </button>
            </div>
        </div>
        </div>
    </div>
    
    
    </>
  )
}
