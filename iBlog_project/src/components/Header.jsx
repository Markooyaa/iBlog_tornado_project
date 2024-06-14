export default function HeaderComponent() {
    return (
        <div>
            <div className="hidden sm:flex px-12 py-10 justify-end items-center gap-28 border-b-[1px]">
                <div className="flex px-6 py-0 justify-between items-center rounded-full border-solid border-[1px]">
                    <input type="text" placeholder="Хайх" className="text-[16px] w-[572px] h-10 rounded-full" />
                </div>
                <div className="flex justify-end items-start gap-3.5">
                    <Button
                        url="#"
                        name="Бүртгүүлэх"
                        class="px-7 py-2.5 border-[1px] border-solid rounded-[10px] text-orange-500 text-base font-semibold leading-[21px]"
                    />
                    <Button
                        url="#"
                        name="Нэвтрэх"
                        class="px-7 py-2.5 border-[1px] border-solid rounded-[10px] bg-orange-500 text-white text-base font-semibold leading-[21px]" />
                </div>
            </div>
            
        </div>
    )
}

function Button(props) {
    return (
        <a href={props.url}>
            <button className={props.class}>{props.name}</button>
        </a>
    )
}

