import { useState } from "react";
import { Full_colored_button, Fb_button, Gmail_button } from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import { GreyLine } from "../components/Grey_Space_Line";
import Login_Create_header from "../components/HeaderDev";
import { Input,PasswordInput } from "../components/Input";
import { Create1 } from "./Create_account";




export function LoginPage({setPage}) {
    const [password,setPassword]=useState(false)
  function togglePasswordVisibility(){
   setPassword(!password)
  }

 

  
    return (
        <>

            <Login_Create_header text=''></Login_Create_header>

            <div id="computer" class="container flex-col flex justify-center items-center lg:pt-[130px] lg:pb-[220px] m-auto w-[100%] lg:h-[850px] ">
                <div class="  lg:w-[478px] w-[335px] h-[50px]  hidden lg:flex "> <p class="text-[#E86B02] text-start pt-[10px] text-[20px]">Нэвтрэх</p></div>
                <div class="logo lg:hidden flex flex-col">
                    <div class=" w-[100%] justify-center flex items-center  ">
                        <img src="../Group.png" alt="logo" class="w-[20px] h-[27px] " />
                        <h2 class="text-orange-400 text-3xl font-normal"><span class="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div class="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <form action="../home/home.html">

                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />



                    <PasswordInput id={'password'} type={password? 'text' : 'password'} placeholder={"Нууц үг"} onClick_button={togglePasswordVisibility}/>
                  

                   



                    <div class=" lg:w-[478px] w-[335px] mb-[8px] ">
                        <a href="">
                            <p class="text-[#E86B02] text-end underline underline-offset-4">Нууц үг мартсан уу?</p>
                        </a>
                    </div>

                </form>



                <Full_colored_button text={'Нэвтрэх'} />

                <Gmail_button />


                <Fb_button />
               
              



                <GreyLine text={'эсвэл'}></GreyLine>
                <div class="burtguulh ">
                    <button onClick={()=> setPage("register")} class="text-black border-[#E86B02] border-[1.5px] lg:rounded-lg rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[10px] " >
                        <p class=" flex items-center justify-center "> Бүртгүүлэх</p>
                    </button>
                </div>
              
              
            </div>


            <Login_Create_footer />
        </>
    )
}