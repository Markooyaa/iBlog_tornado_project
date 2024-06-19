import { Link } from "react-router-dom"
import { cardsData } from "../data/data"
import { Card } from "./Card"

export default function CategoryDetailComponent(props) {
    
    return (
        <div className="flex flex-col items-start sm:justify-center gap-[16px] sm:m-[30px] w-full">
            <div className="hidden sm:flex items-center gap-[5px] h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <Link to="/" className="text-[18px] text-gray-600">Нүүр хуудас</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <p className="text-[18px] text-gray-600">{props.category}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <p className="text-[18px] font-bold text-gray-600">{props.title}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className="sm:hidden flex items-center px-[20px] py-[12px] gap-[10px]">
                <p className="leading-[21px] font-semibold">LIFESTYLE</p>
            </div>
            <div
                className="title hidden sm:flex items-center justify-center w-[150px] h-[40px] border-b-[2px] border-orange-500">
                <p className="text-[18px] font-bold">{props.title}</p>
            </div>
            <div className="flex sm:justify-end items-center flex-wrap w-full pb-2">
                <div className="flex gap-[8px] sm:gap-[22px] flex-wrap px-[20px]">
                    {cardsData &&
                        cardsData.map((data, index) => {
                            return (
                                <Card key={index}
                                id={data.id}
                                    url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}