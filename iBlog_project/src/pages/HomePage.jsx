
import MainPage from "../components/MainPage"

import { useState } from "react";
export default function HomePage() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="flex w-full">

            <div className="w-full flex flex-col border-l-[1px] border-solid">


                <MainPage />
            </div>
        </div>
    )
}
