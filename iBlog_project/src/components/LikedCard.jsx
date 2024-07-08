import { Link } from "react-router-dom";

function LikedCard(props) {
  return (
    <>
      <div className="hidden justify-center card sm:flex flex-col gap-[8px] sm:gap-[10px] pb-[10px] sm:p-[10px] shadow-md rounded-[8px] w-[158px] sm:w-[230px]">
        <Link to={{ pathname: `/postDetail/${props.id}`, state: props }}>
          <div className="flex flex-col items-start gap-[5px]">
            <img src={props.url} />
            <p className="px-[10px] sm:px-0 leading-[16px] sm:leading-[18px] text-[14px] sm:text-[16px] font-medium sm:font-semibold">
              {props.title}
            </p>
          </div>
        </Link>
        <div className="frame flex sm:flex-row items-start sm:items-center px-[10px] sm:p-0 sm:justify-stretch gap-[8px]">
          <img src={props.profile} className="w-[20px]" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-normal flex-grow">
            <p className="text-[14px] leading-[14px] text-gray-400">
              {props.username}
            </p>
            <p className="text-[12px] leading-[11px] text-gray-400">
              {props.date}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-[10px] sm:p-0">
          <div className="flex items-center gap-[4px]">
            <p className="text-[16px] leading-[20px]">
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
              {props.likes}
            </p>
          </div>
          <div className="flex p-[5px] items-center">
            <button className="text-[15px] leading-[20px] flex p-[5px] items-center gap-[7px] rounded-[5px] bg-blue-600 text-gray-50">
              <i className="fa-brands fa-facebook-f ml-[3px]"></i>
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex gap-[8px] w-[335px] rounded-[7px] shadow-md">
        <Link to={{ pathname: `/postDetail/${props.id}`, state: props }}>
          <div className="w-[158px] h-[145px]">
            <img src={props.url} className="h-full"/>
          </div>
        </Link>
        <div className="w-[158px] h-[128px] flex flex-col gap-[10px]">
          <p className="text-[15px] leading-[17px] font-semibold">{props.title}</p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex">
              <div className="flex items-center gap-[5px]">
                <img src={props.profile} className="w-[25px]" />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <p className="text-[14px] leading-[14px] text-gray-400">
                  {props.username}
                </p>
                <p className="text-[12px] leading-[11px] text-gray-400">
                  {props.date}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px]">
                <p className="text-[16px] leading-[20px]">
                  <button>
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  {props.likes}
                </p>
              </div>
              <div className="flex p-[3px] items-center">
                <button className="text-[15px] leading-[20px] flex p-[5px] items-center gap-[7px] rounded-[5px] bg-blue-600 text-gray-50">
                  <i className="fa-brands fa-facebook-f mx-[3px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikedCard;
