import { Link } from "react-router-dom"

export default function HeaderComponent() {
    return (
            <div className="hidden max-w-full sm:flex px-12 py-10 justify-between items-center gap-28 border-b-[1px]">
                <div className="flex justify-between items-center rounded-full border-solid border-[1px] w-full">
                    <input type="text" placeholder="Хайх" className="text-[16px]  h-10 rounded-full px-6" />
                </div>
                <div className="flex justify-end items-start gap-3.5">
                    <Button
                        url="/createAccount"
                        name="Бүртгүүлэх"
                        className="px-7 py-2.5 border-[1px] border-solid rounded-[10px] text-orange-500 text-base font-semibold leading-[21px]"
                    />
                    <Button
                        url="/login"
                        name="Нэвтрэх"
                        className="px-7 py-2.5 border-[1px] border-solid rounded-[10px] bg-orange-500 text-white text-base font-semibold leading-[21px]" />
                </div>
           
            
        </div>
    )
}

function Button(props) {
    return (
        <a href={props.url} className={props.className}>
            {props.name}
        </a>
    )
}

