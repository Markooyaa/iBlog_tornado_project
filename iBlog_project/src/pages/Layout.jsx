import { Outlet } from "react-router-dom";
import SidebarMobile from "../components/SideBarMobile";

export function Layout(){
    return(
      <div>
          <div className="max-sm:flex hidden w-full"><SidebarMobile/></div>
          <Outlet></Outlet>
      </div>
    )
}