import { Link } from "react-router-dom"
export default function OtherProfile(props) {
    console.log(props.post)
    return (
        <div className="flex">
            <div className="left-container  w-full flex flex-col grow border-5 p-6 sm:gap-5 gap-[16px]">
                <div
                    className="profile flex border-5 gap-4 mx-[24px] 
            ">
                    <div className="image sm:h-[85px] h-[60px] sm:w-[85px] rounded-full [60px] flex items-center ">
                      <img src=  {props.profile} alt="" className="w-full h-full    "/>

                    </div>
                    <div className="profile-name flex items-center w-fit">
                        <div className="name w-fit font-normal sm:text-[34px] text-[18px] align-middle">
                        {props.username}
                        </div>
                    </div>
                </div>
                <div className="details flex">
                    <div className="follows grow flex-col text-center">
                        <h4>{props.follows}</h4>
                        <ul>
                            <li>Follows</li>
                        </ul>
                    </div>
                    <div className="followers grow flex-col text-center border-x-2 border-slate-200">
                        <h4>{props.followers}</h4>
                        <ul>
                            <li>Followers</li>
                        </ul>
                    </div>
                    <div className="posts grow flex-col text-center">
                        <h4>{props.post}</h4>
                        <ul>
                            <li>Post</li>
                        </ul>
                    </div>
                </div>
                <Link
                    className="profile-fix w- h-[41px] flex justify-center items-center text-center rounded-md bg-orange-500">

                    <p className="leading-[21px] text-white">Дагах</p>
                </Link>
            </div>
        </div>
    )
}