import SideBarComponent from "./SideBarComponent";

export default function SidebarMobile({ showSidebar, setShowSidebar }) {
  return (
    <header>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header>
  );
}

function SideBar({ showSidebar, setShowSidebar }) {
  return (
    <div>
      <header className="w-full h-[74px] px-[16px] flex justify-between items-center sm:hidden">
        <div onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fa-solid fa-bars"></i>
          <SideBarComponent />
        </div>
        <div className="logo flex items-center">
          <img src="Images/Group.png" />
          <h2 className="text-orange-400 text-[30px] font-normal">iblog</h2>
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
    </div>
  );
}
