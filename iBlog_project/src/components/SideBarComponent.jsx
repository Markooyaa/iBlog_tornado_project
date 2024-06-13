export default function SideBarComponent() {
    return (
        <div>
            <section className="hidden sm:inline-flex flex-col items-start gap-[10px] px-[49px] py-[40px]">
                <div className="flex flex-col gap-[45px] w-[250px]">
                    <HomeLink url="/"/>
                    <div className="inline-flex flex-col gap-[32px]">
                        <div className="text-[14px] font-semibold pb-[12px]">
                            Lifestyle
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <SidebarLink url="hobby" title="Hobby"/>
                            <SidebarLink url="travel" title="Travel"/>
                            <SidebarLink url="food" title="Food&Beverage"/>
                            <SidebarLink url="home" title="Home and decor"/>
                        </div>
                    </div>
                    <div className="inline-flex flex-col gap-[32px]">
                        <div className="text-[14px] font-semibold pb-[12px]">
                            Sport
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <SidebarLink url="soccer" title="Soccer"/>
                            <SidebarLink url="volleyball" title="Volleyball"/>
                        </div>
                    </div>
                    <div className="text-[14px] font-semibold pb-[12px]">
                        Technology
                    </div>
                    <div className="text-[14px] font-semibold pb-[12px]">
                        Entertainment
                    </div>
                </div>
            </section>
        </div>
    )
}

function HomeLink({url}){
    return (
        <a href={url}>
            <div className="flex h-[46px] items-center flex-grow">
                <img src="/img/Group.png" alt="logo" className="w-[20px] h-[27px]"/>
                <h2 className="text-orange-400 text-3xl font-normal">iBlog</h2>
            </div>
        </a>
    )
}

function SidebarLink(props){
    return (
        <a href={props.url} className="text-[14px] px-[16px] py-[8px] hover:bg-orange-500 hover:text-white">{props.title}</a>
    )
}

/*function sideMenu() {
    const x = document.getElementById('sidemenu');
    if (x.style.display === 'flex') {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}*/