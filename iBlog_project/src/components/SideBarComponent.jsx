import {Link} from 'react-router-dom'

export default function SideBarComponent({ showSidebar, setShowSidebar }) {
    return (
        <div className={showSidebar && "fixed bottom-0 top-0 left-0"}>
            {showSidebar && <div onClick={() => setShowSidebar(false)} className="w-full h-full opacity-80 bg-slate-800 z-10 fixed top-0 left-0 sm:w-0 flex"></div>}
            <section className={showSidebar ? "flex" : "hidden sm:inline-flex  flex-col items-start gap-[10px] px-[49px] py-[40px]"}>
                <div className={showSidebar ? "absolute flex flex-col gap-[45px] bg-white z-20 sm:pt-[40px] px-[20px] sm:w-0 h-full" : "flex flex-col gap-[45px] w-[250px]"}>
                    <HomeLink url="/" />
                    <div className="inline-flex flex-col gap-[32px]">
                        <button className={showSidebar ? "flex" : "hidden"} onClick={() => setShowSidebar(false)}>
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </button>
                        <div className="text-[14px] font-semibold pb-[12px]">
                            Lifestyle
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <SidebarLink url="/hobby" title="Hobby" />
                            <SidebarLink url="/travel" title="Travel" />
                            <SidebarLink url="/food" title="Food&Beverage" />
                            <SidebarLink url="/home" title="Home&Decor" /> 
                        </div>
                    </div>
                    <div className="inline-flex flex-col gap-[32px]">
                        <div className="text-[14px] font-semibold pb-[12px]">
                            Sport
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <SidebarLink url="/soccer" title="Soccer" />
                            <SidebarLink url="/volleyball" title="Volleyball" />
                        </div>
                    </div>
                    <div className="text-[14px] font-semibold pb-[12px]">
                        Technology
                    </div>
                    <div className="text-[14px] font-semibold pb-[12px]">
                        Entertainment
                    </div>
                    <div className={showSidebar ? "flex" : "hidden w-[245px] h-[42px] px-[15px] items-center gap-[5px]"}>
                        <button className="logout flex w-[250px] h-[42px] px-[15px] items-center gap-[5px] pt-[150px] pb-[30px]">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <p>Гарах</p>
                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}

function HomeLink({ url, showSidebar, setShowSidebar }) {
    return (
        <Link to={url}>
            <div className={showSidebar ? "flex" : "hidden sm:flex h-[46px] items-center flex-grow"}>
                <img src="img/Group.png" alt="logo" className="w-[20px] h-[27px]" />
                <h2 className="text-orange-400 text-3xl font-normal">iBlog</h2>
            </div>
        </Link>
    )
}

function SidebarLink(props) {
    return (
        <Link to={props.url} className="text-[14px] px-[16px] py-[8px] hover:bg-orange-500 hover:text-white">{props.title}</Link>
    )
}

