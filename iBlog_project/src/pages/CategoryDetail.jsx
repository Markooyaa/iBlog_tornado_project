import SideBarComponent from "../components/SideBarComponent"
import HeaderComponent from "../components/Header"
import Footer from "../components/Footer"
import CategoryDetailComponent from "../components/CategoryDetailComponent"
import { useState } from "react"
export default function CategoryDetail() {
    const [pathname, setPathName] = useState(window.location.pathname)
    return (
        <div className="flex m-auto sm:w-[1440px] w-[375px]">
            <SideBarComponent />
            <div className="w-full flex flex-col border-l-[1px] border-solid">
                <HeaderComponent />
                <CategoryDetailComponent category='Lifestyle' title={pathname}/>
                <Footer />
            </div>
        </div>
    )
}