export default function Footer() {
    return(
        <div className="inline-flex sm:flex flex-col items-start gap-[20px] sm:gap-[10px] px-[65px] py-[25px] border-t-[1px] sm:h-[190px]">
        <div className="content flex-col sm:flex-row flex gap-[20px] sm:gap-[15px] items-start">
            <div className="flex flex-col items-start w-[216px]">
                <div className="h-[52px]">
                    <div className="flex items-center">
                       
                        <img src="images/Group.png" alt="" />
                        <h2 className="text-orange-400 text-3xl font-normal"><span className="text-[#F77268]">i</span>blog</h2>
                    </div>
                    <p className="text-[10px] text-slate-600">Write, Read, Enjoy</p>
                </div>

            </div>
            <div className="flex sm:justify-center items-start gap-[60px]">
                <div className="flex flex-col items-start gap-[18px]">
                    <h3 className="text-[16px] font-semibold leading-[21px]">Тусламж</h3>
                    <div className="flex flex-col items-start gap-[6px]">
                        <a href="" className="text-[14px] leading-[18px]">Хэрэглэх заавар</a>
                        <a href="" className="text-[14px] leading-[18px]">Санал хүсэлт</a>
                    </div>
                </div>
                <div className="category flex flex-col items-start gap-[18px]">
                    <h3 className="text-[16px] font-semibold leading-[21px]">Бидэнтэй холбогдох</h3>
                    <div className="contact flex flex-col items-start gap-[8px]">
                        <div className="email flex items-center gap-[2px]">

                            <a href="" className="text-[14px] leading-[18px]">info@jstemplate.net</a>
                        </div>
                        <div className="phone flex items-center gap-[2px]">

                            <a href="" className="text-[14px] leading-[18px]">+976 99112344</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}