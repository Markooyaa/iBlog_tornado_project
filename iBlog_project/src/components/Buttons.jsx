
export function Full_colored_button({text,onClick_button,id}) {
    return (
        
            <button className="text-white bg-[#E86B02] lg:rounded-[10px]  rounded-2xl lg:w-[478px] w-[335px] pl-4 pr-4 py-[10px] pr-[30px] pl-[30px]  h-[50px] my-[8px]" onClick={onClick_button} id={id}>
                {text}
            </button>
       
    )
}
export function Gmail_button() {
    return (
        <div className="nevtreh">

        <button className="text-black bg-orange-30 border-[#F9D9BD] border-[1.5px] pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:rounded-[10px]  rounded-2xl lg:w-[478px] w-[335px] h-[50px] my-[8px]">
            <p className=" flex items-center justify-center "> <img src="images/google.png" alt="" className="pr-[10px]" />   Gmail-ээр нэвтрэх</p>
        </button>
    </div>
    )
}

export function Fb_button() {
    return (
        <div className="nevtreh">

        <button className="text-black bg-orange-30 border-[#F9D9BD] border-[1.5px]  pl-4 pr-4 py-[10px] pr-[30px] pl-[30px] lg:rounded-[10px]  rounded-2xl lg:w-[478px] w-[335px] h-[50px] my-[8px] ">
            <p className=" flex items-center justify-center "> <img src="images/fb.png" alt="" className="pr-[10px]" />   Facebook-ээр нэвтрэх</p>
        </button>
    </div>
    )
}