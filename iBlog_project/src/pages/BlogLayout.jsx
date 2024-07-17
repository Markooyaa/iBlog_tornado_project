import { Link, Outlet, useParams } from "react-router-dom";
import HeaderComponent from "../components/Header";
import SideBarComponent from "../components/SideBarComponent";
import { useState } from "react";
import SidebarMobile from "../components/SideBarMobile";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import MobileBottomBtns from "../components/MobileBottomBtns";

export default function BlogLayout() {
    function Buttons(){
        return(
            <div className="sticky bottom-0 flex w-full">
      <div className="w-full sm:hidden flex justify-between sm: h-[79px] bg-white border-t-2 border-slate-200  sm: px-[20px] sm: pt-[16px]">
      <Link className="w-[28px] h-[28px]" to={'/'}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M23.3334 9.3331L16.3334 3.19643C15.6918 2.62248 14.861 2.30518 14.0001 2.30518C13.1392 2.30518 12.3085 2.62248 11.6668 3.19643L4.66678 9.3331C4.29621 9.66452 4.00049 10.0711 3.79933 10.5257C3.59816 10.9804 3.49616 11.4726 3.50011 11.9698V22.1664C3.50011 23.0947 3.86886 23.9849 4.52524 24.6413C5.18161 25.2977 6.07185 25.6664 7.00011 25.6664H21.0001C21.9284 25.6664 22.8186 25.2977 23.475 24.6413C24.1314 23.9849 24.5001 23.0947 24.5001 22.1664V11.9581C24.5024 11.4629 24.3996 10.9729 24.1985 10.5204C23.9974 10.0679 23.7025 9.66321 23.3334 9.3331ZM16.3334 23.3331H11.6668V17.4998C11.6668 17.1903 11.7897 16.8936 12.0085 16.6748C12.2273 16.456 12.524 16.3331 12.8334 16.3331H15.1668C15.4762 16.3331 15.7729 16.456 15.9917 16.6748C16.2105 16.8936 16.3334 17.1903 16.3334 17.4998V23.3331ZM22.1668 22.1664C22.1668 22.4758 22.0439 22.7726 21.8251 22.9914C21.6063 23.2102 21.3095 23.3331 21.0001 23.3331H18.6668V17.4998C18.6668 16.5715 18.298 15.6813 17.6417 15.0249C16.9853 14.3685 16.095 13.9998 15.1668 13.9998H12.8334C11.9052 13.9998 11.0149 14.3685 10.3586 15.0249C9.70219 15.6813 9.33344 16.5715 9.33344 17.4998V23.3331H7.00011C6.69069 23.3331 6.39395 23.2102 6.17515 22.9914C5.95636 22.7726 5.83344 22.4758 5.83344 22.1664V11.9581C5.83365 11.7924 5.86914 11.6287 5.93753 11.4779C6.00593 11.327 6.10566 11.1924 6.23011 11.0831L13.2301 4.9581C13.443 4.77106 13.7167 4.66791 14.0001 4.66791C14.2835 4.66791 14.5572 4.77106 14.7701 4.9581L21.7701 11.0831C21.8946 11.1924 21.9943 11.327 22.0627 11.4779C22.1311 11.6287 22.1666 11.7924 22.1668 11.9581V22.1664Z" fill="#E86B02" />
          </svg>
         </Link>




         <Link className="w-[28px] h-[28px]" to={'/profile/add'}>
        <svg 
        className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none">
          <path
            d="M14.3327 2.33325C12.0252 2.33325 9.76961 3.01749 7.85103 4.29944C5.93246 5.58139 4.43712 7.40347 3.55409 9.53528C2.67107 11.6671 2.44003 14.0129 2.89019 16.276C3.34035 18.5391 4.4515 20.6179 6.08311 22.2495C7.71472 23.8811 9.79352 24.9923 12.0566 25.4424C14.3197 25.8926 16.6655 25.6615 18.7973 24.7785C20.9291 23.8955 22.7512 22.4001 24.0332 20.4816C25.3151 18.563 25.9994 16.3074 25.9994 13.9999C25.9994 12.4678 25.6976 10.9507 25.1113 9.53528C24.525 8.11981 23.6656 6.83369 22.5823 5.75034C21.4989 4.66699 20.2128 3.80763 18.7973 3.22132C17.3819 2.63502 15.8648 2.33325 14.3327 2.33325ZM14.3327 23.3333C12.4867 23.3333 10.6822 22.7859 9.14736 21.7603C7.61251 20.7347 6.41623 19.2771 5.70981 17.5716C5.00339 15.8662 4.81856 13.9896 5.17869 12.1791C5.53882 10.3686 6.42773 8.70555 7.73302 7.40026C9.03831 6.09497 10.7014 5.20605 12.5118 4.84592C14.3223 4.48579 16.199 4.67063 17.9044 5.37704C19.6098 6.08346 21.0675 7.27974 22.0931 8.8146C23.1186 10.3495 23.666 12.154 23.666 13.9999C23.666 16.4753 22.6827 18.8492 20.9324 20.5996C19.182 22.3499 16.808 23.3333 14.3327 23.3333ZM18.9994 12.8333H15.4994V9.33325C15.4994 9.02383 15.3764 8.72709 15.1576 8.50829C14.9389 8.2895 14.6421 8.16658 14.3327 8.16658C14.0233 8.16658 13.7265 8.2895 13.5077 8.50829C13.2889 8.72709 13.166 9.02383 13.166 9.33325V12.8333H9.66602C9.3566 12.8333 9.05985 12.9562 8.84106 13.175C8.62227 13.3938 8.49935 13.6905 8.49935 13.9999C8.49935 14.3093 8.62227 14.6061 8.84106 14.8249C9.05985 15.0437 9.3566 15.1666 9.66602 15.1666H13.166V18.6666C13.166 18.976 13.2889 19.2728 13.5077 19.4915C13.7265 19.7103 14.0233 19.8333 14.3327 19.8333C14.6421 19.8333 14.9389 19.7103 15.1576 19.4915C15.3764 19.2728 15.4994 18.976 15.4994 18.6666V15.1666H18.9994C19.3088 15.1666 19.6055 15.0437 19.8243 14.8249C20.0431 14.6061 20.166 14.3093 20.166 13.9999C20.166 13.6905 20.0431 13.3938 19.8243 13.175C19.6055 12.9562 19.3088 12.8333 18.9994 12.8333Z"
            fill="#546371"
          />
        </svg>
        </Link>

       <Link className="w-[28px] h-[28px]" to={'/likedposts'}>
       <svg
       className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none">
          <path
            d="M24.187 5.83336C22.9503 4.59344 21.3109 3.83666 19.5651 3.69973C17.8192 3.5628 16.0819 4.05474 14.667 5.0867C13.1826 3.98261 11.335 3.48196 9.49623 3.68557C7.65748 3.88919 5.96417 4.78194 4.75729 6.18405C3.55041 7.58615 2.91961 9.39347 2.99192 11.242C3.06423 13.0906 3.83428 14.8431 5.14699 16.1467L12.392 23.4034C12.9987 24.0004 13.8158 24.3351 14.667 24.3351C15.5182 24.3351 16.3353 24.0004 16.942 23.4034L24.187 16.1467C25.5492 14.7762 26.3137 12.9223 26.3137 10.99C26.3137 9.05771 25.5492 7.20389 24.187 5.83336ZM22.542 14.5367L15.297 21.7817C15.2145 21.8649 15.1164 21.931 15.0083 21.9761C14.9002 22.0212 14.7842 22.0444 14.667 22.0444C14.5498 22.0444 14.4338 22.0212 14.3257 21.9761C14.2176 21.931 14.1194 21.8649 14.037 21.7817L6.79199 14.5017C5.87704 13.5664 5.3647 12.3101 5.3647 11.0017C5.3647 9.69332 5.87704 8.43696 6.79199 7.5017C7.72434 6.58118 8.98179 6.06503 10.292 6.06503C11.6022 6.06503 12.8596 6.58118 13.792 7.5017C13.9004 7.61105 14.0295 7.69784 14.1716 7.75707C14.3138 7.8163 14.4663 7.8468 14.6203 7.8468C14.7743 7.8468 14.9268 7.8163 15.069 7.75707C15.2112 7.69784 15.3402 7.61105 15.4487 7.5017C16.381 6.58118 17.6385 6.06503 18.9487 6.06503C20.2589 6.06503 21.5163 6.58118 22.4487 7.5017C23.3762 8.42471 23.9053 9.67425 23.9228 10.9827C23.9402 12.2911 23.4446 13.5543 22.542 14.5017V14.5367Z"
            fill="#546371"
          />
        </svg>
       </Link>
        
       

         <Link className="w-[28px] h-[28px]"  to={'/profile'}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
          <path d="M18.3286 15.3286C19.4724 14.4287 20.3072 13.1946 20.717 11.7982C21.1268 10.4017 21.0911 8.9122 20.615 7.53694C20.1388 6.16168 19.2459 4.96902 18.0603 4.12489C16.8748 3.28077 15.4556 2.82715 14.0002 2.82715C12.5449 2.82715 11.1257 3.28077 9.94016 4.12489C8.75461 4.96902 7.86164 6.16168 7.38549 7.53694C6.90933 8.9122 6.87367 10.4017 7.28346 11.7982C7.69325 13.1946 8.52812 14.4287 9.67191 15.3286C7.712 16.1138 6.00191 17.4161 4.72395 19.0968C3.44599 20.7775 2.64806 22.7734 2.41524 24.8719C2.39839 25.0251 2.41188 25.1801 2.45494 25.3281C2.498 25.4761 2.56979 25.6142 2.6662 25.7344C2.86093 25.9773 3.14415 26.1329 3.45357 26.1669C3.76299 26.2009 4.07326 26.1107 4.31612 25.9159C4.55898 25.7212 4.71454 25.438 4.74857 25.1286C5.00476 22.8479 6.09221 20.7417 7.80316 19.2122C9.51412 17.6826 11.7286 16.8371 14.0236 16.8371C16.3185 16.8371 18.533 17.6826 20.244 19.2122C21.9549 20.7417 23.0424 22.8479 23.2986 25.1286C23.3303 25.4152 23.4671 25.68 23.6825 25.8717C23.898 26.0635 24.1768 26.1686 24.4652 26.1669H24.5936C24.8994 26.1317 25.1789 25.9771 25.3712 25.7367C25.5635 25.4963 25.653 25.1896 25.6202 24.8836C25.3863 22.7791 24.5841 20.778 23.2996 19.0948C22.015 17.4116 20.2966 16.1096 18.3286 15.3286ZM14.0002 14.5002C13.0773 14.5002 12.175 14.2265 11.4076 13.7138C10.6402 13.201 10.042 12.4721 9.6888 11.6194C9.33559 10.7667 9.24318 9.82838 9.42324 8.92314C9.60331 8.01789 10.0478 7.18637 10.7004 6.53373C11.3531 5.88108 12.1846 5.43663 13.0898 5.25656C13.9951 5.0765 14.9334 5.16891 15.7861 5.52212C16.6388 5.87533 17.3677 6.47347 17.8804 7.2409C18.3932 8.00833 18.6669 8.91058 18.6669 9.83356C18.6669 11.0712 18.1752 12.2582 17.3001 13.1334C16.4249 14.0086 15.2379 14.5002 14.0002 14.5002Z" fill="#546371" />
        </svg>
        </Link>
        
      </div>
    </div>
        )
    }
    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <div className="flex w-full">
        <div>
            <SideBarComponent showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className="sm:w-[79%] w-full flex flex-col border-l-[1px] border-solid">
            <HeaderComponent />
            
            <Outlet />
            <Footer />
           <Buttons/>
            
        </div>
    </div>

    )
}