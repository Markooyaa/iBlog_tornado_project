import HeaderComponent from "../components/Header";
import LikedPosts from "../components/LikedPosts";
import SideBar from "../components/SideBar";

export default function LikedPost(){
    return(
        <div>
            <HeaderComponent button={button} setButton={setButton} />
            <div onClick={click}
                className="main w-full sm:h-[710px] h-full sm:px-12 sm:pt-12 sm:flex">
                <SideBar />
                <LikedPosts />
            </div>
        </div>
    )
}