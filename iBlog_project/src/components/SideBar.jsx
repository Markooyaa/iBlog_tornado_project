import { Link } from "react-router-dom"
export default function SideBar(){
    return (
      <div className="sidebar sm:flex hidden">
        <div className="left-container  w-full flex flex-col grow border-5 p-6 sm:gap-5 gap-[16px]">
          <div
            className="profile flex border-5 gap-4 mx-[24px] 
            ">
            <div className="image sm:h-[90px] h-[60px] sm:w-[90px] [60px] flex items-center ">
              <img
                src="images/Profile.jpg"
                className="rounded-full sm: w-[60px] "
                alt=""
              />
            </div>
            <div className="profile-name flex items-center w-fit">
              <div className="name w-fit font-normal sm:text-[34px] text-[18px] align-middle">
                Tracey Willson
              </div>
            </div>
          </div>
          <div className="details flex">
            <div className="follows grow flex-col text-center">
              <h4>1</h4>
              <ul>
                <li>Follows</li>
              </ul>
            </div>
            <div className="followers grow flex-col text-center border-x-2 border-slate-200">
              <h4>0</h4>
              <ul>
                <li>Followers</li>
              </ul>
            </div>
            <div className="posts grow flex-col text-center">
              <h4>0</h4>
              <ul>
                <li>Post</li>
              </ul>
            </div>
          </div>
          <Link
            to="/profile/edit"
            className="profile-fix w- h-[41px] flex justify-center text-center border-2 border-[#E2E8EE] rounded-md hover:bg-slate-200 active:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              className=" flex align-center mt-2 mr-1">
              <path
                d="M15.1668 5.3266C15.1673 5.23886 15.1505 5.15188 15.1174 5.07066C15.0842 4.98943 15.0353 4.91556 14.9735 4.85326L12.1468 2.0266C12.0845 1.96481 12.0107 1.91593 11.9294 1.88275C11.8482 1.84957 11.7612 1.83276 11.6735 1.83326C11.5858 1.83276 11.4988 1.84957 11.4176 1.88275C11.3363 1.91593 11.2625 1.96481 11.2002 2.0266L9.31351 3.91326L2.02684 11.1999C1.96505 11.2622 1.91617 11.3361 1.88299 11.4173C1.84982 11.4985 1.833 11.5855 1.83351 11.6733V14.4999C1.83351 14.6767 1.90375 14.8463 2.02877 14.9713C2.15379 15.0964 2.32336 15.1666 2.50017 15.1666H5.32684C5.42013 15.1717 5.51344 15.1571 5.60072 15.1238C5.688 15.0905 5.76731 15.0392 5.83351 14.9733L13.0802 7.6866L14.9735 5.83326C15.0344 5.76865 15.0839 5.69428 15.1202 5.61326C15.1266 5.56012 15.1266 5.5064 15.1202 5.45326C15.1233 5.42223 15.1233 5.39096 15.1202 5.35993L15.1668 5.3266ZM5.05351 13.8333H3.16684V11.9466L9.78684 5.3266L11.6735 7.21326L5.05351 13.8333ZM12.6135 6.27326L10.7268 4.3866L11.6735 3.4466L13.5535 5.3266L12.6135 6.27326Z"
                fill="#546371"
              />
            </svg>
            <p className="text-sl py-1">Профайл засах</p>
          </Link>
        </div>
      </div>
    );
}