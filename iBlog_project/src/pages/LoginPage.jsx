import { useState } from "react";
import { Full_colored_button, Fb_button, Gmail_button } from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import { GreyLine } from "../components/Grey_Space_Line";
import Login_Create_header from "../components/HeaderDev";
import { Input,PasswordInput } from "../components/Input";
import { CreateAccount } from "./CreateAccount";
import { Link } from "react-router-dom";





export function LoginPage() {
    const [password,setPassword]=useState(false)
  function togglePasswordVisibility(){
   setPassword(!password)
  }

 

  
    return (
        <>

            <Login_Create_header text=''></Login_Create_header>

            <div id="computer" className="container flex-col flex justify-center items-center lg:pt-[130px] lg:pb-[220px] m-auto w-[100%] lg:h-[850px] ">
                <div className="  lg:w-[478px] w-[335px] h-[50px]  hidden lg:flex "> <p className="text-[#E86B02] text-start pt-[10px] text-[20px]">Нэвтрэх</p></div>
                <div className="logo lg:hidden flex flex-col">
                    <div className=" w-[100%] justify-center flex items-center  ">
                        <img src="images/Group.png" alt="logo" className="w-[20px] h-[27px] " />
                        <h2 className="text-orange-400 text-3xl font-normal"><span className="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div className="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <form action="">

                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />



                    <PasswordInput id={'password'} type={password? 'text' : 'password'} placeholder={"Нууц үг"} onClick_button={togglePasswordVisibility}/>
                  

                   



                    <div className=" lg:w-[478px] w-[335px] mb-[8px] ">
                        <a href="/changePassword">
                            <p className="text-[#E86B02] text-end underline underline-offset-4">Нууц үг мартсан уу?</p>
                        </a>
                    </div>

                </form>



                <Full_colored_button text={'Нэвтрэх'} />

                <Gmail_button />


                <Fb_button />
               
              



                <GreyLine text={'эсвэл'}></GreyLine>
                <div  className="text-black border-[#E86B02] border-[1.5px] lg:rounded-lg rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[10px] " >
                    
                <Link to='/createAccount'  >
                        <p className=" flex items-center justify-center "> Бүртгүүлэх</p>
                    </Link>
                </div>
              
              
            </div>


            <Login_Create_footer />
        </>
    )
}