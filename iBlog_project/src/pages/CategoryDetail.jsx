
import CategoryDetailComponent from "../components/CategoryDetailComponent"
import { useState } from "react"
import menus from "../data/data"
export default function CategoryDetail() {
    const [pathname, setPathName] = useState(window.location.pathname);
    
    return (
        <div className="flex m-auto sm:max-w-[1440px] w-[375px]">

            <div className="w-full flex flex-col border-l-[1px] border-solid">

                <CategoryDetailComponent category={menus.name} title={pathname} />

            </div>
        </div>
    )
}