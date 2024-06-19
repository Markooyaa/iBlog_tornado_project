import SideBarComponent from "../components/SideBarComponent"
import HeaderComponent from "../components/Header"
import Footer from "../components/Footer"
import CategoryDetailComponent from "../components/CategoryDetailComponent"
import { useState } from "react"
export default function CategoryDetail() {
    const [pathname, setPathName] = useState(window.location.pathname)
    return (
        <div className="flex m-auto sm:max-w-[1440px] w-[375px]">
            
            <div className="w-full flex flex-col border-l-[1px] border-solid">
                
                <CategoryDetailComponent category='Lifestyle' title={pathname}/>
                
            </div>
        </div>
    )
}