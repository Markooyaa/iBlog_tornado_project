// import Images from ".public/Images";
import Note from "./Note.jsx";

export default function Content() { 
    
    return(
         <div className="content sm:w-3/4  border-5 border-orange-600 ">
                <div className="gategories sm:w-full w-full h-[40px] border-b-2 sm:border-slate-200 border-slate-200 border-b-[#E86B02]">
                    <div className="gategories-inside sm:hidden flex  justify-center h-[40px] w-[150px] p-1 border-b-2 border-[#E86B02] font-bold text-[18px]">
                    <p>Постууд</p>
                    </div>
                    <div className="gategories-inside  justify-center h-[40px] w-[150px] p-1 border-b-2 border-[#E86B02] font-bold text-[18px] sm:flex hidden">
                    <p>Бүгд</p>
                    </div>
                </div>
                <div src={Note}></div>
                </div>
    )

};