import { cardsData } from "../data/data";
import { Card } from "./Card"

export default function OthersPosts({categoryid}){
    const List = cardsData.filter(cardsData => cardsData.categoryid === categoryid);
    return(
        <div className="flex flex-col items-start gap-[20px]">
            <div className="border-b-[1px] w-full">
                <div className="w-[150px] h-[40px] hidden sm:flex items-center justify-center gap-[10px] border-b-[2px] border-orange-500">
                    <p className="text-[18px] font-bold">
                    Постууд
                    </p>
                </div>
                <div className="sm:hidden flex font-bold px-[20px] py-[10px] gap-[10px] items-center h-[40px] border-b-[2px] border-orange-500">
                    Постууд
                </div>
            </div>
            <div className="flex gap-[8px] sm:gap-[22px] flex-wrap px-[20px] justify-center">
                {List &&
                    List.map((data, index)=>{
                        return(
                            <Card key={index}
                            id={data.id}
                            url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile} 
                                    category={data.category}
                                    categoryid={data.id} />
                        )
                    })
                    }
            </div>
        </div>
    )
}