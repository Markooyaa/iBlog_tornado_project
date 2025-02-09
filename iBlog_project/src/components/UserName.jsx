export default function UserName({name}){
    return (
      <div>
        <p className="sm:text-[18px] text-[14px] font-bold mt-[20px] mb-[10px]">
          Нэр
        </p>
        <input
          type="text"
          className="w-full h-[50px] border-2 px-[24px] py-[14px] rounded-xl mb-[20px]"
          placeholder={name}
          
        />
      </div>
    );
}