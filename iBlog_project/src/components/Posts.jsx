import Card from "./Card";


export default function Posts(props) {
    const cardsData = [
        {
            url: "/img/Rectangle 39.jpg",
            title: 'The Impact of Technology on the Workplace',
            username: 'Tracey Wilson',
            date: 'Aug 20 2022',
            likes: '23',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'The Impact of Technology on the Workplace',
            username: 'Tracey Wilson',
            date: 'Aug 20 2022',
            likes: '23',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'The Impact of Technology on the Workplace',
            username: 'Tracey Wilson',
            date: 'Aug 20 2022',
            likes: '23',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'The Impact of Technology on the Workplace',
            username: 'Tracey Wilson',
            date: 'Aug 20 2022',
            likes: '23',
            profile: '/img/Image 2.jpg',
        },
    ]

    return (
        <div className="flex flex-col flex-wrap gap-[16px]">
            <div className="flex sm:justify-between">
                <h2 className="uppercase font-bold flex items-center gap-[10px] px-[18px] py-[11px] text-[18px] leading-[24px] justify-center">
                    {props.category}
                </h2>
                <button className="text-gray-600 hidden sm:flex items-center justify-end gap-[11px] px-[14px] py-0 text-center leading-[29px]">
                    Бүгд
                </button>
            </div>
            <div className="flex sm:justify-end items-center flex-wrap w-full overflow-x-scroll pb-2">
                <div className="flex gap-[8px] sm:gap-[22px] flex-wrap px-[20px]">
                    {cardsData &&
                        cardsData.map((data, index) => {
                            return (
                                <Card key={index}
                                    url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}