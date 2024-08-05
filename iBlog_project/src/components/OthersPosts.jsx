import { person } from "../data/data";
import data from "../data/data.json";
import CardWithCrossLine from "./CardWithCrossLine";

export default function OthersPosts({userid,indexcoll}){
    
    const List = data.filter(data => data.userid === userid);
    const ppl=person.filter(data => data.userid === userid)
    console.log(ppl)
    return(
        <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="border-b-[1px] w-full">
                <div className="w-full hidden sm:flex items-center pl-10 gap-[10px] border-b-[2px] border-orange-500">
                    <p className=" text-[18px] text-start font-bold">
                    Постууд
                    </p>
                </div>
                <div className="sm:hidden flex font-bold px-[20px] py-[10px] gap-[10px] items-center h-[40px] border-b-[2px] border-orange-500">
                    Постууд
                </div>
            </div>
            

            <div className="flex max-sm:justify-center  items-center flex-wrap w-full  ">
            <div className="max-sm:justify-center flex gap-[8px] sm:gap-[22px] flex-wrap ">
                {List &&
                    List.map((data, index) => {
                     

                            return (

                                <CardWithCrossLine key={index}
                                    id={data.id}
                                    url={data.url}
                                    title={data.title}
                                    username={ppl[0].username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={ppl[0].profile}
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