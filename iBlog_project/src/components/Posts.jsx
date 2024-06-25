import { Card } from "./Card"
import { cardsData } from "../data/data"



export default function Posts(props) {
    const List = cardsData.filter(cardsData => cardsData.category === props.category);

    return (
        <div className="flex flex-col flex-wrap gap-[16px]">
            <div className="flex sm:justify-between">
                <h2 className="uppercase font-bold flex items-center gap-[10px] px-[18px] py-[11px] text-[18px] leading-[24px] justify-center">
                    {props.category}
                </h2>
                <button className="text-gray-600 hidden sm:flex items-center justify-end gap-[11px] px-[14px] py-0 text-center leading-[29px]">
                    Бүгд
                </button>
            </div>
            <div className="flex sm:justify-end items-center flex-wrap w-full overflow-x-scroll pb-2">
                <div className="flex gap-[8px] sm:gap-[22px] flex-wrap px-[20px]">
                    {List &&
                        List.map((data, index) => {
                            if (index < 8) {
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
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

