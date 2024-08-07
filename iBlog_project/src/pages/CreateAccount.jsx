import { useState } from "react";
import { Full_colored_button, Fb_button, Gmail_button } from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import { GreyLine } from "../components/Grey_Space_Line";
import Login_Create_header from "../components/HeaderDev";
import { Input, PasswordInput } from "../components/Input";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";



export function CreateAccount() {
    return (
        <>
            <Login_Create_header text={''}></Login_Create_header>
            <div className="container flex-col flex justify-center items-center lg:pt-[10%] lg:pb-[15%] m-auto   ">
                <div className="logo lg:hidden flex flex-col">
                    <div className=" w-[100%] justify-center flex items-center  ">
                        <img src="Images/Group.png" alt="logo" className="w-[20px] h-[27px] " />
                        <h2 className="text-orange-400 text-3xl font-normal"><span className="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div className="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <div className="  lg:w-[478px] w-[335px] h-[50px] m-0 flex items-end"> <p className="text-[#E86B02] text-start  lg:text-[20px] text-[16px]">Бүртгүүлэх</p></div>
                <form action="" className="flex flex-col">
                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />
                    <Link to='/createAccount_Page2'  >
                        <Full_colored_button text={'Бүртгүүлэх'} />
                    </Link>


                </form>
                <Gmail_button />
                <Fb_button />
                <GreyLine text={'Та бүртгэлтэй юу?'}></GreyLine>
                <div className="burtguulh">
                    <Link to='/login'  >
                        <button className="text-black border-[#E86B02] border-[1.5px] lg:rounded-[10px]  rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[10px] " >
                            <p className=" flex items-center justify-center ">  Нэвтрэх</p>
                        </button>
                    </Link>

                </div>



            </div>
            <Login_Create_footer></Login_Create_footer>

           

        </>
    )
}

export function CreateAccount2() {
    const [password, setPassword] = useState(false)
    function togglePasswordVisibility() {
        setPassword(!password)
    }
    const [rePassword, setRePassword] = useState(false)
    function toggleRePasswordVisibility() {
        setRePassword(!rePassword)
    }

    return (
        <>
            <Login_Create_header text={''}></Login_Create_header>
            <div className="container flex-col flex justify-center items-center lg:pt-[10%] lg:pb-[15%] m-auto      ">
                <div className="logo lg:hidden flex flex-col">
                    <div className=" w-[100%] justify-center flex items-center  ">
                        <img src="Images/Group.png" alt="logo" className="w-[20px] h-[27px] " />
                        <h2 className="text-orange-400 text-3xl font-normal"><span className="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <div className="text-[9px]">
                        <p>Write, Read, Enjoy</p>
                    </div>
                </div>
                <div className="  lg:w-[478px] w-[335px] h-[50px] m-0 flex items-end"> <p className="text-[#E86B02] text-start  lg:text-[20px] text-[16px]">Бүртгүүлэх</p></div>


                <form action="" className="flex flex-col">

                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />


                    <PasswordInput id={''} type={password ? 'text' : 'password'} placeholder={"Нууц үг зохиох"} onClick_button={togglePasswordVisibility} icon={password? <PiEyeSlash className="text-[20px]" />  : <PiEye className="text-[20px]"/>} />

                    <PasswordInput id={''} type={rePassword ? 'text' : 'password'} placeholder={"Нууц үг давтах"} onClick_button={toggleRePasswordVisibility} icon={rePassword? <PiEyeSlash className="text-[20px]" />  : <PiEye className="text-[20px]"/>} />

                    <Link to='/login'  >
                        <Full_colored_button text={'Бүртгүүлэх'} />
                    </Link>


                </form>


            </div>
            <Login_Create_footer></Login_Create_footer>
        </>
    )
}