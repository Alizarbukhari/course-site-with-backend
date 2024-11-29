
import { Comprehinsive_Type } from '../Components/type';

export default function Comprehensiv() {
    const comprehensiv_data:Comprehinsive_Type[]=[{
        id:1,
        name:"전체보기"
    },
    {
        id:2,
        name:"마감임박"
    },
    {
        id:3,
        name:"얼리버드"
    },
    {
        id:4,
        name:"인기순"
    },
    {
        id:5,
        name:"비즈니스"
    },
    {
        id:6,
        name:"컨텐츠"
    }]
  return (
    <>
    {comprehensiv_data.map((items:Comprehinsive_Type)=>
    <div key={items.id} className="w-[84px] h-[36px] bg-[#EBEBEB] hover:bg-[#296DEA] cursor-pointer flex items-center justify-center rounded-lg">
    {items.name}

    </div>
    )}
    
    </>
  )
}
