import { Link } from "react-router-dom";

export default function MobileFooter(props) {
    return (
        <div  className='bottom-bar sm:hidden flex h-[95px] justify-between items-start pt-[16px] pr-[20px] pl-[20px] border-t-[1px]' >
                <Link><i className="fa-solid fa-house"></i></Link>
                <Link><i className="fa-solid fa-circle-plus"></i></Link>
                <Link><i className="fa-regular fa-heart"></i></Link>
                <Link><i className="fa-regular fa-user"></i></Link>
        </div>
    )
}