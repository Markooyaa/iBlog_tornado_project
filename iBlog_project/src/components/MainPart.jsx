import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";

function MainPart() {
  const [text, setText] = useState('');
  const [textareaHeight, setTextareaHeight] = useState('50px');

  const handleChange = (e) => {
    const maxTextareaHeight = 200;
    const minTextareaHeight = 50;

    setTextareaHeight('auto');
    setText(e.target.value);

    let newHeight = Math.min(Math.max(minTextareaHeight, e.target.scrollHeight), maxTextareaHeight);

    setTextareaHeight(`${newHeight}px`);
  };

  return (
    < div   className=" mb-[10px] " style={{ height: textareaHeight}}>
      <p className="main-section text-[16px] font-bold mb-[10px]">
        Үндсэн хэсэг
      </p>
     
      
         <div className="relative w-full h-[50px] mb-[5%]">
         <textarea
         
        style={{ height: textareaHeight }}
         value={text}
         onChange={handleChange}
          placeholder="Текст эсвэл зураг"
          className={`text-wrap resize-none bg-[#F5F7F9] pr-[24px] w-full pl-[40px] py-[12px] text-[16px]  rounded-2xl`}
        />
        <IoGridOutline className="absolute top-[16.5px] text-[20px] left-[15px]"/>
      </div>
    </div>
  );  
}
export default MainPart