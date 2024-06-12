import Posts from "./Posts";

export default function MainPage() {
    return (
        <div className="inline-flex flex-col sm:items-center sm:justify-center gap-[16px] sm:m-[30px] items-start w-full border-l-[1px]">
            <Posts category='lifestyle' />
            <Posts category='technology' />
            <Posts category='health' />

            <button className="inline-flex px-[20px] py-[12px] justify-center items-center gap-[12px] border-[1px] rounded-[10px]">Цааш унших</button>
        </div>
    )
}