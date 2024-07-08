import { IoGridOutline } from "react-icons/io5";

function MainPart() {
  return (
    <>
      <p className="main-section text-[16px] font-bold mb-[10px]">
        Үндсэн хэсэг
      </p>
      <div className="relative w-full mb-[5%]">
        <input
          type="text"
          name=""
          id=""
          placeholder="Текст эсвэл зураг"
          className="text-wrap pr-[24px] w-full pl-[40px] py-[14px] border-2 rounded-2xl"
        />
        <IoGridOutline className="absolute top-[18px] text-[20px] left-[15px]"/>
      </div>
    </>
  );  
}
export default MainPart