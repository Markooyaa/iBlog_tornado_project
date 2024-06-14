import Footer from "../components/Footer";
import HeaderComponent from "../components/Header";
import MobileFooter from "../components/MobileFooter";
import PostDetailComponent from "../components/PostDetailComponent";
import SideBarComponent from "../components/SideBarComponent";
import SidebarMobile from "../components/SideBarMobile";
import { useState } from "react";

export default function PostDetail(){
    const [showSidebar, setShowSidebar] = useState(false);

    return(
        <div className="flex m-auto sm:w-[1440px] w-[375px] relative">
            <SideBarComponent  showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className="w-full flex flex-col sm:border-l-[1px] sm:border-solid">
                <HeaderComponent />
                <SidebarMobile showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <PostDetailComponent category='Lifestyle' title='Hobby' postname='Theme Installation'/>
                <Footer />
                <MobileFooter class='bottom-bar sm:hidden flex h-[95px] justify-between items-start pt-[16px] pr-[20px] pl-[20px] border-t-[1px]' />
            </div>
        </div>
    )
}