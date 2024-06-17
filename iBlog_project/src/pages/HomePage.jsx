import Footer from "../components/Footer"
import HeaderComponent from "../components/Header"
import MainPage from "../components/MainPage"
import SidebarMobile from "../components/SideBarMobile";
import SideBarComponent from "../components/SideBarComponent"
import MobileFooter from "../components/MobileFooter";
import { useState } from "react";
export default function HomePage() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="flex w-full">
            
            <div className="w-full flex flex-col border-l-[1px] border-solid">
                
                
                <MainPage />
            </div>
        </div>
    )
}