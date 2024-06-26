import { useState } from "react";
import Posts from "./Posts";

export default function MainPage() {
    const [hide, setHide] = useState(false)
    function Hide() {
        setHide(!hide)
    }
    
    return (
        <div className="inline-flex flex-col sm:items-center sm:justify-center gap-[16px] sm:p-[30px] items-start w-full">
            <Posts category='lifestyle' />
            <Posts category='technology' />
            <Posts category='health' />

            {hide==false?
            <button onClick={Hide} className="hidden sm:inline-flex px-[20px] py-[12px] justify-center items-center gap-[12px] border-[1px] rounded-[10px]  ">Цааш унших</button>
            :null

            }
            {hide==true ? 
            <div>
                <Posts category='sport'/>
                <Posts category='entertainment'/>
            </div>
            :null
        }
        
        </div>
    )
}