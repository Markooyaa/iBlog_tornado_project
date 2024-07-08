


export function Input({ type, placeholder, id, minLength }) {
    return (

        <input id={id} type={type} required className="  rounded-[10px]   pl-4 pr-12 py-2 lg:w-[478px] w-[335px] h-[50px] focus:outline-none focus:-blue-500 lg:my-[12px] my-[8px] bg-[#F5F7F9]" placeholder={placeholder} minLength={minLength} />

    )
}

export function PasswordInput({ type, placeholder,  onClick_button,id,icon}) {
    return(
        <div id={id}>
        <div className="relative">
            <input id="password" required type={type}
                className=" rounded-[10px]  pl-4 pr-12 py-2 lg:w-[478px] w-[335px]  h-[50px] focus:outline-none focus:border-blue-500  bg-[#F5F7F9] my-[12px]"
                placeholder={placeholder} minLength="8" />

            <div className="absolute inset-y-0 right-0 flex items-center px-3" onClick={onClick_button}>
               {icon}
            </div>

        </div>
    </div>
    )
}