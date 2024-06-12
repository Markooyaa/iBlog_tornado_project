import Posts from "./Posts";

export default function MainPage(){
    return(
        <div className="inline-flex flex-col sm:items-center sm:justify-center gap-[16px] sm:m-[30px] items-start w-full">
            <Posts category='lifestyle' />
            <Posts category='technology' />
            <Posts category='health' />
        </div>
    )
}