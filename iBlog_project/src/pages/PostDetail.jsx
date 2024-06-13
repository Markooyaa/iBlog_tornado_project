import Footer from "../components/Footer";
import HeaderComponent from "../components/Header";
import SideBarComponent from "../components/SideBarComponent";

export default function PostDetail(){
    return(
        <div className="flex m-auto sm:w-[1440px] w-[375px]">
            <SideBarComponent />
            <div className="w-full flex flex-col border-l-[1px] border-solid">
                <HeaderComponent />
                <Footer />
            </div>
        </div>
    )
}