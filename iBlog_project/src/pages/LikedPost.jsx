import HeaderMyProfile from "../components/HeaderMyProfile";
import LikedPosts from "../components/LikedPosts";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Footer from "../components/Footer";

export default function LikedPost(){
    const [button, setButton] = useState(false);
    function click() {
    setButton(false);
  }
    return(
        <div  className="flex-col sm:w-full relative h-screen">
            <HeaderMyProfile  button={button} setButton={setButton} />
            <div onClick={click}
                className="main w-full sm:h-[710px] h-full sm:px-12 sm:pt-12 sm:flex">
                <SideBar />
                <LikedPosts />
            </div>
            <div className="sm:flex hidden justify-center">
                <Footer />
            </div>
        </div>
    )
}