import Footer from "../components/Footer"
import HeaderComponent from "../components/Header"
import Post from "../components/Card"
import SideBarComponent from "../components/SideBarComponent"
import Posts from "../components/Posts"
export default function HomePage() {
    return (
        <div className="flex m-auto sm:w-[1440px] w-[375px]">
            <SideBarComponent />
            <div className="w-full flex flex-col">
                <HeaderComponent />
                <Posts />
                <Footer />
            </div>
        </div>
    )
}