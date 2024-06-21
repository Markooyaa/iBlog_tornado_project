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
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 2,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'

    },
    {
        id: 3,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 4,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 5,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 6,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 7,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 8,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'hobby'
    },
    {
        id: 9,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 10,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'

    },
    {
        id: 11,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 12,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 13,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 14,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 15,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 16,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'travel'
    },
    {
        id: 17,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 18,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'

    },
    {
        id: 19,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 20,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 21,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 22,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 23,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 24,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'food'
    },
    {
        id: 25,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 26,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'

    },
    {
        id: 27,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 28,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 29,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 30,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 31,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },
    {
        id: 32,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'lifestyle',
        categoryid:'home'
    },{
        id: 33,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 34,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'

    },
    {
        id: 35,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 36,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 37,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 38,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 39,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 40,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'soccer'
    },
    {
        id: 41,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 42,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'

    },
    {
        id: 43,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 44,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 45,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 46,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 47,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 48,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'sport',
        categoryid:'volleyball'
    },
    {
        id: 49,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 50,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''

    },
    {
        id: 51,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 52,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 53,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 54,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id:55,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 56,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'technology',
        categoryid:''
    },
    {
        id: 57,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 58,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''

    },
    {
        id: 59,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 60,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 61,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 62,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 63,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    
    {
        id: 64,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'entertainment',
        categoryid:''
    },
    {
        id: 65,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 66,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 67,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 68,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 69,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 70,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 71,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
    {
        id: 72,
        url: "/Images/Rectangle 39.jpg",
        title: 'The Impact of technology on the Workplace',
        username: 'Tracey Wilson',
        date: 'Aug 20 2022',
        likes: '23',
        profile: '/Images/Image 2.jpg',
        category:'health',
        categoryid:''
    },
]

export  {menus ,cardsData}
