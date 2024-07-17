import { useEffect, useRef, useState } from "react";
import { menus } from "../data/data";
import { BiDownArrow, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { BsGraphDownArrow } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Category(){
  const [value, setValue] = useState("Select category...");
    return(
<div className="">
  <p className="text-[#000] text-[18px] font-bold mb-[10px] mt-[20px] ">
    Категори сонгох
  </p>
  <div
    name="category"
    id="gategories"
    className="">
    <SearchableDropdown
    options={menus}
    label="title"
    id="id"
    selectedVal={value}
    handleChange={(val) => setValue(val)}/>
    
  </div>
  
</div>
);
}

const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  

  const selectOption = (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return {query};
    if (selectedVal) return selectedVal;
    
    return "";
  };
  console.log(selectedVal)

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className={`relative bg-[#F5F7F9] cursor-default  sm:w-[247px]  w-full items-center h-[60px] border rounded-xl  text-[16px] font-medium flex justify-between hover:bg-orange-500 hover:text-white`}>
      <div onClick={()=>setIsOpen(!isOpen)} className="control  w-full items-center hover:text-white flex justify-between mx-[20px]">
        <div className="selected-value  ">
         
           <div
          className={` h-full `}
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggle}>
              {getDisplayValue()}
          </div>
        </div>
       
        {isOpen ? <IoIosArrowUp  className="  block  top-[20px] right-[10px]"/> : <IoIosArrowDown  className="    block  top-[20px] right-[10px]"/>}
      </div>

      <div className={`mt-[5px] absolute z-50 top-full w-full overflow-y-auto border-2 capitalize bg-white shadow-2xl rounded-xl ${isOpen ? "block" : "hidden"}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={` text-black h-[52px] flex items-center justify-center border-b-2 hover:text-white   hover:bg-[#E86B02] ${
                option[label] === selectedVal ? "selected" : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

