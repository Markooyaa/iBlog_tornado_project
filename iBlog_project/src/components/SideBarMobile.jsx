
import { Link } from "react-router-dom"
import SideBarComponent from "./SideBarComponent"
import { useState } from "react";
import { Logo } from "./Logo";
import { menus } from "../data/data";
import { Submenu } from "./Submenu";

export default function SidebarMobile() {
    const [exit, setexit] = useState(false)

    function Exit() {
        setexit(!exit)
    }


    
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <header className="w-full max-sm:flex hidden">
            <SideBar  showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className={showSidebar ? "w-full h-full  " : ""}>
            {showSidebar && <div onClick={() => setShowSidebar(false)} className="w-full h-full opacity-80 bg-slate-800 z-10 fixed top-0 left-0 sm:w-0 flex"></div>}
            <section className={showSidebar ? "flex" : "hidden sm:inline-flex  flex-col items-start gap-[10px] px-[49px] py-[40px]"}>
                <div className={showSidebar ? "fixed   left-0 flex flex-col  w-[250px]  bg-white z-20 sm:pt-[40px] px-[20px] sm:w-0 h-full" : "flex flex-col gap-[32px] w-[250px]"}>
                 
                  
                    <button className={showSidebar ? "flex mb-[45px] mt-[40px]" : "hidden"} onClick={() => setShowSidebar(false)}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <div className=''>{menus.map((item,index)=>{
                        return <Submenu path={item.path} title={item.title} children={item.children} key={index}/>
                    })}</div>
                    <div className={showSidebar ? "flex flex-col justify-end pb-[50px] h-full" : "hidden w-[245px] h-[42px] px-[15px] items-center gap-[5px]"}>
                        <button onClick={Exit} className="logout   flex w-[250px] h-[42px]  items-center gap-[5px] pt-[150px] ">
                            <i className="fa-solid  fa-arrow-right-from-bracket text-[#E86B02]"></i>
                            <p>Гарах</p>
                        </button>
                    </div>
                    {exit? <div id="dialogContainer" class=" fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 " onClick={Exit}>
                            <div class="bg-white rounded-md p-4 flex flex-col justify-center w-[335px]">
                                
                                <div class="text-center flex justify-center">
                                    <div className="rounded-full bg-[#E86B02] p-[10px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M10 17.5L15 12.5L10 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 12.5H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <p class="font-[14px] w-[289px] text-center m-auto mb-[10px] text-black pt-[16px]"><b>Та системээс гарахдаа итгэлтэй байна уу?</b></p>

                                <div className="flex gap-[15px]">
                                    <Link to={'/login'} className="text-white bg-[#E86B02] justify-center lg:rounded-lg rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] w-[50%]   h-[50px] my-[12px]">
                                       <p className='text-center'>  Тийм</p>
                                    </Link>

                                    <button onClick={Exit} id="closeDialogButton" class="text-[#546371] bg-[#E2E8EE] lg:rounded-lg rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] w-[50%] h-[50px] my-[12px]" >Үгүй</button>
                                </div>


                            </div>
                        </div>:null}
                </div>

            </section>
        </div>
        </header>
    )
}

function SideBar({showSidebar, setShowSidebar}) {
    

    return (
        <div className="flex justify-between w-full ">
            <header className="w-full h-[74px] px-[16px] flex justify-between items-center sm:hidden">
                <div onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="fa-solid fa-bars text-[#E86B02]"></i>
                    <SideBarComponent />
                </div>
               <Link to={'/'}>
               <div className="logo flex items-center">
                    <img src="/Images/Group.png"/>
                    <h2 className="text-orange-400 text-[30px] font-normal">iblog</h2>
                </div>
               </Link>
                <div>
                    <i className="fa-solid fa-magnifying-glass text-[#E86B02]"></i>
                </div>
            </header>
        </div>
    )
}