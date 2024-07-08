import { Link } from "react-router-dom";
import UserImage from "./UserImage";

export default function EditProfilePass() {
    
  return (
    <div>
      <div className="sm:w-[600px] w-full  my-0 sm:mt-[35px] mt-0 p-0">
        <p className="sm:text-[18px] text-[14px] font-bold mt-[20px] mb-[10px]">
          Хуучин нууц үг
        </p>
        <input
          type="text"
          className="w-full h-[50px] border-2 px-[24px] py-[14px] rounded-xl mb-[20px] hover:bg-slate-100 active:bg-slate-200"
          placeholder="Нууц үг"
        />
        <p className="sm:text-[18px] text-[14px] font-bold mb-[10px]">
          Шинэ нууц үг
        </p>
        <input
          type="password"
          className="w-full h-[50px] border-2 px-[24px] py-[14px] rounded-xl mb-[10px] hover:bg-slate-100 active:bg-slate-200"
          placeholder="Нууц үг зохиох"
        />
        <input
          type="password"
          className="w-full h-[50px] border-2 px-[24px] py-[14px] rounded-xl mb-[24px] hover:bg-slate-100 active:bg-slate-200"
          placeholder="Нууц үг давтах"
        />
        <button className="float-right sm:flex hidden px-[30px] py-[10px] text-[15px] font-normal rounded-xl text-[#fff] bg-[#E86B02] hover:bg-orange-400 active:bg-orange-600">
          Xадгалах
        </button>
      </div>
    </div>
  );
}
