import { useState } from "react";
import { Full_colored_button, Fb_button, Gmail_button } from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import { GreyLine } from "../components/Grey_Space_Line";
import Login_Create_header from "../components/HeaderDev";
import { Input, PasswordInput } from "../components/Input";



export function Create1({setPage}) {
    return (
        <>
            <Login_Create_header text={''}></Login_Create_header>
            <div class="container flex-col flex justify-center items-center lg:pt-[180px] lg:pb-[270px] m-auto   lg:[850px]">
                <div class="logo lg:hidden flex flex-col">
                    <div class=" w-[100%] justify-center flex items-center  ">
                        <img src="../Group.png" alt="logo" class="w-[20px] h-[27px] " />
                        <h2 class="text-orange-400 text-3xl font-normal"><span class="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div class="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <div class="  lg:w-[478px] w-[335px] h-[50px] m-0 flex items-end"> <p class="text-[#E86B02] text-start  lg:text-[20px] text-[16px]">Бүртгүүлэх</p></div>
                <form action="./create2.html" className="flex flex-col">
                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />
                    <Full_colored_button text={'Бүртгүүлэх'} />

                </form>
                <Gmail_button />
                <Fb_button />
                <GreyLine text={'Та бүртгэлтэй юу?'}></GreyLine>
                <div class="burtguulh">
                    <button class="text-black border-[#E86B02] border-[1.5px] lg:rounded-lg rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[10px] " onClick={()=> setPage("login")}>
                        <p class=" flex items-center justify-center ">  Нэвтрэх</p>
                    </button>
                </div>



            </div>
            <Login_Create_footer></Login_Create_footer>
        </>
    )
}

export function Create2() {
    const [password,setPassword]=useState(false)
  function togglePasswordVisibility(){
   setPassword(!password)
  }
  const [rePassword,setRePassword]=useState(false)
  function toggleRePasswordVisibility(){
    setRePassword(!rePassword)
  }
  
    return (
        <>
            <Login_Create_header text={''}></Login_Create_header>
            <div class="container flex-col flex justify-center items-center lg:pt-[180px] lg:pb-[270px] m-auto   lg:[850px]">
                <div class="logo lg:hidden flex flex-col">
                    <div class=" w-[100%] justify-center flex items-center  ">
                        <img src="../Group.png" alt="logo" class="w-[20px] h-[27px] " />
                        <h2 class="text-orange-400 text-3xl font-normal"><span class="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div class="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <div class="  lg:w-[478px] w-[335px] h-[50px] m-0 flex items-end"> <p class="text-[#E86B02] text-start  lg:text-[20px] text-[16px]">Бүртгүүлэх</p></div>


                <form action="./login_page.html" className="flex flex-col">
                    
                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />
                    

                    <PasswordInput id={'password'} type={password? 'text' : 'password'} placeholder={"Нууц үг зохиох"} onClick_button={togglePasswordVisibility}/>
                   
                    <PasswordInput id={'password'} type={rePassword? 'text' : 'password'} placeholder={"Нууц үг давтах"} onClick_button={toggleRePasswordVisibility}/>
                    

                    <Full_colored_button text={'Бүртгүүлэх'} />

                </form>


            </div>
            <Login_Create_footer></Login_Create_footer>
        </>
    )
}