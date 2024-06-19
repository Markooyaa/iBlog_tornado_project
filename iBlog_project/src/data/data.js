const menus = [
    {
        id: 1,
        name: 'LifeStyle',
        path: '/lifestyle',
        children: [
            {
                id: 1,
                name: 'Hobby',
                path: '/hobby'
            },
            {
                id: 2,
                name: 'Travel',
                path: '/travel'
            },
            {
                id: 3,
                name: 'Food&Beverage',
                path: '/food'
            },
            {
                id: 4,
                name: 'Home&Decor',
                path: "/home"
            }
        ]

    },
    {
        id: 2,
        name: 'Sport',
        path: '/sport',
        children: [
            {
                id: 1,
                name: 'Soccer',
                path: '/soccer'
            },
            {
                id: 2,
                name: 'Volleyball',
                path: '/volleyball'
            }
        ]
    },
    {
        id: 3,
        name: 'Technology',
        path: '/technology',
        children: []
    },
    {
        id: 4,
        name: 'Entertainment',
        path: '/entertainmen',
        children: []
    }
]

export default menus