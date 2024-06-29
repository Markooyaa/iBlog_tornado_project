import { Link } from 'react-router-dom'
import { menus } from '../data/data'
import { Logo } from './Logo'



export default function SideBarComponent({ showSidebar, setShowSidebar }) {

    const buildMenus = menus &&
        menus.map((menu, idx) => {
            return (
                <div key={idx} className="inline-flex flex-col gap-[32px]">
                    <div className="text-[14px] font-semibold pb-[12px]">
                        {menu.title}
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        {menu.children && menu.children.map(
                            (c, index) => {
                                return (
                                    <div key={index} onClick={() => setShowSidebar(false)} className="flex flex-col gap-[8px]">
                                        <SidebarLink key={index} url={c.path} title={c.name} />
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            )
        })

    return (
        <div className={showSidebar ? "fixed bottom-0 top-0 left-0" : ""}>
            {showSidebar && <div onClick={() => setShowSidebar(false)} className="w-full h-full opacity-80 bg-slate-800 z-10 fixed top-0 left-0 sm:w-0 flex"></div>}
            <section className={showSidebar ? "flex" : "hidden sm:inline-flex  flex-col items-start gap-[10px] px-[49px] py-[40px]"}>
                <div className={showSidebar ? "absolute flex flex-col gap-[45px] bg-white z-20 sm:pt-[40px] px-[20px] sm:w-0 h-full" : "flex flex-col gap-[45px] w-[250px]"}>
                  <Logo></Logo>
                    <button className={showSidebar ? "flex" : "hidden"} onClick={() => setShowSidebar(false)}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    {buildMenus}
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
                <img src='/Images/Group.png' className="w-[20px] h-[27px]" />
                <h2 className="text-orange-400 text-3xl font-normal">iBlog</h2>
            </div>
        </Link>
    )
}

function SidebarLink(props) {
    return (
        <Link to={props.url} className="capitalizetext-[14px] px-[16px] py-[8px] hover:bg-orange-500 hover:text-white">{props.title}</Link>
    )
}
