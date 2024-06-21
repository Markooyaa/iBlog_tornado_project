export default function UserImage(){
    return (
      <div className="sm:flex   sm:gap-[20px] gap-[5px]  sm:pb-0 pb-[20px]">
        <div className="sm:flex flex sm: justify-center">
          <img
            className="sm:size-[85px] size-[55px] flex items-center"
            src="/Images/Profile.jpg"
          />
        </div>
        <p className="flex sm:items-center justify-center text-[16px] font-normal text-slate-600 hover:text-slate-300 active:text-slate-400 ">
          Зураг солих
        </p>
      </div>
    );
}