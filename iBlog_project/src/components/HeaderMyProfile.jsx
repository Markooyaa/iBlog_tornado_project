import { useState } from "react";
import { Link } from "react-router-dom";
export function HeaderMyProfile({ button, setButton }) {
  // const [Button, SetButton] = useState(false);

    function Click() {
        setButton(!false);
    }

  function handleProfile() {
    setButton(!button);
    console.log("Profile");
  }

  return (
    <header
      onClick={() => setButton(!button)}
      className="border-b-[1px] sm:w-full sm:h-[74px] h-[56px] sm:flex hidden sm:px-[50px] px-[16px] justify-between  items-center ">
      <div className="mobile-icon sm:hidden flex sm:items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M3 18H12"
            stroke="#E86B02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12H17"
            stroke="#E86B02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#E86B02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Link to="/" className="relative-logo flex items-center">
        <img
          src="Images/Logo.jpg"
          alt="logo"
          className="w-[20px] h-[27px] sm: flex-col "
        />
        <h2 className="text-orange-400 text-3xl font-normal">
          <span className="text-[#F77268]">i</span>blog
        </h2>
      </Link>

            <div className="search relative sm:flex hidden">
                <input
                    type="text"
                    className="border border-gray-300 rounded-2xl pl-4 pr-12 py-2 w-[572px] h-[39px] focus:outline-none focus:border-blue-500"
                    placeholder="Хайх"
                />
                <svg
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M21 21l-6-6M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                </svg>
            </div>

            {/* <!---------------------------buttons--------------------> */}
            <div className="Buttons sm:flex hidden gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    className="mt-[9px]">
                    <path
                        d="M23.52 6.33336C22.2833 5.09344 20.6439 4.33666 18.8981 4.19973C17.1522 4.0628 15.4149 4.55474 14 5.5867C12.5156 4.48261 10.668 3.98196 8.82924 4.18557C6.99049 4.38919 5.29718 5.28194 4.0903 6.68405C2.88342 8.08615 2.25262 9.89347 2.32493 11.742C2.39724 13.5906 3.16728 15.3431 4.48 16.6467L11.725 23.9034C12.3317 24.5004 13.1488 24.8351 14 24.8351C14.8512 24.8351 15.6683 24.5004 16.275 23.9034L23.52 16.6467C24.8822 15.2762 25.6467 13.4223 25.6467 11.49C25.6467 9.55771 24.8822 7.70389 23.52 6.33336ZM21.875 15.0367L14.63 22.2817C14.5476 22.3649 14.4494 22.431 14.3413 22.4761C14.2332 22.5212 14.1172 22.5444 14 22.5444C13.8828 22.5444 13.7668 22.5212 13.6587 22.4761C13.5506 22.431 13.4524 22.3649 13.37 22.2817L6.125 15.0017C5.21005 14.0664 4.69771 12.8101 4.69771 11.5017C4.69771 10.1933 5.21005 8.93696 6.125 8.0017C7.05734 7.08118 8.3148 6.56503 9.625 6.56503C10.9352 6.56503 12.1926 7.08118 13.125 8.0017C13.2335 8.11105 13.3625 8.19784 13.5047 8.25707C13.6468 8.3163 13.7993 8.3468 13.9533 8.3468C14.1073 8.3468 14.2598 8.3163 14.402 8.25707C14.5442 8.19784 14.6732 8.11105 14.7817 8.0017C15.714 7.08118 16.9715 6.56503 18.2817 6.56503C19.5919 6.56503 20.8493 7.08118 21.7817 8.0017C22.7092 8.92471 23.2383 10.1743 23.2558 11.4827C23.2732 12.7911 22.7776 14.0543 21.875 15.0017V15.0367Z"
                        fill="#E86B02"
                    />
                </svg>

        <Link
          to="/profile/add"
          className="flex text-white bg-[#E86B02] rounded-[10px] pl-4 pr-4 py-[10px] sm:pr-[30px] sm:pl-[30px] gap-1 hover:bg-orange-400 active:bg-orange-600">
          Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="mt-[4px]">
            <path
              d="M14.6666 5.3266C14.6671 5.23886 14.6503 5.15188 14.6171 5.07066C14.5839 4.98943 14.535 4.91556 14.4733 4.85326L11.6466 2.0266C11.5843 1.96481 11.5104 1.91593 11.4292 1.88275C11.348 1.84957 11.261 1.83276 11.1733 1.83326C11.0855 1.83276 10.9985 1.84957 10.9173 1.88275C10.8361 1.91593 10.7622 1.96481 10.6999 2.0266L8.81326 3.91326L1.5266 11.1999C1.46481 11.2622 1.41593 11.3361 1.38275 11.4173C1.34957 11.4985 1.33276 11.5855 1.33326 11.6733V14.4999C1.33326 14.6767 1.4035 14.8463 1.52853 14.9713C1.65355 15.0964 1.82312 15.1666 1.99993 15.1666H4.8266C4.91988 15.1717 5.01319 15.1571 5.10048 15.1238C5.18776 15.0905 5.26707 15.0392 5.33326 14.9733L12.5799 7.6866L14.4733 5.83326C14.5341 5.76865 14.5837 5.69428 14.6199 5.61326C14.6264 5.56012 14.6264 5.5064 14.6199 5.45326C14.623 5.42223 14.623 5.39096 14.6199 5.35993L14.6666 5.3266ZM4.55326 13.8333H2.6666V11.9466L9.2866 5.3266L11.1733 7.21326L4.55326 13.8333ZM12.1133 6.27326L10.2266 4.3866L11.1733 3.4466L13.0533 5.3266L12.1133 6.27326Z"
              fill="white"
            />
          </svg>
        </Link>
        <button
          onClick={handleProfile}
          id="dropdownBtn"
          className="sm:flex relative text-[#E86B02] border border-[#DCE3EA]  rounded-[10px] pt-[10px] px-[10px]  gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="mt-[4px] ">
            <path
              d="M10.9733 8.97325C11.6269 8.45903 12.104 7.75387 12.3382 6.95588C12.5723 6.1579 12.5519 5.30676 12.2799 4.5209C12.0078 3.73503 11.4975 3.05352 10.82 2.57116C10.1426 2.0888 9.33163 1.82959 8.5 1.82959C7.66836 1.82959 6.85741 2.0888 6.17995 2.57116C5.5025 3.05352 4.99223 3.73503 4.72014 4.5209C4.44805 5.30676 4.42767 6.1579 4.66184 6.95588C4.896 7.75387 5.37307 8.45903 6.02666 8.97325C4.90672 9.42195 3.92952 10.1662 3.19926 11.1265C2.469 12.0869 2.01304 13.2275 1.88 14.4266C1.87037 14.5141 1.87808 14.6027 1.90268 14.6873C1.92729 14.7719 1.96831 14.8508 2.02341 14.9195C2.13468 15.0582 2.29652 15.1471 2.47333 15.1666C2.65014 15.186 2.82744 15.1344 2.96621 15.0232C3.10499 14.9119 3.19388 14.7501 3.21333 14.5733C3.35972 13.27 3.98112 12.0665 4.95881 11.1924C5.9365 10.3184 7.20193 9.83527 8.51333 9.83527C9.82473 9.83527 11.0902 10.3184 12.0679 11.1924C13.0455 12.0665 13.6669 13.27 13.8133 14.5733C13.8315 14.7371 13.9096 14.8884 14.0327 14.9979C14.1559 15.1075 14.3152 15.1676 14.48 15.1666H14.5533C14.7281 15.1465 14.8878 15.0581 14.9977 14.9208C15.1076 14.7834 15.1587 14.6082 15.14 14.4333C15.0063 13.2307 14.5479 12.0872 13.8139 11.1254C13.0799 10.1635 12.0979 9.41957 10.9733 8.97325ZM8.5 8.49992C7.97258 8.49992 7.45701 8.34352 7.01848 8.05051C6.57995 7.75749 6.23815 7.34101 6.03632 6.85374C5.83449 6.36647 5.78168 5.8303 5.88457 5.31301C5.98746 4.79573 6.24144 4.32058 6.61438 3.94764C6.98732 3.5747 7.46247 3.32072 7.97976 3.21783C8.49704 3.11493 9.03322 3.16774 9.52049 3.36957C10.0078 3.57141 10.4242 3.9132 10.7173 4.35173C11.0103 4.79026 11.1667 5.30584 11.1667 5.83325C11.1667 6.5405 10.8857 7.21877 10.3856 7.71887C9.88552 8.21897 9.20724 8.49992 8.5 8.49992Z"
              fill="#E86B02"
            />
          </svg>
          <div className="cursor-pointer ">Профайл</div>
          {button && (
            <div className=" extend-profile  absolute rounded-[10px] bg-slate-200 w-[300px] top-[60px] right-0 z-20">
              <div
                id="dropdown"
                className="flex flex-col w-full text-[14px] text-black font-semibold cursor:pointer ">
                <div className="extra 1 flex w-full h-[43px] gap-2  bg-slate-200 rounded-t-md items-center text-center pl-2 hover:bg-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="">
                    <path
                      d="M13.0917 10.5917C13.9087 9.94891 14.505 9.06746 14.7977 8.06997C15.0904 7.07249 15.0649 6.00858 14.7248 5.02625C14.3847 4.04391 13.7469 3.19202 12.9001 2.58907C12.0532 1.98612 11.0395 1.66211 10 1.66211C8.96045 1.66211 7.94676 1.98612 7.09994 2.58907C6.25312 3.19202 5.61528 4.04391 5.27517 5.02625C4.93506 6.00858 4.90959 7.07249 5.2023 8.06997C5.49501 9.06746 6.09134 9.94891 6.90833 10.5917C5.5084 11.1526 4.2869 12.0828 3.37407 13.2833C2.46125 14.4838 1.8913 15.9094 1.725 17.4084C1.71296 17.5178 1.72259 17.6285 1.75335 17.7342C1.78411 17.8399 1.83539 17.9386 1.90426 18.0245C2.04335 18.1979 2.24565 18.309 2.46666 18.3334C2.68768 18.3577 2.9093 18.2932 3.08277 18.1541C3.25624 18.015 3.36735 17.8127 3.39166 17.5917C3.57465 15.9627 4.3514 14.4582 5.57351 13.3657C6.79562 12.2732 8.37741 11.6692 10.0167 11.6692C11.6559 11.6692 13.2377 12.2732 14.4598 13.3657C15.6819 14.4582 16.4587 15.9627 16.6417 17.5917C16.6643 17.7965 16.762 17.9856 16.9159 18.1225C17.0698 18.2595 17.269 18.3346 17.475 18.3334H17.5667C17.7851 18.3082 17.9848 18.1978 18.1221 18.0261C18.2595 17.8544 18.3234 17.6353 18.3 17.4167C18.1329 15.9135 17.5599 14.4842 16.6424 13.2819C15.7249 12.0795 14.4974 11.1496 13.0917 10.5917ZM10 10C9.34073 10 8.69626 9.80453 8.1481 9.43825C7.59993 9.07198 7.17269 8.55139 6.9204 7.9423C6.66811 7.33321 6.6021 6.66299 6.73071 6.01639C6.85933 5.36979 7.1768 4.77584 7.64297 4.30967C8.10915 3.84349 8.70309 3.52602 9.3497 3.39741C9.9963 3.26879 10.6665 3.3348 11.2756 3.58709C11.8847 3.83938 12.4053 4.26662 12.7716 4.81479C13.1378 5.36295 13.3333 6.00742 13.3333 6.66669C13.3333 7.55074 12.9821 8.39859 12.357 9.02371C11.7319 9.64883 10.8841 10 10 10Z"
                      fill="#E86B02"
                    />
                  </svg>
                  <div className="text-center">Миний мэдээлэл</div>
                </div>
                <div className="extra 2 flex w-full h-[43px] gap-2  bg-slate-200 items-center text-center pl-2 hover:bg-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M16.8001 4.16672C15.9167 3.28106 14.7457 2.74051 13.4987 2.6427C12.2516 2.54489 11.0107 2.89628 10.0001 3.63339C8.93978 2.84475 7.62006 2.48715 6.30667 2.63259C4.99327 2.77803 3.78377 3.4157 2.92171 4.41721C2.05966 5.41872 1.60909 6.70966 1.66073 8.03007C1.71238 9.35048 2.26242 10.6023 3.20007 11.5334L8.37507 16.7167C8.80842 17.1432 9.39206 17.3822 10.0001 17.3822C10.6081 17.3822 11.1917 17.1432 11.6251 16.7167L16.8001 11.5334C17.7731 10.5544 18.3192 9.23028 18.3192 7.85006C18.3192 6.46983 17.7731 5.14567 16.8001 4.16672ZM15.6251 10.3834L10.4501 15.5584C10.3912 15.6179 10.3211 15.6651 10.2439 15.6973C10.1666 15.7295 10.0838 15.7461 10.0001 15.7461C9.91638 15.7461 9.83352 15.7295 9.75628 15.6973C9.67904 15.6651 9.60896 15.6179 9.55007 15.5584L4.37507 10.3584C3.72153 9.69034 3.35558 8.79294 3.35558 7.85839C3.35558 6.92384 3.72153 6.02644 4.37507 5.35839C5.04103 4.70088 5.93921 4.3322 6.87507 4.3322C7.81092 4.3322 8.7091 4.70088 9.37507 5.35839C9.45254 5.4365 9.5447 5.49849 9.64625 5.5408C9.7478 5.58311 9.85672 5.60489 9.96673 5.60489C10.0767 5.60489 10.1857 5.58311 10.2872 5.5408C10.3888 5.49849 10.4809 5.4365 10.5584 5.35839C11.2244 4.70088 12.1225 4.3322 13.0584 4.3322C13.9943 4.3322 14.8924 4.70088 15.5584 5.35839C16.2209 6.01768 16.5989 6.91022 16.6114 7.84479C16.6238 8.77937 16.2698 9.68167 15.6251 10.3584V10.3834Z"
                      fill="#E86B02"
                    />
                  </svg>
                  <div className="text-center">Таалагдсан</div>
                </div>
                <div className="extra 3 flex w-full h-[43px] gap-2 rounded-b-md bg-slate-200 items-center text-center pl-2  hover:bg-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M12.5 14.1666L16.6667 9.99992L12.5 5.83325"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.6666 10L8.33325 10"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.16675 16.6666H5.83341C5.39139 16.6666 4.96746 16.5105 4.6549 16.2327C4.34234 15.9548 4.16675 15.578 4.16675 15.1851V4.81473C4.16675 4.42182 4.34234 4.045 4.6549 3.76717C4.96746 3.48934 5.39139 3.33325 5.83341 3.33325H9.16675"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-center">гарах</div>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
      {/* <!-----------------------Mobile svg---------------------------------> */}
      <div className="sm:hidden flex sm: items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M21.7104 20.2899L18.0004 16.6099C19.4405 14.8143 20.1379 12.5352 19.9492 10.2412C19.7605 7.94721 18.7001 5.81269 16.9859 4.27655C15.2718 2.74041 13.0342 1.91941 10.7333 1.98237C8.43243 2.04534 6.24311 2.98747 4.61553 4.61505C2.98795 6.24263 2.04582 8.43194 1.98286 10.7328C1.9199 13.0337 2.7409 15.2713 4.27704 16.9854C5.81318 18.6996 7.94769 19.76 10.2417 19.9487C12.5357 20.1374 14.8148 19.44 16.6104 17.9999L20.2904 21.6799C20.3834 21.7736 20.494 21.848 20.6158 21.8988C20.7377 21.9496 20.8684 21.9757 21.0004 21.9757C21.1324 21.9757 21.2631 21.9496 21.385 21.8988C21.5068 21.848 21.6174 21.7736 21.7104 21.6799C21.8906 21.4934 21.9914 21.2442 21.9914 20.9849C21.9914 20.7256 21.8906 20.4764 21.7104 20.2899ZM11.0004 17.9999C9.61592 17.9999 8.26255 17.5894 7.1114 16.8202C5.96026 16.051 5.06305 14.9578 4.53324 13.6787C4.00342 12.3996 3.8648 10.9921 4.1349 9.63427C4.40499 8.27641 5.07168 7.02912 6.05065 6.05016C7.02961 5.07119 8.27689 4.4045 9.63476 4.13441C10.9926 3.86431 12.4001 4.00293 13.6792 4.53275C14.9583 5.06256 16.0515 5.95977 16.8207 7.11091C17.5899 8.26206 18.0004 9.61544 18.0004 10.9999C18.0004 12.8564 17.2629 14.6369 15.9501 15.9497C14.6374 17.2624 12.8569 17.9999 11.0004 17.9999Z"
            fill="#E86B02"
          />
        </svg>
      </div>
    </header>
  );
}