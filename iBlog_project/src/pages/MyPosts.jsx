import HeaderMyProfile from "../components/HeaderMyProfile";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Footer from "../components/Footer";
import SidebarMobile from "../components/SideBarMobile";
import SideBarComponent from "../components/SideBarComponent";
import MobileBottomBtns from "../components/MobileBottomBtns";
import MyPosted from "../components/MyPost";

export default function MyPosts() {
    const [button, setButton] = useState(false);
    function click() { setButton(false); }
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="flex-col sm:w-full">
            <div>
                <HeaderMyProfile button={button} setButton={setButton} />
                <SidebarMobile showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <div className="sm:hidden">
                    <SideBarComponent showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                </div>
            </div>
            <div
                onClick={click}
                className="w-full h-full sm:px-12 sm:pt-12 sm:flex pb-[30px] items-start gap-[30px]">
                <SideBar />
                <MyPosted categoryid={'hobby'} />
            </div>
            <div className="sm:flex hidden border-t-[1px] w-full">
                <Footer />
            </div>
            <MobileBottomBtns />
        </div>
    )
}