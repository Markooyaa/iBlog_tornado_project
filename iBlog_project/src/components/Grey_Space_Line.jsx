export function GreyLine({text}) {
    return (
        
        <div className="lg:w-[478px] w-[335px] flex justify-center">
        <div className="border-t-grey border-t-[1px] block lg:w-[120px] w-[50px] mt-[13px] mr-[8px]"></div>
        <p className="text-center text-[#B3B6B9]">{text}</p>
        <div className="border-t-grey border-t-[1px] block lg:w-[120px] w-[50px] mt-[13px] ml-[8px]"></div>
    </div>
       
    )
}