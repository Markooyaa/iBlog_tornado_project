
import SideBar from "../components/SideBar";
import Content from "../components/Content";

import Category from "../components/Category";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileBottomBtns from "../components/MobileBottomBtns";
import HeaderMyProfile from "../components/HeaderMyProfile";
import Login_Create_footer from "../components/FooterDev";
import SidebarMobile from "../components/SideBarMobile";
export default function MyProfileLayout() {
  const [button, setButton] = useState(false);
  function click() {
    setButton(false);
  }
  
  return (
    <div className="flex-col sm:w-full relative h-screen">
      <HeaderMyProfile button={button} setButton={setButton} />
      
      <div
        onClick={click}
        className="main sm:w-full w-full sm:h-full h-full sm:pl-12 sm:pr-5 sm:pt-12 sm:flex">
        <SideBar />

        <Outlet />
      </div>
      
      <Login_Create_footer />
      
    </div>
  );
}
