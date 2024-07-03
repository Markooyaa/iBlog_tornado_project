
    
import { Card } from "./Card"
import { cardsData } from "../data/data"
import { Link, useParams } from "react-router-dom"


export default function CategoryDetailComponent() {
    const params = useParams()
  
   const List = cardsData.filter(cardsData=>cardsData.category===params.category && cardsData.categoryid==params.id);
    return (
        <div className="flex flex-col items-start sm:justify-center gap-[16px] sm:m-[30px] w-full">
            <div className="flex items-center gap-[5px] h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <Link to="/" className="text-[18px] text-gray-600">Нүүр хуудас</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] pr-[16px] py-10px]">
                    <Link to={`/${params.category}`} className="text-[18px] text-gray-600 capitalize">{params.category}</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px]  py-10px]">
                    <p className="text-[18px] font-bold text-gray-600 capitalize">{params.id}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                
            </div>
            
            
            <div className="flex max-sm:justify-center  items-center flex-wrap w-full pb-2 ">
            <div className="grid grid-cols-2 max-sm:justify-center sm:flex gap-[8px] sm:gap-[22px] flex-wrap ">
                    {List &&
                        List.map((data, index) => {
                            return (
                                <Card key={index}
                                id={data.id}
                                    url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile} 
                                    category={params.category}
                                    categoryid={params.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}