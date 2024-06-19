import Header from "../components/Header";
import SideBar from "../components/SideBar";
import CategoryInside from "../components/CategoryInside";
import SubtitleFilledPost from "../components/ContentTitleFilledPost";
import Footer from "../components/Footer";
import MobilePostButton from "../components/MobilePostButton";
import MobileBottomBtns from "../components/MobileBottomBtns";
import ImgSectionFilledPost from "../components/ImgSectionFilledPost";
import CategoryFilledPost from "../components/CategoryFilledPost";
import MainPartFilledPost from "../components/MainPartFilledPost";
import MainPostButton from "../components/MainPostButton";
import { useState } from "react";
export default function FilledPost() {
const [button, setButton] = useState(false)

function Click(){
  setButton(!false)
}

  return (
    <div>
      <Header button={button} setButton={setButton}/>
      <div onClick={() => setButton(false)} className="main w-full sm:h-[750px]  h-full sm:px-12 sm:pt-12 sm:flex ">
        <div className="sidebar w-1/4 sm:h-full sm:flex hidden  ">
          <SideBar />
        </div>
        <div className="content sm:w-3/4 h-full relative sm:pl-[155px]  flex-col flex items-center">
          <div className="categories sm: flex items-center sm:w-3/4 w-full sm:h-[40px] h-full border-b-2 border-slate-200 ">
            <CategoryInside />
          </div>
          <div className="sm:w-3/4 w-full   sm:px-0 px-[5%] ">
            <CategoryFilledPost />
            <div className="post my-[10px]">
              <ImgSectionFilledPost />
              <SubtitleFilledPost />
              <MainPartFilledPost />
              <MobilePostButton />
              <MainPostButton />
            </div>
          </div>
        </div>
      </div>
      <MobileBottomBtns />
      <Footer />
    </div>
  );
}
