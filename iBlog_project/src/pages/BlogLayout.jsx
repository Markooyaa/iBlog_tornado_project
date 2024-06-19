import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import SideBarComponent from "../components/SideBarComponent";
import { useState } from "react";
import SidebarMobile from "../components/SideBarMobile";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";

export default function BlogLayout({ maxwidth }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="flex w-full">
        <div>
            <SideBarComponent showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className="w-full flex flex-col border-l-[1px] border-solid">
            <HeaderComponent />
            <SidebarMobile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <Outlet />
            <Footer />
            <MobileFooter className="bottom-bar sm:hidden flex h-[95px] justify-between items-start pt-[16px] pr-[20px] pl-[20px] border-t-[1px]" />
        </div>
    </div>

    )
}