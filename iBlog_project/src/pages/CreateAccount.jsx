import { useState } from "react";
import {
  Full_colored_button,
  Fb_button,
  Gmail_button,
} from "../components/Buttons";
import Login_Create_footer from "../components/FooterDev";
import { GreyLine } from "../components/Grey_Space_Line";
import Login_Create_header from "../components/HeaderDev";
import { Input, PasswordInput } from "../components/Input";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export function CreateAccount() {
  const navigate = useNavigate();
  const [Inputpassword, setInputPassword] = useState(false);
  function togglePasswordVisibility() {
    setInputPassword(!Inputpassword);
  }
  const [reInputPassword, setReInputPassword] = useState(false);
  function toggleRePasswordVisibility() {
    setReInputPassword(!reInputPassword);
  }
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailValue.includes("@") && emailValue.includes("."));
  };

 
  function handleSubmit(e) {
    e.preventDefault();

    if (password == rePassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          updateProfile(auth.currentUser, {
            displayName: "User",
            photoURL: "Images/profile.png",
          });

          console.log(`Registered success: ${data.user}`);
          navigate("/login");
        })
        .catch((err) => alert(err));
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <>
      <Login_Create_header text={""}></Login_Create_header>
      <div className="container flex-col flex justify-center items-center lg:pt-[10%] lg:pb-[15%] m-auto      ">
        <div className="logo lg:hidden flex flex-col">
          <div className=" w-[100%] justify-center flex items-center  ">
            <img
              src="Images/Group.png"
              alt="logo"
              className="w-[20px] h-[27px] "
            />
            <h2 className="text-orange-400 text-3xl font-normal">
              <span className="text-[#F77268]">i</span>blog
            </h2>
          </div>
          <div className="text-[9px]">
            <p>Write, Read, Enjoy</p>
          </div>
        </div>
        <div className="  lg:w-[478px] w-[335px] h-[50px] m-0 flex items-end">
          {" "}
          <p className="text-[#E86B02] text-start  lg:text-[20px] text-[16px]">
            Бүртгүүлэх
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            id={"email"}
            type={"email"}
            required
            className="  rounded-[10px]   pl-4 pr-12 py-2 lg:w-[478px] w-[335px] h-[50px] focus:outline-none focus:-blue-500 lg:my-[12px] my-[8px] bg-[#F5F7F9]"
            placeholder={"И-мэйл эсвэл утасны дугаар"}
            value={email}
            onChange={handleEmailChange}
          />
          {isEmailValid && (
            <PasswordInput
              id={""}
              type={Inputpassword ? "text" : "password"}
              placeholder={"Нууц үг зохиох"}
              value={password}
              onchange={(e) => setPassword(e.target.value)}
              onClick_button={togglePasswordVisibility}
              icon={
                Inputpassword ? (
                  <PiEyeSlash className="text-[20px]" />
                ) : (
                  <PiEye className="text-[20px]" />
                )
              }
            />
          )}
          {isEmailValid && (
            <PasswordInput
              id={""}
              type={reInputPassword ? "text" : "password"}
              placeholder={"Нууц үг давтах"}
              value={rePassword}
              onClick_button={toggleRePasswordVisibility}
              onchange={(e) => setRePassword(e.target.value)}
              icon={
                reInputPassword ? (
                  <PiEyeSlash className="text-[20px]" />
                ) : (
                  <PiEye className="text-[20px]" />
                )
              }
            />
          )}

          <button type="submit">
            <Full_colored_button text={"Бүртгүүлэх"} />
          </button>

          {isEmailValid == false ? <Gmail_button /> : null}
          {isEmailValid == false ? <Fb_button /> : null}
          {isEmailValid == false ? (
            <div>
              <GreyLine
                type={" lg:hidden"}
                text={"Та бүртгэлтэй юу?"}
              ></GreyLine>
              <div className="text-black border-[#E86B02] border-[1.5px] justify-center lg:rounded-[10px] flex lg:hidden  rounded-2xl  py-[10px] pr-[30px] pl-[30px] lg:w-[478px] w-[335px] h-[50px] my-[10px] ">
                <Link to="/login">
                  <p className=" flex items-center justify-center "> Нэвтрэх</p>
                </Link>
              </div>
            </div>
          ) : null}
        </form>
      </div>
      <Login_Create_footer></Login_Create_footer>
    </>
  );
}
