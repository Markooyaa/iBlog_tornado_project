const menus = [
    {
        id: 1,
        name: 'lifestyle',
        title: "Lifestyle",
        path: '/lifestyle',
        children: [
            {
                id: 1,
                name: 'Hobby',
                path: '/lifestyle/hobby'
            },
            {
                id: 2,
                name: 'Travel',
                path: '/lifestyle/travel'
            },
            {
                id: 3,
                name: 'Food&Beverage',
                path: '/lifestyle/food'
            },
            {
                id: 4,
                name: 'Home&Decor',
                path: "/lifestyle/home"
            }
        ]

    },
    {
        id: 2,
        name: 'sport',
        title: "Sport",
        path: '/sport',
        children: [
            {
                id: 1,
                name: 'Soccer',
                path: '/sport/soccer'
            },
            {
                id: 2,
                name: 'Volleyball',
                path: '/sport/volleyball'
            }
        ]
    },
    {
        id: 3,
        name: 'technology',
        title: "Technology",
        path: '/technology',
        children: []
    },
    {
        id: 4,
        name: 'entertainment',
        title: 'Entertainment',
        path: '/entertainment',
        children: []
    }
]
const cardsData = [
    {
        id: 1,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 2,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'

    },
    {
        id: 3,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 4,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 5,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 6,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 7,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 8,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'hobby'
    },
    {
        id: 9,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 10,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'

    },
    {
        id: 11,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 12,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 13,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 14,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 15,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 16,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'travel'
    },
    {
        id: 17,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 18,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'

    },
    {
        id: 19,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 20,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 21,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 22,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 23,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 24,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'food'
    },
    {
        id: 25,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 26,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'

    },
    {
        id: 27,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 28,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 29,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 30,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 31,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
    {
        id: 32,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of Technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'Lifestyle',
        categoryid:'home'
    },
]

export  {menus ,cardsData}
