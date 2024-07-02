import { Link } from 'react-router-dom'
import { menus } from '../data/data'
import { Logo } from './Logo'
import { useState } from 'react'
import { Submenu } from './Submenu'



export default function SideBarComponent({ showSidebar, setShowSidebar }) {
    const [exit, setexit] = useState(false)

    function Exit() {
        setexit(!exit)
    }
    // const buildMenus = menus &&
    //     menus.map((menu, idx) => {
    //         return (
    //             <div key={idx} className="inline-flex flex-col ">
    //                 <Link onClick={`/${menu.name}` && Hide} to={`/${menu.name}`} className="text-[14px] font-semibold pb-[12px]">
    //                     {menu.title}
    //                 </Link>
    //                 {hide && <div className="flex flex-col gap-[8px]">
    //                     {menu.children && menu.children.map(
    //                         (c, index) => {
    //                             return (
    //                                 <div key={index} onClick={() => setShowSidebar(false)} className="flex flex-col gap-[8px]">
    //                                     <SidebarLink key={index} url={c.path} title={c.name} />
    //                                 </div>
    //                             )
    //                         }
    //                     )}
    //                 </div>}
    //             </div>
    //         )
    //     })


    return (
        <div className={showSidebar ? "fixed bottom-0 top-0 left-0" : ""}>
            {showSidebar && <div onClick={() => setShowSidebar(false)} className="w-full h-full opacity-80 bg-slate-800 z-10 fixed top-0 left-0 sm:w-0 flex"></div>}
            <section className={showSidebar ? "flex" : "hidden sm:inline-flex  flex-col items-start gap-[10px] px-[49px] py-[40px]"}>
                <div className={showSidebar ? "absolute flex flex-col   bg-white z-20 sm:pt-[40px] px-[20px] sm:w-0 h-full" : "flex flex-col gap-[32px] w-[250px]"}>
                 
                  <div  className={showSidebar ? "hidden" : "flex"}> <Logo></Logo></div>
                    <button className={showSidebar ? "flex mb-[45px] mt-[40px]" : "hidden"} onClick={() => setShowSidebar(false)}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <div className=''>{menus.map((item,index)=>{
                        return <Submenu path={item.path} title={item.title} children={item.children} key={index}/>
                    })}</div>
                    <div className={showSidebar ? "flex flex-col justify-end h-full" : "hidden w-[245px] h-[42px] px-[15px] items-center gap-[5px]"}>
                        <button onClick={Exit} className="logout flex w-[250px] h-[42px] mb-[15px] items-center gap-[5px] pt-[150px] pb-[30px]">
                            <i className="fa-solid fa-arrow-right-from-bracket text-[#E86B02]"></i>
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
    )
}

function HomeLink({ url, showSidebar, setShowSidebar }) {
    return (
        <Link to={url}>
            <div className={showSidebar ? "flex" : "hidden sm:flex h-[46px] items-center flex-grow"}>
                <img src='/Images/Group.png' className="w-[20px] h-[27px]" />
                <h2 className="text-orange-400 text-3xl font-normal">iBlog</h2>
            </div>
        </Link>
    )
}

function SidebarLink(props) {
    return (
        <Link to={props.url} className="capitalizetext-[14px] px-[16px] py-[8px] hover:bg-orange-500 hover:text-white">{props.title}</Link>
    )
}
