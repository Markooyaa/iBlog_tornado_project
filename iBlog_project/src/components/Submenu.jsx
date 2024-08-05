import { useState } from "react";
import { BiDownArrow, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import { Link } from "react-router-dom";


export function Submenu(props) {
    const [subnav, setsubnav] = useState(false)

    function showSubnav() {
        
        if(props.children){
            setsubnav(!subnav)
        }
    }
    return (
        <div className="mb-[40px]">
            <Link to={`${props.path}`} onClick={showSubnav} className="text-[10px] mb-[12px] flex items-center justify-between w-full">
                <div className="text-[14px] font-semibold">{props.title}</div>
               
                {props.children && subnav? <BiSolidUpArrow />:props.children? <BiSolidDownArrow />:null}
            </Link>
            
            {subnav && props.children.map((item, index) => {
                return (
                    <Link to={`${item.path}`} onClick={props.tap }   key={index} className="m-0  ">
                        <div className="px-[16px] py-[8px] capitalizetext-[14px] w-full h-full m-[12px]  hover:bg-[#E86B02] hover:text-white">
                        <div className=" text-[14px]">{item.name}</div>
                        </div>
                       
                    </Link>
                )
            })}
        </div>


    )
}