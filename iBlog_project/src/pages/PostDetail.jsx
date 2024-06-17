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
        <div className="flex m-auto sm:max-w-[1440px] w-[375px] relative">
            
            <div className="w-full flex flex-col sm:border-l-[1px] sm:border-solid">
                
                
                <PostDetailComponent category='Lifestyle' title='Hobby' postname='Theme Installation'/>
                
            </div>
        </div>
    )
}