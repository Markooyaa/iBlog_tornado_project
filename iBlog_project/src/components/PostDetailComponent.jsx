export default function PostDetailComponent(props) {
    return (
        <div className="content flex flex-col items-start gap-[16px] m-auto w-[328px] sm:w-[900px] pb-[30px]">
            <div className="hidden sm:flex items-center gap-[5px] h-[75px]">
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <a href="./home.html" className="text-[18px] text-gray-600">Нүүр хуудас</a>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <p className="text-[18px] text-gray-600 capitalize">{props.category}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <p className="text-[18px] text-gray-600 capitalize">{props.title}</p>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className="flex items-center gap-[5px] px-[16px] py-10px]">
                    <p className="text-[18px] font-bold text-gray-600">{props.postname}</p>
                </div>
            </div>
            <Profile />
            <img src="/img/Rectangle 2.jpg" />
            <h2 className="text-[24px] sm:text-[29px] font-semibold leading-[43px]">Theme Installation</h2>
            <LikeShare />
            <Texts />
        </div>
    )
}

function LikeShare() {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-[10px] w-">
                <button>
                    <i className="fa-regular fa-heart"></i>
                </button>
                <p className="text-[20px] leading-[26px]">23</p>
            </div>
            <div className="flex p-[5px] items-center">
                <button className="text-[15px] leading-[20px] flex p-[5px] items-center gap-[4px] rounded-[5px] bg-blue-600 text-gray-50">
                    Share
                </button>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div className="w-full sm:w-[310px]">
            <div className="user flex justify-between items-center">
                <div className="account inline-flex items-center gap-[10px]">
                    <img src="/img/Image 2.jpg" />
                    <p className="text-[18px] font-semibold text-slate-700">Tracey Willson</p>
                </div>
                <button className="text-[18px] font-semibold text-blue-500">Follow</button>
            </div>
        </div>
    )
}

function Texts() {
    return (
        <p className="flex flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum temporibus cum deserunt eos accusamus necessitatibus dolorum soluta tempora? Quo mollitia illo nihil ut, cupiditate dicta! Provident nisi soluta nulla hic excepturi, nihil, illo id accusantium magni quia ipsum itaque architecto pariatur eos rem eius, adipisci eum. Ea officiis cum nisi velit deleniti fugit laborum quam? Eligendi corrupti repudiandae voluptatum ab unde laboriosam atque praesentium debitis rerum natus labore cumque quas, laudantium, dignissimos nostrum ea quaerat dolores porro alias repellat ipsam nihil, nesciunt saepe! Quidem officia cupiditate accusamus odit, libero assumenda natus nisi laborum culpa vitae illo harum rem placeat eaque perspiciatis expedita mollitia deleniti repellat non id blanditiis. Quia provident maxime sunt quam? Totam odio sed aperiam aliquam fugit, at non illo placeat ratione dolorem tempora veniam neque, autem, debitis ullam est rerum quisquam hic voluptate atque perspiciatis ab quo. Aspernatur est eius aperiam vel, obcaecati labore vitae, dignissimos saepe atque veniam voluptatem eligendi tenetur incidunt dicta suscipit! Labore, fuga. Modi commodi eveniet blanditiis atque sunt inventore iste illo placeat accusantium minima, porro ex sit! Nisi nesciunt repellat maxime fugit sed repudiandae voluptas eaque quia quisquam error explicabo nobis voluptate, ea excepturi exercitationem velit in? Nihil impedit omnis pariatur obcaecati sapiente ullam veritatis at, magnam ratione porro iure sequi repellat reiciendis adipisci optio doloremque quisquam numquam ea eum voluptatibus excepturi beatae? Possimus eius dolore enim eveniet autem tempore repudiandae tempora doloremque incidunt vero obcaecati odio voluptates, debitis numquam, in voluptas culpa fuga deserunt? Eligendi, maxime totam eveniet placeat voluptas consectetur eius praesentium ad error dignissimos soluta ipsum reiciendis, earum culpa tenetur omnis dolor iusto laborum! Recusandae vitae iure, nisi quos reprehenderit perspiciatis illum laboriosam ut at corrupti voluptate pariatur odio esse ipsa. Ipsa, architecto consectetur accusantium dicta eum obcaecati ab ad! Consequatur accusamus fugit consectetur, possimus vero eaque tenetur!</p>
    )
}