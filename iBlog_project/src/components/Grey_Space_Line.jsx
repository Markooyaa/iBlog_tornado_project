export function GreyLine({text}) {
    return (
        
        <div class="lg:w-[478px] w-[335px] flex justify-center">
        <div class="border-t-grey border-t-[1px] block lg:w-[120px] w-[50px] mt-[13px] mr-[8px]"></div>
        <p class="text-center text-[#B3B6B9]">{text}</p>
        <div class="border-t-grey border-t-[1px] block lg:w-[120px] w-[50px] mt-[13px] ml-[8px]"></div>
    </div>
       
    )
}