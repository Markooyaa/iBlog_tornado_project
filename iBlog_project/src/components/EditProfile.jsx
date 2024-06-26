import { useState } from "react";
import { Outlet } from "react-router-dom";
import EditProfileMain from "./EditProfileMain";
import EditProfilePass from "./EditProfilePass";
import { Link } from "react-router-dom";
import ProfileFixMobileButton from "./ProfileFixMobileButton";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import MobileSaveButton from "./MobileSaveButton";
import MobileBottomBtns from "./MobileBottomBtns";
import UserImage from "./UserImage";

export default function EditProfile() {
  const [show, setShow] = useState(false);
  let selectedStyle =
  "Профайл-мэдээлэл sm:flex hidden justify-center h-[40px] w-full p-1 border-b-2 border-[#E86B02] font-bold text-[18px] rounded-t-xl hover:bg-slate-200 active:bg-slate-300 cursor-pointer";
  let unselectedStyle =
    "Профайл-мэдээлэл sm:flex hidden justify-center h-[40px] w-full p-1 border-b-2 border-slate-200 font-semibold text-[16px] text-slate-600 rounded-t-xl hover:bg-slate-200 active:bg-slate-400 cursor-pointer";
  let MobileUnselectedStyle =
    "Нууц үг  sm:hidden flex justify-center h-[40px] w-full p-1 border-b-2 border-slate-200 sm:font-bold font-medium sm:text-[18px] text-[14px] rounded-t-xl hover:bg-slate-200 active:bg-slate-400 cursor-pointer";
  let MobileSelectedStyle =
    "Профайл-мэдээлэл sm:hidden flex justify-center h-[40px] w-full p-1 border-b-2 border-[#E86B02] sm:font-bold font-medium sm:text-[18px] text-[14px] rounded-t-xl hover:bg-slate-200 active:bg-slate-400 cursor-pointer";
  
  return (
    <div className="content sm:w-3/4 w-full h-full sm:flex-col flex-col-reverse  border-5 border-orange-600 sm:ml-[155px]">
      <div className="categories gap-[35px] sm:flex hidden sm:w-full w-full h-[40px] ">
        {/* ----------------------------------------------------------- Desktop ------------------------------------------- */}
        <button
          onClick={() => setShow(true)}
          className={show ? selectedStyle : unselectedStyle}>
          <svg
            className="p-[2px] mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none">
            <path
              d="M16.21 12.71C17.1904 11.9387 17.906 10.8809 18.2572 9.68394C18.6085 8.48697 18.5779 7.21027 18.1698 6.03147C17.7617 4.85267 16.9963 3.83039 15.9801 3.10686C14.9639 2.38332 13.7474 1.99451 12.5 1.99451C11.2525 1.99451 10.0361 2.38332 9.01993 3.10686C8.00374 3.83039 7.23834 4.85267 6.83021 6.03147C6.42208 7.21027 6.39151 8.48697 6.74276 9.68394C7.09401 10.8809 7.8096 11.9387 8.79 12.71C7.11007 13.383 5.64428 14.4994 4.54889 15.9399C3.45349 17.3805 2.76956 19.0913 2.57 20.89C2.55555 21.0213 2.56711 21.1542 2.60402 21.2811C2.64093 21.4079 2.70246 21.5263 2.78511 21.6293C2.95202 21.8375 3.19478 21.9708 3.46 22C3.72521 22.0292 3.99116 21.9518 4.19932 21.7849C4.40749 21.618 4.54082 21.3752 4.57 21.11C4.78958 19.1552 5.72168 17.3498 7.18822 16.0388C8.65475 14.7278 10.5529 14.003 12.52 14.003C14.4871 14.003 16.3852 14.7278 17.8518 16.0388C19.3183 17.3498 20.2504 19.1552 20.47 21.11C20.4972 21.3557 20.6144 21.5827 20.7991 21.747C20.9838 21.9114 21.2228 22.0015 21.47 22H21.58C21.8421 21.9698 22.0817 21.8373 22.2466 21.6313C22.4114 21.4252 22.4881 21.1624 22.46 20.9C22.2595 19.0962 21.5719 17.381 20.4708 15.9382C19.3698 14.4954 17.8969 13.3795 16.21 12.71ZM12.5 12C11.7089 12 10.9355 11.7654 10.2777 11.3259C9.61992 10.8864 9.10723 10.2616 8.80448 9.53074C8.50173 8.79983 8.42251 7.99557 8.57686 7.21964C8.7312 6.44372 9.11216 5.73099 9.67157 5.17158C10.231 4.61217 10.9437 4.2312 11.7196 4.07686C12.4956 3.92252 13.2998 4.00173 14.0307 4.30448C14.7616 4.60724 15.3863 5.11993 15.8259 5.77772C16.2654 6.43552 16.5 7.20888 16.5 8C16.5 9.06087 16.0786 10.0783 15.3284 10.8284C14.5783 11.5786 13.5609 12 12.5 12Z"
              fill={show ? "#E86B02" : "#546371"}
            />
          </svg>
          <p>Профайл мэдээлэл</p>
        </button>
        <button
          onClick={() => setShow(false)}
          className={!show ? selectedStyle : unselectedStyle}>
          <svg
            className="p-[2px] mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none">
            <path
              d="M21.5001 4.41L22.2101 3.71C22.3984 3.5217 22.5042 3.2663 22.5042 3C22.5042 2.7337 22.3984 2.47831 22.2101 2.29C22.0218 2.1017 21.7664 1.99591 21.5001 1.99591C21.2338 1.99591 20.9784 2.1017 20.7901 2.29L19.3901 3.7L16.5601 6.53L10.2501 12.83C9.21614 12.1478 7.96577 11.8738 6.74126 12.0609C5.51676 12.248 4.40532 12.883 3.62228 13.8429C2.83925 14.8027 2.44038 16.019 2.50297 17.2561C2.56556 18.4933 3.08515 19.6631 3.96105 20.539C4.83696 21.415 6.00682 21.9345 7.24395 21.9971C8.48109 22.0597 9.69741 21.6608 10.6572 20.8778C11.6171 20.0948 12.2521 18.9833 12.4392 17.7588C12.6263 16.5343 12.3523 15.284 11.6701 14.25L17.2601 8.65L19.3801 10.78C19.4733 10.8726 19.5839 10.9459 19.7055 10.9957C19.827 11.0456 19.9572 11.071 20.0886 11.0706C20.22 11.0701 20.35 11.0438 20.4713 10.993C20.5925 10.9423 20.7025 10.8682 20.7951 10.775C20.8877 10.6818 20.961 10.5712 21.0108 10.4496C21.0607 10.3281 21.0861 10.1979 21.0857 10.0665C21.0852 9.93507 21.0588 9.80505 21.0081 9.68384C20.9574 9.56262 20.8833 9.45258 20.7901 9.36L18.6701 7.24L20.0901 5.83L20.7901 6.53C20.8827 6.62324 20.9927 6.69733 21.1139 6.74804C21.2352 6.79875 21.3652 6.82509 21.4966 6.82556C21.628 6.82602 21.7582 6.8006 21.8797 6.75075C22.0013 6.70089 22.1119 6.62758 22.2051 6.535C22.2983 6.44242 22.3724 6.33238 22.4231 6.21116C22.4738 6.08995 22.5002 5.95993 22.5007 5.82854C22.5011 5.69714 22.4757 5.56694 22.4258 5.44537C22.376 5.3238 22.3027 5.21324 22.2101 5.12L21.5001 4.41ZM7.5001 20C6.90675 20 6.32673 19.8241 5.83339 19.4944C5.34004 19.1648 4.95552 18.6962 4.72846 18.1481C4.50139 17.5999 4.44199 16.9967 4.55774 16.4147C4.6735 15.8328 4.95922 15.2982 5.37878 14.8787C5.79833 14.4591 6.33288 14.1734 6.91483 14.0576C7.49677 13.9419 8.09997 14.0013 8.64815 14.2284C9.19632 14.4554 9.66486 14.8399 9.9945 15.3333C10.3241 15.8266 10.5001 16.4067 10.5001 17C10.5001 17.7957 10.184 18.5587 9.62142 19.1213C9.05881 19.6839 8.29575 20 7.5001 20Z"
              fill={!show ? "#E86B02" : "#546371"}
            />
          </svg>
          <p>Нууц үг солих</p>
        </button>
      </div>
      <ProfileFixMobileButton />

      {/* ----------------------------------------------------------- Mobile ------------------------------------------- */}
      <div className="flex-col w-full ">
        {show && <EditProfileMain />}
        <div className="sm:hidden flex justify-center">{!show && <UserImage />}</div>
        <div className="sm:hidden flex">
          <button
            onClick={() => setShow(true)}
            className={show ? MobileSelectedStyle : MobileUnselectedStyle}>
            <svg
              className="p-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none">
              <path
                d="M16.21 12.71C17.1904 11.9387 17.906 10.8809 18.2572 9.68394C18.6085 8.48697 18.5779 7.21027 18.1698 6.03147C17.7617 4.85267 16.9963 3.83039 15.9801 3.10686C14.9639 2.38332 13.7474 1.99451 12.5 1.99451C11.2525 1.99451 10.0361 2.38332 9.01993 3.10686C8.00374 3.83039 7.23834 4.85267 6.83021 6.03147C6.42208 7.21027 6.39151 8.48697 6.74276 9.68394C7.09401 10.8809 7.8096 11.9387 8.79 12.71C7.11007 13.383 5.64428 14.4994 4.54889 15.9399C3.45349 17.3805 2.76956 19.0913 2.57 20.89C2.55555 21.0213 2.56711 21.1542 2.60402 21.2811C2.64093 21.4079 2.70246 21.5263 2.78511 21.6293C2.95202 21.8375 3.19478 21.9708 3.46 22C3.72521 22.0292 3.99116 21.9518 4.19932 21.7849C4.40749 21.618 4.54082 21.3752 4.57 21.11C4.78958 19.1552 5.72168 17.3498 7.18822 16.0388C8.65475 14.7278 10.5529 14.003 12.52 14.003C14.4871 14.003 16.3852 14.7278 17.8518 16.0388C19.3183 17.3498 20.2504 19.1552 20.47 21.11C20.4972 21.3557 20.6144 21.5827 20.7991 21.747C20.9838 21.9114 21.2228 22.0015 21.47 22H21.58C21.8421 21.9698 22.0817 21.8373 22.2466 21.6313C22.4114 21.4252 22.4881 21.1624 22.46 20.9C22.2595 19.0962 21.5719 17.381 20.4708 15.9382C19.3698 14.4954 17.8969 13.3795 16.21 12.71ZM12.5 12C11.7089 12 10.9355 11.7654 10.2777 11.3259C9.61992 10.8864 9.10723 10.2616 8.80448 9.53074C8.50173 8.79983 8.42251 7.99557 8.57686 7.21964C8.7312 6.44372 9.11216 5.73099 9.67157 5.17158C10.231 4.61217 10.9437 4.2312 11.7196 4.07686C12.4956 3.92252 13.2998 4.00173 14.0307 4.30448C14.7616 4.60724 15.3863 5.11993 15.8259 5.77772C16.2654 6.43552 16.5 7.20888 16.5 8C16.5 9.06087 16.0786 10.0783 15.3284 10.8284C14.5783 11.5786 13.5609 12 12.5 12Z"
                fill="#E86B02"
              />
            </svg>
            <p>Профайл мэдээлэл</p>
          </button>
          <button
            onClick={() => setShow(false)}
            className={!show ? MobileSelectedStyle : MobileUnselectedStyle}>
            <svg
              className="text-[5px] flex align-center"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none">
              <path
                d="M9 9.75C8.80109 9.75 8.61032 9.82902 8.46967 9.96967C8.32902 10.1103 8.25 10.3011 8.25 10.5V12.75C8.25 12.9489 8.32902 13.1397 8.46967 13.2803C8.61032 13.421 8.80109 13.5 9 13.5C9.19891 13.5 9.38968 13.421 9.53033 13.2803C9.67098 13.1397 9.75 12.9489 9.75 12.75V10.5C9.75 10.3011 9.67098 10.1103 9.53033 9.96967C9.38968 9.82902 9.19891 9.75 9 9.75ZM12.75 6.75V5.25C12.75 4.25544 12.3549 3.30161 11.6517 2.59835C10.9484 1.89509 9.99456 1.5 9 1.5C8.00544 1.5 7.05161 1.89509 6.34835 2.59835C5.64509 3.30161 5.25 4.25544 5.25 5.25V6.75C4.65326 6.75 4.08097 6.98705 3.65901 7.40901C3.23705 7.83097 3 8.40326 3 9V14.25C3 14.8467 3.23705 15.419 3.65901 15.841C4.08097 16.2629 4.65326 16.5 5.25 16.5H12.75C13.3467 16.5 13.919 16.2629 14.341 15.841C14.7629 15.419 15 14.8467 15 14.25V9C15 8.40326 14.7629 7.83097 14.341 7.40901C13.919 6.98705 13.3467 6.75 12.75 6.75ZM6.75 5.25C6.75 4.65326 6.98705 4.08097 7.40901 3.65901C7.83097 3.23705 8.40326 3 9 3C9.59674 3 10.169 3.23705 10.591 3.65901C11.0129 4.08097 11.25 4.65326 11.25 5.25V6.75H6.75V5.25ZM13.5 14.25C13.5 14.4489 13.421 14.6397 13.2803 14.7803C13.1397 14.921 12.9489 15 12.75 15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25V9C4.5 8.80109 4.57902 8.61032 4.71967 8.46967C4.86032 8.32902 5.05109 8.25 5.25 8.25H12.75C12.9489 8.25 13.1397 8.32902 13.2803 8.46967C13.421 8.61032 13.5 8.80109 13.5 9V14.25Z"
                fill="#546371"
              />
            </svg>
            <p>Нууц үг солих</p>
          </button>
        </div>
        <div className="sm:flex flex-col sm:m-0 mx-[5%] full">
          {!show && <EditProfilePass />}
          <div className="sm:hidden">
            {show && <UserName />}
            {show && <UserEmail />}
          </div>
        </div>
      </div>
      <MobileSaveButton />
      <MobileBottomBtns />
    </div>
  );
}
