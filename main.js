
var app = new Vue ({
    el: '#root',
    data: {
        timing: 50,
        menuhide: true,
        overPara: {
            clicked: false,
            overText:'Our philosophy is learning through play as we offer a stimulating environment for children.',
            overView: [
                {
                icon: 'clock_alt',
                title: 'Full Day Sessions',
                text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                },
                {
                icon: 'diagram_alt',
                title: 'Varied Classes',
                text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                }
            ],
            ourMission: [
                {
                icon: 'screen',
                title: 'Online Access',
                text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                },
                {
                icon: 'heart',
                title: 'Maecenas Node',
                text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                },
                {
                icon: 'lab (1)',
                title: 'Praesent Morbi',
                text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                }
            ]
        },
        overSlide: ['gallery_07-690x506','gallery_01-690x506','gallery_08-690x506'],
        myIndex: 0,
        myNumbers: [
            {
                init: 300,
                num: 507,
                title: 'Our Pupils',
                content:'Pulvinar forte maestro node terminal est elipsis prism.',
            },
            {
                init: 100,
                num: 235,
                title: 'Teaching Hours',
                content:'Elipsis morbi nulla a metro interdum vitae elite.',
            },
            {
                init: 0,
                num: 100,
                percent: '%',
                title: 'Satisfied Parents',
                content:'Elementum pulvinar detos diaspis movum blandit.',
            },
            {
                init: 750,
                num: 1050,
                title: 'Meals Per Year',
                content:'Pulvinar forte maestro node terminal est elipsis prism.',
            }
        ],
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
        welcome:[
            {
                title: 'Morbi Etos',
                content: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                img: 'schoolbag_alt'
            },
            {
                title: 'Congue Gravida',
                content: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
                img: 'stroller_alt'
            },
            {
                title: 'Maecenas Node',
                content: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                img: 'globe_alt'
            },
            {
                title: 'Praesent Morbi',
                content: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
                img: 'bell_alt'
            }
        ],
        classes: [
            {
            name: 'Little Lambs',
            class: 'Class name',
            time: '12-24',
            age: 'Month olds',
            size: '9',
            term: 'Class size',
            img: '_01'

        },
        {
            name: 'Bouncy Bears',
            class: 'Class name',
            time: '2-3',
            age: 'Year olds',
            size: '12',
            term: 'Class size',
            img: '_02'

        },
        {
            name: 'Tenderhearts',
            class: 'Class name',
            time: '3-4',
            age: 'Year olds',
            size: '15',
            term: 'Class size',
            img:'_03'
        },
        {
            name: 'Shining Stars',
            class: 'Class name',
            time: '4-5',
            age: 'Year olds',
            size: '20',
            term: 'Class size',
            img:'_04'
        },
    ],
        education: [
            {
                list: ['Comprehensive reporting on individual achievement','Educational field trips and school presentations','Individual attention in a small-class setting','Learning program with after-school care','Opportunities to carry out scientific investigations','Positive learning environment for your child'],
                card: [
                    {
                        img: 'toy',
                        title: 'Learning & fun',
                        text: 'Praesent modea est gravida node vehicula luctus.',
                    },
                    {
                        img: 'meal',
                        title: 'Healthy Meals',
                        text: 'Terminal interdum a eleifend maecenas est morbi.',
                    },
                    {
                        img: 'school',
                        title: 'Friendly Place',
                        text: 'Terminal interdum a eleifend maecenas est morbi.',
                    },
                    {
                        img: 'shield',
                        title: 'Children Safety',
                        text: 'Praesent modea est gravida node vehicula luctus.',
                    },
                ],
            },
        ],
        gallery: ['gallery_01-690x506','gallery_02-690x506','gallery_03-690x506','gallery_04-690x506'],
        meet: [
            {
                img: 'team_04',
                name: 'Ruth Richie',
                role: 'Teacher',
                text: 'I have just finished my studies in Early Childhood Education, and I am also the kid’s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.',
                icons: ['mail','facebook','pinterest']
            },
            {
                img: 'team_03',
                name: 'Katie Willmore',
                role: 'Assistant Teacher',
                text: 'My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.',
                icons: ['dribbble','stumbleupon','instagram']

            },
            {
                img: 'team_02',
                name: 'Angelica Watson',
                role: 'Lead Teacher',
                text: 'I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.',
                icons: ['bing','skype','linkedin']

            },
            {
                img: 'team_01',
                name: 'Angela Lynn',
                role: 'Teacher',
                text: 'I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.',
                icons: ['youtube','twitter','googleplus']

            }
        ],
        newWh: [
            {
                date: 'October 03, 2014',
                img: 'blog_09',
                title: 'Drawing and Painting Lessons',
                text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum [...]',
                author: 'Anna Brown',
                genre: 'Events, Fun',
                num: '42'
            },
            {
                date: 'October 03, 2014',
                img: 'blog_10',
                title: 'Fall Parents Meeting Day',
                text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum [...]',
                author: 'Anna Brown',
                genre: 'Dance, Fun',
                num: '19'
            },
            {
                date: 'September 20, 2014',
                img: 'blog_08',
                title: 'Birthday in Kindergarten',
                text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum [...]',
                author: 'Anna Brown',
                genre: 'Games, General',
                num: '22'
            },
        ],
        contact: [
            {
                img: 'envelope (1)',
                title: 'Postal Address',
                data1: 'Fable Care Center',
                data2: '85 Fentiman Ave',
                data3: 'Ottawa, ON K1S 0T7',
            },
            {
                img: 'mobile',
                title: 'Phone & E-mail',
                data1: 'Phone: 1-800-64-38',
                data2: 'Fax: 1-800-64-39',
                data3: 'office@fable.com',
            },
            {
                img: 'clock',
                title: 'Business Hours',
                data1: 'Monday – Friday',
                data2: '8.00 am – 5.00 pm',
                data3: 'Weekend Closed',
            },
            {
                img: 'document (1)',
                title: 'Sessions',
                data1: 'Mornings, 8 am – 12 noon',
                data2: 'Afternoons, 1 pm – 5 pm',
                data3: 'Full Day, 8 am – 5 pm',
            },
        ],
        archives: ['october 2014(2)','september 2014(2)','august 2014(2)','july 2014(2)','june 2014(2)','may 2014(1)'],
        features: ['friendly and welcoming place','Science and art classes','Positive learning environment','Educational field trips','Writing and reading classes','Science and art classes'],
        recentPost: [
            {
                name: 'Drawing and Painting Lessons',
                img: 'blog_09-300x180',
                date: 'October 03, 2014'
            },
            {
                name: 'Fall Parents Meeting Day',
                img: 'blog_10-300x180',
                date: 'October 03, 2014'
            },
            {
                name: 'Birthday in Kindergarten',
                img: 'blog_08-300x180',
                date: 'September 20, 2014'
            }
        ],
        lowFoot: ['behance', 'dribbble','envato','facebook','twitter']
    },
    methods: {
        next() {
            this.myIndex++;
            if (this.myIndex == this.overSlide.length ) {
                this.myIndex = 0;
            }
        },
        prev() {
            this.myIndex--;
            if (this.myIndex < 0  ) {
                this.myIndex = this.overSlide.length-1;
            }
        },
        menu() {
            this.menuhide = !this.menuhide;
        },
        counter() {

            this.myNumbers.forEach((item, i) => {
                if (item.init < item.num) {
                    item.init++;
                }
            });
        },
        overChange() {
            if (this.overPara.clicked) {
                this.overPara.clicked = false;
            }
        },
        missionChange() {
            if (!this.overPara.clicked) {
                this.overPara.clicked = true;
            }
        },
    },
    mounted() {
        setInterval(this.next , 3000);
        setInterval(this.counter , 30);
    }


});
