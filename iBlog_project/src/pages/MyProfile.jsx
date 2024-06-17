import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Content from "../components/Content"
import Note from "../components/Note";
import Category from "../components/Category";
import { useState } from "react";
export default function MyProfile(){
  const [button, setButton] = useState(true);
  function click(){
    setButton(false)
  }
    return (
      <div>
        <Header button={button} setButton={setButton} />
        <div onClick={click} className="main w-full sm:h-[710px] h-full sm:px-12 sm:pt-12 sm:flex">
          <SideBar />
          
            
            <Content />
            
          
        </div>
      </div>
    );
}