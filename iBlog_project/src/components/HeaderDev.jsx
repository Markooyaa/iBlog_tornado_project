
import { Link,useNavigate } from "react-router-dom"
import { Logo } from "./Logo";
import { CiSearch } from "react-icons/ci";
export default function Login_Create_header({text}){
  const navigate = useNavigate();
    return (
        <header className="w-full  lg:border-b-[1px] flex items-center    h-[103px]">
        <div id="computer" className="w-full hidden lg:flex lg:logo  lg:h-[46px] lg:justify-between lg:mx-[50px] lg:items-center  ">
               <Logo></Logo>
                
                <div className="relative search w-[50%] ">
                    <input type="text" className="border rounded-2xl pl-4 pr-12 py-2 w-full h-[39px] focus:outline-none focus:border-blue-500" placeholder="Хайх"/>
                   
                    <CiSearch className={'w-[25px] h-[25px] absolute right-2 top-1/2 transform -translate-y-1/2  text-gray-400'}/>
                
                  </div>
                  <div className="Buttons">
                   <Link to='/createAccount' >
                   <button className="text-[#E86B02] border border-[#DCE3EA] rounded-[10px]  pl-4 pr-4 py-[10px]  mr-[10px] pr-[30px] pl-[30px]" >
                        Бүртгүүлэх
                    </button>  
                   </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                   <Link to='/login'>
                   <button className="text-white bg-[#E86B02] rounded-[10px]  pl-4 pr-4 py-[10px] pr-[30px] pl-[30px]" >
                        Нэвтрэх
                    </button>
                   </Link>
                  </div>
            </div>
         
          <div className="pl-[10px] lg:hidden flex  w-[100%] items-start">
            <button onClick={() => navigate(-1)}>
            <svg id="backButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute">
                <path d="M8.5002 12.8L14.2002 18.4C14.6002 18.8 15.2002 18.8 15.6002 18.4C16.0002 18 16.0002 17.4 15.6002 17L10.7002 12L15.6002 7.00005C16.0002 6.60005 16.0002 6.00005 15.6002 5.60005C15.4002 5.40005 15.2002 5.30005 14.9002 5.30005C14.6002 5.30005 14.4002 5.40005 14.2002 5.60005L8.5002 11.2C8.1002 11.7 8.1002 12.3 8.5002 12.8C8.5002 12.7 8.5002 12.7 8.5002 12.8Z" fill="#E86B02"/>
              </svg>
            </button>
            
              <p className="m-auto font-bold">
                {text}
            </p>
          </div>
    </header>
    )
}