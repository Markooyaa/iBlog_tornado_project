import { Link, useParams } from "react-router-dom";
import { cardsData } from "../data/data";
import { Card } from "./Card";

export function Fullcategory(props){
    
    const params  = useParams()
    const blog = cardsData.filter(c => c.category == params.category)
    
    
    
    return(
        <div className="flex flex-col flex-wrap gap-[16px] sm:m-[30px] ">
        <div className="flex sm:justify-between">
            
             
                <div className="flex items-center gap-[5px] h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <Link to="/" className="text-[18px] text-gray-600">Нүүр хуудас</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] pr-[16px] py-10px]">
                    <b className="text-[18px] text-gray-600 capitalize">{params.category}</b>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
               
            </div>
        </div>
        <div className="flex max-sm:justify-center  items-center flex-wrap w-full pb-2 ">
            <div className="grid grid-cols-2 max-sm:justify-center sm:flex gap-[8px] sm:gap-[22px] flex-wrap ">
                {blog &&
                    blog.map((data, index) => {
                      
                            return (

                                <Card key={index}
                                    id={data.id}
                                    url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile}
                                    category={data.category}
                                    categoryid={data.categoryid} 
                                />)
                       
                    })
                }
            </div>
        </div>
    </div>
    )
}