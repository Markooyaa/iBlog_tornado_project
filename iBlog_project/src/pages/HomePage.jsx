import { useState } from "react"
import Login_Create_footer from "../components/FooterDev"
import Login_Create_header from "../components/HeaderDev"
import SideBarComponent from "../components/SideBarComponent"
import { LoginPage } from "./login_page"
import { Create1 } from "./Create_account"
import { Change_Password } from "./Change_password"
export default function HomePage() {
    const [page, setPage] = useState("login")
    return (
        <div>
           {page == "login" && <LoginPage  setPage={setPage} />}
           {page == "register" && <Create1  setPage={setPage}/>}
           {page == "changePassword" && <Change_Password/>}
        </div>
    )
}