const menus = [
    {
        id: 1,
        name: 'lifestyle',
        title: "lifestyle",
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
        title: "sport",
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
        title: "technology",
        path: '/technology',
        children: []
    },
    {
        id: 4,
        name: 'entertainment',
        title: 'entertainment',
        path: '/entertainment',
        children: []
    }
]
const cardsData = [
    {
        id: 1,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 2,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'

    },
    {
        id: 3,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 4,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 5,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 6,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 7,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 8,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 9,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 10,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'

    },
    {
        id: 11,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 12,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 13,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 14,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 15,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 16,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 17,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 18,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'

    },
    {
        id: 19,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 20,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 21,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 22,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 23,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 24,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 25,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 26,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'

    },
    {
        id: 27,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 28,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 29,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 30,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 31,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 32,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },{
        id: 33,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 34,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'

    },
    {
        id: 35,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 36,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 37,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 38,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 39,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 40,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 41,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 42,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'

    },
    {
        id: 43,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 44,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 45,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 46,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 47,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 48,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 49,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 50,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''

    },
    {
        id: 51,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 52,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 53,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 54,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id:55,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 56,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 57,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 58,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''

    },
    {
        id: 59,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 60,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 61,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 62,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 63,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 64,
        url: "/img/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/img/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
]

export  {menus ,cardsData}
