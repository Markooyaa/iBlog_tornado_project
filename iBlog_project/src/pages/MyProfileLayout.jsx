import HeaderMyProfile from "../components/HeaderMyProfile";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Note from "../components/Note";
import Category from "../components/Category";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileBottomBtns from "../components/MobileBottomBtns";
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
        className="main sm:w-full w-full sm:h-full h-full sm:px-12 sm:pt-12 sm:flex">
        <SideBar />

        <Outlet />
      </div>
      <div className="sm:flex hidden justify-center">
        <Footer />
      </div>
    </div>
  );
}
