import { useState } from "react";
import { Full_colored_button } from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import Login_Create_header from "../components/HeaderDev";
import { Input, PasswordInput } from "../components/Input";
import { Link } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";



export function ChangePassword() {
    return (
        <>
            <Login_Create_header text={'Нууц үг сэргээх'}></Login_Create_header>



            <div className="container flex-col flex justify-center items-center lg:pt-[180px] lg:pb-[270px] m-auto   lg:[850px]">
                <div className="  lg:w-[478px] w-[335px] h-[50px] lg:border-b"> <p className="text-[#E86B02] text-start pt-[5px] text-[20px]  lg:flex hidden">Нууц үг сэргээх</p></div>
                <div className="mt-[30px]  w-[318px] h-[70px] m-0">
                    <p className="text-center pt-[5px] text-[#546371] text-[18px]">
                        Таны бүртгэлтэй имэйл рүү баталгаажуулах код илгээх болно.
                    </p>

                </div>
                <form action="" className="flex flex-col">


                    <Input type={'email'} placeholder={"И-мэйл эсвэл утасны дугаар"} />


                    <Link to="/changePassword_Page2">
                        <Full_colored_button text={'Код авах'} />
                    </Link>

                </form>


            </div>




            <Login_Create_footer></Login_Create_footer>
        </>
    )
}


export function ChangePassword2() {
    return (
        <>
            <Login_Create_header text={'Нууц үг сэргээх'}></Login_Create_header>


            <div className="container flex-col flex justify-center items-center lg:pt-[180px] lg:pb-[270px] m-auto   lg:[850px]">
                <div className="  lg:w-[478px] w-[335px] h-[50px] mb-[30px] lg:border-b">
                    <p className="text-[#E86B02] text-start pt-[5px] text-[20px]  lg:flex hidden">Нууц үг сэргээх</p>
                </div>
                <div className="  w-[318px] h-[66px] m-0">
                    <p className=" text-center pt-[5px] text-[#546371] text-[18px]">
                        Таны бүртгэлтэй имэйл рүү илгээсэн баталгаажуулах кодыг оруулна уу.
                    </p>

                </div>
                <form action="">
                    <div className="email mt-[20px] mb-[10px] flex justify-center ">

                        <input type="number" required onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] mr-[10px] h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" />
                        <input type="number" required onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] mr-[10px] h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" />
                        {/* <input type="number" required onKeyPress="if(this.value.length==1) return false;" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] mr-[10px] h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" />
                        <input type="number" required onKeyPress="if(this.value.length==1) return false;" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px]  h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" /> */}
                        <input type="number" required onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] mr-[10px] h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" />
                        <input type="number" required onInput={(e) => { if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength); }} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] mr-[10px] h-[50px] rounded-[10px]  focus:outline-none pl-[20px]  bg-[#F5F7F9]" placeholder="-" maxLength="1" max="9" min="0" />


                    </div>


                    <Link to="/changePassword_Page3">
                        <Full_colored_button text={'Үргэжлүүлэх'} />
                    </Link>

                </form>

            </div>







            <Login_Create_footer></Login_Create_footer>
        </>
    )
}


export function ChangePassword3() {

    const [mobileDialog, setMobileDialog] = useState(false)
    function DialogMobile() {
        setMobileDialog(!mobileDialog)
    }
    const [dialog, setDialog] = useState(false)
    function Dialog() {
        setDialog(!dialog)
    }
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
            <Login_Create_header text={'Нууц үг зохиох'}></Login_Create_header>

            <div className="container flex-col flex justify-center items-center lg:pt-[180px] lg:pb-[270px] m-auto   lg:[850px]">
                <div className="  lg:w-[478px] w-[335px] h-[50px]  mb-[30px] lg:border-b">
                    <p className="text-[#E86B02] text-start pt-[5px] text-[20px] lg:flex hidden">Нууц үг зохиох</p>
                </div>
                <div className="  w-[318px] h-[50px] m-0">

                    <p className=" text-center pt-[5px] text-[#546371] text-[18px]">
                        Нууц үгээ шинээр зохионо уу.
                    </p>
                </div>




                <form action="" onSubmit={e => e.preventDefault()}>

                    
                    <PasswordInput id={'password'} type={password? 'text' : 'password'} placeholder={"Нууц үг зохиох"} onClick_button={togglePasswordVisibility} icon={password? <PiEyeSlash className="text-[20px]" />  : <PiEye className="text-[20px]"/>}/>
                    <PasswordInput id={'password'} type={rePassword? 'text' : 'password'} placeholder={ "Нууц үг давтах"} onClick_button={toggleRePasswordVisibility} icon={rePassword? <PiEyeSlash className="text-[20px]" />  : <PiEye className="text-[20px]"/>}/>
                   
















                    <div id="Dialog" className=" save lg:flex hidden">

                        <Full_colored_button text={'Xадгалах'} id={''} onClick_button={Dialog} />

                        {dialog ?
                            <div id="dialog"
                                className=" fixed  inset-10 flex items-start justify-center ">
                                <div className="bg-white rounded-[10px] items-center  p-2.5 flex  justify-evenly w-[380px ] mt-[5%] shadow-2xl">
                                    <div className="text-center flex justify-center items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 39 38" fill="none"
                                            className="flex justify-center">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M10.7038 5.83515C13.3076 4.09536 16.3688 3.16675 19.5003 3.16675C21.5796 3.16675 23.6385 3.57629 25.5595 4.37199C27.4805 5.16769 29.2259 6.33396 30.6962 7.80422C32.1664 9.27449 33.3327 11.0199 34.1284 12.9409C34.9241 14.8619 35.3337 16.9208 35.3337 19.0001C35.3337 22.1316 34.4051 25.1928 32.6653 27.7966C30.9255 30.4004 28.4526 32.4298 25.5595 33.6282C22.6663 34.8266 19.4828 35.1401 16.4114 34.5292C13.34 33.9183 10.5188 32.4103 8.30447 30.1959C6.09014 27.9816 4.58217 25.1604 3.97123 22.089C3.3603 19.0176 3.67385 15.8341 4.87224 12.9409C6.07063 10.0478 8.10002 7.57494 10.7038 5.83515ZM23.8073 13.9175L17.0148 20.7258L14.4023 18.1133C14.2603 17.9476 14.0857 17.813 13.8892 17.7179C13.6928 17.6229 13.4788 17.5695 13.2608 17.5611C13.0427 17.5526 12.8253 17.5894 12.6221 17.669C12.4189 17.7486 12.2344 17.8693 12.0801 18.0236C11.9258 18.1779 11.805 18.3625 11.7254 18.5657C11.6458 18.7688 11.6091 18.9863 11.6175 19.2043C11.6259 19.4224 11.6793 19.6363 11.7744 19.8328C11.8694 20.0292 12.004 20.2039 12.1698 20.3458L15.8906 24.0825C16.0386 24.2292 16.214 24.3453 16.4069 24.4241C16.5998 24.5029 16.8064 24.5429 17.0148 24.5417C17.4301 24.5399 17.8282 24.375 18.1231 24.0825L26.0398 16.1658C26.1882 16.0186 26.306 15.8435 26.3864 15.6506C26.4667 15.4576 26.5081 15.2507 26.5081 15.0417C26.5081 14.8326 26.4667 14.6257 26.3864 14.4327C26.306 14.2398 26.1882 14.0647 26.0398 13.9175C25.7431 13.6226 25.3418 13.4571 24.9235 13.4571C24.5052 13.4571 24.1039 13.6226 23.8073 13.9175Z"
                                                fill="#E86B02" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-center ">Амжилттай хадгалагдлаа.</p>
                                    </div>


                                    <Link to='/login' className="items-center flex">
                                        <button id="closeDialogButton"
                                            onClick={Dialog}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18M6 6L18 18" stroke="#E2E8EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div> : ''}



                    </div>




                    <div id="mobileDialog" className="save lg:hidden flex flex-col ">


                        <Full_colored_button text={'Xадгалах'} id={'teleportButton'} onClick_button={DialogMobile} />


                        {mobileDialog ? 
                        <div id="dialogContainer "
                            className="fixed   inset-0 flex items-center justify-center  ">
                            <div className="bg-white rounded-md p-4 flex flex-col justify-center shadow-2xl">
                                <div className="text-center flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none"
                                        className="flex justify-center">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.7038 5.83515C13.3076 4.09536 16.3688 3.16675 19.5003 3.16675C21.5796 3.16675 23.6385 3.57629 25.5595 4.37199C27.4805 5.16769 29.2259 6.33396 30.6962 7.80422C32.1664 9.27449 33.3327 11.0199 34.1284 12.9409C34.9241 14.8619 35.3337 16.9208 35.3337 19.0001C35.3337 22.1316 34.4051 25.1928 32.6653 27.7966C30.9255 30.4004 28.4526 32.4298 25.5595 33.6282C22.6663 34.8266 19.4828 35.1401 16.4114 34.5292C13.34 33.9183 10.5188 32.4103 8.30447 30.1959C6.09014 27.9816 4.58217 25.1604 3.97123 22.089C3.3603 19.0176 3.67385 15.8341 4.87224 12.9409C6.07063 10.0478 8.10002 7.57494 10.7038 5.83515ZM23.8073 13.9175L17.0148 20.7258L14.4023 18.1133C14.2603 17.9476 14.0857 17.813 13.8892 17.7179C13.6928 17.6229 13.4788 17.5695 13.2608 17.5611C13.0427 17.5526 12.8253 17.5894 12.6221 17.669C12.4189 17.7486 12.2344 17.8693 12.0801 18.0236C11.9258 18.1779 11.805 18.3625 11.7254 18.5657C11.6458 18.7688 11.6091 18.9863 11.6175 19.2043C11.6259 19.4224 11.6793 19.6363 11.7744 19.8328C11.8694 20.0292 12.004 20.2039 12.1698 20.3458L15.8906 24.0825C16.0386 24.2292 16.214 24.3453 16.4069 24.4241C16.5998 24.5029 16.8064 24.5429 17.0148 24.5417C17.4301 24.5399 17.8282 24.375 18.1231 24.0825L26.0398 16.1658C26.1882 16.0186 26.306 15.8435 26.3864 15.6506C26.4667 15.4576 26.5081 15.2507 26.5081 15.0417C26.5081 14.8326 26.4667 14.6257 26.3864 14.4327C26.306 14.2398 26.1882 14.0647 26.0398 13.9175C25.7431 13.6226 25.3418 13.4571 24.9235 13.4571C24.5052 13.4571 24.1039 13.6226 23.8073 13.9175Z"
                                            fill="#E86B02" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-center mb-[10px]">Амжилттай</p>
                                </div>
                                <p className="font-[14px] w-[289px] text-center m-auto mb-[10px]">Нууц үг амжилттай шинэчлэгдлээ. Та
                                    шинэ нууц үгээрээ нэвтрэнэ үү.</p>

                                <Link to='/login'>
                                    <button id="closeDialogButton"
                                        className="text-white bg-[#E86B02] lg:rounded-[10px]  rounded-2xl pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[12px]"
                                        onClick={DialogMobile}>Ok</button>
                                </Link>
                            </div>
                        </div> : ''}


                    </div>

                </form>






            </div>







            <Login_Create_footer></Login_Create_footer>
        </>
    )
}