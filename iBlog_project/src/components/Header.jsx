import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
            <div className="hidden h-[103px] max-w-full sm:flex px-12 py-10 justify-between items-center    border-b-[1px]">
                  <div className="relative search w-[50%]">
                    <input type="text" className="border w-full rounded-2xl pl-4 pr-12 py-2  h-[39px] focus:outline-none focus:border-blue-500" placeholder="Хайх"/>
                   
                    <CiSearch className={'w-[25px] h-[25px] absolute right-2 top-1/2 transform -translate-y-1/2  text-gray-400'}/>
                
                  </div>
                <div className="flex justify-end items-start ">
                <Link to='/createAccount' >
                   <button className="text-[#E86B02] border border-[#DCE3EA] rounded-[10px]  py-[10px]  mr-[10px] pr-[30px] pl-[30px]" >
                        Бүртгүүлэх
                    </button>  
                   </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                   <Link to='/login'>
                   <button className="text-white bg-[#E86B02] rounded-[10px]   py-[10px] pr-[30px] pl-[30px]" >
                        Нэвтрэх
                    </button>
                   </Link>
                </div>
           
            
        </div>
    )
}

function Button(props) {
  return (
    <div className={props.className}>
      {props.name}
    </div>
  );
}
