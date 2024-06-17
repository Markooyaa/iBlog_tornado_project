import { useState } from "react"
import Login_Create_footer from "../components/FooterDev"
import Login_Create_header from "../components/HeaderDev"
import SideBarComponent from "../components/SideBarComponent"
import { LoginPage } from "./LoginPage"
import { CreateAccount } from "./CreateAccount"
import { ChangePassword } from "./ChangePassword"
export default function HomePage() {
    const [page, setPage] = useState("login")
    return (
        <div>
           {page == "login" && <LoginPage  setPage={setPage} />}
           {page == "register" && <CreateAccount  setPage={setPage}/>}
           {page == "changePassword" && <ChangePassword/>}
        </div>
    )
}