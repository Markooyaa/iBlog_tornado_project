import HeaderMyProfile from "../components/HeaderMyProfile";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Note from "../components/Note";
import Category from "../components/Category";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileBottomBtns from "../components/MobileBottomBtns";
import MobileSaveButton from "../components/MobileSaveButton";
import { Link } from "react-router-dom";
export default function MyProfileLayout() {
  const [button, setButton] = useState(false);
  const [change, setChange] = useState(!true);

  function click() {
    setButton(false);
  }
  return (
    <div className="flex-col sm:w-full relative h-screen">
      <div className={change ? "sm:flex hidden" : ""}>
        <HeaderMyProfile button={button} setButton={setButton} />
      </div>
      <div
        onClick={click}
        className="main sm:w-full w-full sm:h-full  sm:px-12 sm:pt-12 sm:flex">
        <Link
          to="/profile/edit"
          onClick={() => setChange(true)}
          className={change ? "sm:flex hidden" : "sm:flex"}>
          <SideBar />
        </Link>
        <Outlet />
      </div>
      <div className="sm:flex hidden justify-center">
        <Footer />
      </div>
      <div className="absolute bottom-[94px] w-full px-[5%]">
        <MobileSaveButton />
      </div>
      <MobileBottomBtns />
    </div>
  );
}
