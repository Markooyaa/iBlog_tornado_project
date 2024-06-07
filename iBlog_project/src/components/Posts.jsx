import Card from "./Card";


export default function Posts() {
    const cardsData = [
        {
            url: "/img/Rectangle 39.jpg",
            title: 'TITLE 1',
            username: 'Maral',
            date: 'Jun 7 2024',
            likes: '5',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'TITLE 2',
            username: 'Maral',
            date: 'Jun 7 2024',
            likes: '5',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'TITLE 3',
            username: 'Maral',
            date: 'Jun 7 2024',
            likes: '5',
            profile: '/img/Image 2.jpg',
        },
        {
            url: "/img/Rectangle 39.jpg",
            title: 'TITLE 4',
            username: 'Maral',
            date: 'Jun 7 2024',
            likes: '5',
            profile: '/img/Image 2.jpg',
        },
    ]
    
    return (
        <div className="flex gap-[8px] flex-wrap">
            {
               cardsData.map((data, index) => <Card key={index} url={data.url} title={data.title} username={data.username} date={data.date} likes={data.likes} profile={data.profile} />
               )
            }
        </div>
    )
}