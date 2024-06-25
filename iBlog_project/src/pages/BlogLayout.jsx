import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import SideBarComponent from "../components/SideBarComponent";
import { useState } from "react";
import SidebarMobile from "../components/SideBarMobile";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import MobileBottomBtns from "../components/MobileBottomBtns";

export default function BlogLayout() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
      <div className="flex w-full">
        <div>
          <SideBarComponent
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
        <div className="w-full flex flex-col border-l-[1px] border-solid">
          <HeaderComponent />
          <SidebarMobile
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <Outlet />
          <Footer />
          <div className="sticky bottom-0 z-[100]">
            <MobileBottomBtns />
          </div>
        </div>
      </div>
    );
}