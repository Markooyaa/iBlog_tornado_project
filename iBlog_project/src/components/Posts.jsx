import { Card } from "./Card";
import { cardsData } from "../data/data";
import { Link } from "react-router-dom";
import { BiArrowBack, BiArrowFromBottom, BiArrowFromLeft, BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import { TbArrowBarToRight } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Posts(props) {
  const List = cardsData.filter(
    (cardsData) => cardsData.category === props.category
  );

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);



  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <div className="relative   flex flex-col flex-wrap gap-[16px] w-full">
      <div className="flex justify-between">
        <h2 className="uppercase font-bold flex items-center gap-[10px] px-[18px] py-[11px] text-[18px] leading-[24px] justify-center">
          {props.category}
        </h2>
        <Link
          to={{ pathname: `/${props.category}`, state: props }}
          className="text-gray-600 flex items-center justify-end gap-[11px] px-[14px] py-0 text-center leading-[29px]"
        >
           <p className="hidden sm:flex">Бүгд</p>
          <svg
           className=""
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M14.647 11.0187L9.49537 5.87616C9.41076 5.79085 9.31009 5.72314 9.19917 5.67693C9.08826 5.63072 8.96929 5.60693 8.84914 5.60693C8.72898 5.60693 8.61002 5.63072 8.4991 5.67693C8.38819 5.72314 8.28752 5.79085 8.20291 5.87616C8.03338 6.0467 7.93823 6.27739 7.93823 6.51784C7.93823 6.7583 8.03338 6.98899 8.20291 7.15953L12.7083 11.7105L8.20291 16.2159C8.03338 16.3864 7.93823 16.6171 7.93823 16.8575C7.93823 17.098 8.03338 17.3287 8.20291 17.4992C8.2872 17.5852 8.38773 17.6536 8.49866 17.7005C8.60959 17.7474 8.72871 17.7718 8.84914 17.7723C8.96956 17.7718 9.08869 17.7474 9.19962 17.7005C9.31055 17.6536 9.41107 17.5852 9.49537 17.4992L14.647 12.3567C14.7394 12.2714 14.8131 12.168 14.8636 12.0529C14.914 11.9377 14.94 11.8134 14.94 11.6877C14.94 11.562 14.914 11.4377 14.8636 11.3225C14.8131 11.2074 14.7394 11.1039 14.647 11.0187Z"
              fill="#546371"
            />
          </svg>
        </Link>
       
      </div>
      
       

        
      <div className="flex   items-center flex-wrap w-full pb-2 overflow-x-auto " ref={elementRef}>
      <FaChevronLeft
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          
        className={`text-[#546371] p-[15px] shadow-black shadow-2xl absolute left-5  w-[52px] h-[52px] rounded-full  bg-white ${arrowDisable==true?'hidden':'sm:flex'} `}
          
        />
      <FaChevronRight
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);  
          }}
        
         className="text-[#546371] p-[15px] shadow-black shadow-2xl absolute right-5    w-[52px] h-[52px] rounded-full  bg-white  sm:flex"
        />
      <div className="flex items-start gap-[8px] sm:gap-[22px] px-[20px]" >
          {List &&
            List.map((data, index) => {
              if (index   ) {
                return (
                  <Card
                    key={index}
                    id={data.id}
                    url={data.url}
                    title={data.title}
                    username={data.username}
                    date={data.date}
                    likes={data.likes}
                    profile={data.profile}
                    category={data.category}
                    categoryid={data.categoryid}
                  />
                );
              }
            })}
        </div>
        
      </div>
    </div>
  );
}
