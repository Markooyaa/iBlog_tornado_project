export default function UserEmail() {
  return (
    <>
      <p className="sm:text-[18px] text-[14px] font-bold mb-[10px]">
        И-мэйл хаяг
      </p>
      <input
        type="text"
        className="w-full h-[50px] border-2 px-[24px] py-[14px] rounded-xl mb-[24px] hover:bg-slate-200 active:bg-slate-300 cursor-pointer"
        placeholder="example@gmail.com"
      />
    </>
  );
}
