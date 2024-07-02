import { useState } from "react";
import { BiDownArrow, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { Link } from "react-router-dom";


export function Submenu(item) {
    const [subnav, setsubnav] = useState(false)

    function showSubnav() {
        setsubnav(!subnav)
    }
    return (
        <div className="mb-[40px]">
            <Link to={`${item.path}`} onClick={item.children && showSubnav}  className="text-[10px] mb-[12px] flex items-center justify-between w-full">
                <div className="text-[14px] font-semibold">{item.title}</div>
               
                {item.children && subnav? <BiSolidDownArrow/>:item.children?<BiSolidUpArrow/>:null}
            </Link>
            
            {subnav && item.children.map((item, index) => {
                return (
                    <Link to={`${item.path}`} key={index} className="m-0  ">
                        <div className="px-[16px] py-[8px] capitalizetext-[14px] w-full h-full m-[12px]  hover:bg-orange-500 hover:text-white">
                        <div className=" text-[14px]">{item.name}</div>
                        </div>
                       
                    </Link>
                )
            })}
        </div>


    )
}