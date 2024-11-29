import Image from 'next/image';
import { cardData } from './type';

export default function HomeCards() {
    const cardDataArray: cardData[] = [
        {
            img: "/images/home card images/card1.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
        
        {
            img: "/images/home card images/card2.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
        {
            img: "/images/home card images/card3.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
        {
            img: "/images/home card images/card4.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
        
        {
            img: "/images/home card images/card1.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
        {
            img: "/images/home card images/card3.png",
            title: "Jung Seung-hwan - CEO of Egg Seoul",
            dic: "Conversation makes a witty person, writing makes an accurate person, and reading makes a complete person",
            name: "Gimpo Marina Bay",
            date: "First meeting: Wednesday, August 14th, 7:40 PM",
        },
    ];

    return (
        <>
            {cardDataArray.map((item ,index) => (
                <div key={index} className="w-[256px] mt-4">
                    <div className="md:w-[250px] w-[320px] h-[280px] border border-spacing-2 border-black rounded-lg overflow-hidden">
                        <Image
                            className="w-full h-full object-cover"
                            src={item.img}
                            height={280}
                            width={280}
                            alt={`${item.title} image`}
                        />
                    </div>
                    <div className="text-xl mt-2 font-semibold">{item.title}</div>
                    <div className="mt-1">{item.dic}</div>
                    <div className="text-[#FF6016] mt-1">{item.name}</div>
                    <div className="mt-1">{item.date}</div>
                </div>
            ))}
        </>
    );
}
