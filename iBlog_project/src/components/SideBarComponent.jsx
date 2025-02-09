import { Link } from 'react-router-dom'
import { menus } from '../data/data'
import { Logo } from './Logo'
import { useState } from 'react'
import { Submenu } from './Submenu'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'



export default function SideBarComponent({ showSidebar, setShowSidebar }) {
    const [exit, setexit] = useState(false)

    function Exit() {
        setexit(!exit)
    }
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <div className={showSidebar ? "fixed bottom-0 top-0 left-0" : ""}>
            {showSidebar && <div onClick={() => setShowSidebar(false)} className="w-full h-full opacity-80 bg-slate-800 z-10 fixed top-0 left-0 sm:w-0 flex"></div>}
            <section className={showSidebar ? "flex" : "hidden sm:inline-flex  flex-col items-start gap-[10px] px-[50px] py-[33.1px] w-[20%]"}>
                <div className={showSidebar ? "absolute flex flex-col   bg-white z-20 sm:pt-[40px] px-[20px] sm:w-0 h-full" : "flex flex-col gap-[32px] w-[250px]"}>
                 
                  <div  className={showSidebar ? "hidden" : "flex"}> <Logo></Logo></div>
                    <button className={showSidebar ? "flex mb-[45px] mt-[40px]" : "hidden"} onClick={() => setShowSidebar(false)}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <div className=''>{menus.map((item,index)=>{
                        return <Submenu path={item.path} title={item.title} children={item.children} key={index}/>
                    })}</div>
                    
                </div>

            </section>
        </div>
    )
}

