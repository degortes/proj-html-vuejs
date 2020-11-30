var app = new Vue ({
    el: '#root',
    data: {
        navMenu: [
            {
                name: 'Home',
                img: 'home'
            },
            {
                name: 'Pages',
                img: 'document'
            },
            {
                name: 'Blog',
                img: 'printer'
            },
            {
                name: 'Shop',
                img: 'cart'
            },
            {
                name: 'Shortcodes',
                img: 'lab'
            },
            {
                name: 'Support',
                img: 'chat'
            },
            {
                name: 'Contact',
                img: 'envelope'
            },
        ],
        archives: ['october 2014(2)','september 2014(2)','august 2014(2)','july 2014(2)','june 2014(2)','may 2014(1)'],
        features: ['friendly and welcoming place','Science and art classes','Positive learning environment','Educational field trips','Writing and reading classes','Science and art classes'],
        recentPost: [
            {
                name: 'Drawing and Painting Lessons',
                img: 'let',
                date: 'October 03, 2014'
            },
            {
                name: 'Drawing and Painting Lessons',
                img: 'let',
                date: 'October 03, 2014'
            },
            {
                name: 'Drawing and Painting Lessons',
                img: 'let',
                date: 'October 03, 2014'
            }
        ]
    },
    methods: {
    },
    mounted() {
    }
});
