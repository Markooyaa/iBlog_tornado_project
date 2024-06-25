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
                path: '/lifestyle/Food&Beverage'
            },
            {
                id: 4,
                name: 'Home and decor',
                path: "/lifestyle/Home and decor"
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
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 2,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'

    },
    {
        id: 3,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 4,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 5,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 6,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 7,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 8,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 9,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 10,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'

    },
    {
        id: 11,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 12,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 13,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 14,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 15,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 16,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 17,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 18,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'

    },
    {
        id: 19,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 20,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 21,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 22,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 23,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 24,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Food&Beverage'
    },
    {
        id: 25,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 26,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'

    },
    {
        id: 27,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 28,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 29,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 30,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 31,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },
    {
        id: 32,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'Home and decor'
    },{
        id: 33,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 34,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'

    },
    {
        id: 35,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 36,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 37,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 38,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 39,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 40,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 41,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 42,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'

    },
    {
        id: 43,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 44,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 45,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 46,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 47,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 48,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 49,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 50,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''

    },
    {
        id: 51,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 52,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 53,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 54,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id:55,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 56,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 57,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 58,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''

    },
    {
        id: 59,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 60,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 61,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 62,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 63,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    
    {
        id: 64,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 65,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 66,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 67,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 68,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 69,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 70,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 71,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 72,
        url: "/images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
]

export  {menus ,cardsData}
