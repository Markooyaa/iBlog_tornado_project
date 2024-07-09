import { Link, useLocation, useParams } from "react-router-dom"
import { cardsData } from "../data/data"

export default function PostDetailComponent() {

    const params  = useParams()
    const blog = cardsData.filter(c => c.id == params.id)
   
    
    
    return (
        
        <div className="content flex flex-col m-auto gap-[16px]  w-full sm:m-[30px] sm:pr-[50px] ">
            {blog &&  <div className="flex items-center gap-[5px] h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <Link to="/" className="text-[18px] text-gray-600">Нүүр хуудас</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] pr-[16px] py-10px]">
                    <Link to={`/${blog[0].category}`} className="text-[18px] text-gray-600 capitalize">{blog[0].category} </Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                
                {blog[0].categoryid!=''? <div className="flex items-center gap-[5px] pr-[16px] py-10px]">
                    <Link to={`/${blog[0].category}/${blog[0].categoryid}`} className="text-[18px] text-gray-600 capitalize">{blog[0].categoryid}</Link>
                    <i className="fa-solid fa-angle-right"></i>
                </div>:''}
                <div className="hidden sm:flex items-center gap-[5px] pr-[16px] py-10px]">
                    <p className="text-[18px] font-bold text-gray-600 capitalize">{blog[0].title}</p>
                </div>
            </div>}
           
           <div className="flex justify-center">
           <div className="sm:w-full w-[328px] ">
            <Profile url={blog[0].profile} username={blog[0].username}/>
            <img src="/Images/Rectangle 2.jpg" className="w-full"/>
            <h2 className="text-[24px] sm:text-[29px] font-semibold leading-[43px]">    {blog[0].title}</h2>
            <LikeShare like={blog[0].likes} />
            <Texts  text={blog[0].text}/>
            </div>
           </div>
        </div>
    
    )
}

function LikeShare({like}) {
    return (
        <div className="flex justify-between items-center w-full mr-[50px]">
            <div className="flex items-center gap-[10px] w-">
                <button>
                    <i className="fa-regular fa-heart"></i>
                </button>
                <p className="text-[20px] leading-[26px]">{like}</p>
            </div>
            <div className="flex p-[5px] items-center">
            <button className="text-[15px] leading-[20px] flex p-[5px] items-center gap-[7px] rounded-[5px] bg-blue-600 text-gray-50">
                    <i className="fa-brands fa-facebook-f ml-[3px]"></i>
                        Share
                    </button>
            </div>
        </div>
    )
}

function Profile({url,username}) {
    return (
        <div className="w-full sm:w-[310px] mb-[10px]">
            <div className="user  flex gap-[56px] items-center">
               
               <Link to={'/othersprofile'} className="account inline-flex items-center gap-[10px]">
                    <img src={url} />
                    <p className="text-[18px] font-semibold text-slate-700">{username}</p>
                </Link>
             
                <button className="text-[18px] font-semibold text-blue-500">Follow</button>
            </div>
        </div>
    )
}

function Texts({text}) {
    return (
        <p className="flex flex-wrap w-full">{text}</p>
    )
}