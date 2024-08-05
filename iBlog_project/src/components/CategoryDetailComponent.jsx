
    
import { Card } from "./Card"

import { Link, useParams } from "react-router-dom"

import data from "../data/data.json"
import { useEffect, useState } from "react"
import { person } from "../data/data"


export default function CategoryDetailComponent() {
    const params = useParams()
//     const [items, setItems] = useState([]);

//   useEffect(() => { 
//     setItems(data);
//   }, []);

//   const deleteItem = (id) => {
//     const newItems = items.filter((item) => item.id !== id);
//     setItems(newItems);
    
//   };

  
   const List = data.filter(data=>data.category===params.category && data.categoryid==params.id);
   const [liked, setLiked] = useState(false);

    const handleClick = () => {
      setLiked(!liked);
    };

    return (
        <div className="flex flex-col items-start sm:justify-center gap-[16px] sm:m-[30px] w-full">
            <div className="flex items-center gap-[5px] h-[40px] sm:h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <Link to="/" className="sm:text-[18px] text-[14px] text-gray-600">Нүүр хуудас</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] pr-[16px] py-10px]">
                    <Link to={`/${params.category}`} className="sm:text-[18px] text-[14px] text-gray-600 capitalize">{params.category}</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px]  py-10px]">
                    <p className="sm:text-[18px] text-[14px] font-bold text-gray-600 capitalize">{params.id}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                
            </div>
            
            
            <div className="flex max-sm:justify-center  items-center flex-wrap w-full pb-2 ">
            <div className="grid grid-cols-2 max-sm:justify-center sm:flex gap-[8px] sm:gap-[22px] flex-wrap ">
                    {List &&
                        List.map((data, index) => {
                            const ppl = person.filter(p => p.userid == data.userid);
                            
                            return (
                                <Card key={index}
                                id={data.id}
                                    url={data.url}
                                    title={data.title}
                                    username={ppl[0].username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={ppl[0].profile} 
                                    category={params.category}
                                    categoryid={params.id}
                                    liked={data.liked}
                                    
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}