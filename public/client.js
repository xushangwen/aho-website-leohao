const nav = [
    {
        cn: '关于澳弘',
        en: 'About',
        link: '/about',
        cover: [
            '/images/layout/nav/about.jpg'
        ],
        children: [
            {
                cn: '公司简介',
                en: 'Company Profile',
                link: '/about',
            },
            {
                cn: '发展历程',
                en: 'History',
                link: '/about/history',
            },
            {
                cn: '企业文化',
                en: 'Culture',
                link: '/about/culture',
            },
            {
                cn: '全球网络布局',
                en: 'Global Network',
                link: '/about/glonet',
            },
            {
                cn: '资质专利',
                en: 'Certifications & Patents',
                link: '/about/patent',
            },
            {
                cn: '澳弘荣誉',
                en: 'Honours',
                link: '/about/honor',
            },
            {
                cn: 'ESG',
                en: 'ESG',
                link: '/about/esg',
            }
        ]
    },
    {
        cn: '产品中心',
        en: 'Products',
        link: '/products',
        cover: [
            '/images/layout/nav/products.jpg'
        ],
        children: [
            { 
                cn: '单面板', 
                en: 'Single-Sided PCB', 
                link: '/products?cate=17f6kC900EP91S44' 
            },
            { 
                cn: '双面多层板', 
                en: 'Double-Sided PCB', 
                link: '/products?cate=176jf90wM0r9E137' 
            },
            { 
                cn: 'HDI板', 
                en: 'HDI PCB', 
                link: '/products?cate=1076v9YRe1009130' 
            },
            { 
                cn: '特种PCB板', 
                en: 'Specialized PCB', 
                link: '/products?cate=KGi17V690Xz09115' 
            }
        ]
    },
    {
        cn: '行业应用',
        en: 'Applications',
        link: '/application',
        cover: [
            '/images/layout/nav/applications.jpg'
        ],
        children: [
            {
                cn: '智能家居',
                en: 'Smart Home',
                link: '/application#smart-home',
            },
            {
                cn: '汽车电子',
                en: 'Automotive Electronics',
                link: '/application#automotive',
            },
            {
                cn: '电源能源',
                en: 'Power & Energy',
                link: '/application#power-energy',
            },
            {
                cn: '消费办公',
                en: 'Consumer & Office',
                link: '/application#consumer-office',
            },
            {
                cn: '通讯安防',
                en: 'Communications & Security',
                link: '/application#communications',
            },
            {
                cn: '工业控制',
                en: 'Industrial Control',
                link: '/application#industrial',
            },
            {
                cn: '其他应用',
                en: 'Other Applications',
                link: '/application#industrial',
            },
        ]
    },
    {
        cn: '投资者关系',
        en: 'IR',
        link: '/invest',
        cover: [
            '/images/layout/nav/investor.jpg'
        ],
        children: [
            {
                cn: '股票信息',
                en: 'Stock Information',
                link: '/invest#stock-info',
            },
            {
                cn: '定期公告',
                en: 'Periodical Report',
                link: '/invest#announcements',
            },
        ]
    },
    {
        cn: '新闻中心',
        en: 'News',
        link: '/news',
        cover: [
            '/images/layout/nav/news.jpg'
        ],
        children: [{"cn":"企业新闻","en":"Corporate News","link":"/news?type=c1"},{"cn":"行业动态","en":"Industry Trends","link":"/news?type=c2"}]
    },
    {
        cn: '联系我们',
        en: 'Contact',
        link: '/contact',
        cover: [],
        children: [
            {
                cn: '加入我们',
                en: 'Join Us',
                link: '/contact',
            },
            {
                cn: '公司信息',
                en: 'Company Information',
                link: '/contact',
            },
        ]
    },
]

const indexBanner = [
    {
        uuid: 'uuid1',
        cover: [
            '/videos/home-video-01.webm',
        ],
        name: [''],
        t1: [''],
        t2: ['智导世界 互联未来'],
        t2En: ['Connect Smart World for Better Future'],
        t2m: [],
        abst: [
            'Connect Smart World for Better Future'
        ],
        link: '/product'
    },
    {
        uuid: 'uuid2',
        cover: [
            '/videos/home-video-02.webm',
        ],
        name: [''],
        t1: [''],
        t2: ['承载数字科技，', '赋能智慧生活'],
        t2En: ['Bearing Digital Technology, Empowering Smart Life'],
        t2m: [],
        abst: [
            'Bearing Digital Technology, Empowering Smart Life'
        ],
        link: '/product'
    },
    {
        uuid: 'uuid3',
        cover: [
            '/videos/home-video-03.webm',
            '/videos/home-video-03.mp4',
        ],
        name: [''],
        t1: [''],
        t2: ['成为全世界优质客户', '信赖的合作伙伴'],
        t2En: ['Reliable Partner for High-level Customers Worldwide'],
        t2m: [],
        abst: [
            'To be a Trustable and Reliable Partner of High-level Customers'
        ],
        link: '/product'
    },
    {
        uuid: 'uuid4',
        cover: [
            '/videos/home-video-04.webm',
            '/videos/home-video-04.mp4',
        ],
        name: [''],
        t1: ['澳弘电子持续创新，', 'PCB产品'],
        t1En: [],
        t2: ['适用于多领域', '多场景的应用需求'],
        t2En: ['PCB Products for Multi-discipline & Multi-scenario Applications'],
        t2m: [],
        abst: [
            'Continuous innovation, PCB products suitable for multi-discipline and multi-scenario application needs'
        ],
        link: '/product'
    },
]

const profileData = [
    {
        label: '合计产能',
        labelEn: 'Total Production Capacity',
        num: '7,600,000',
        unit: '',
        abst: [
            '平方米/年'
        ],
        abstEn: ['㎡/year'],
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M20.71 8.11977L20.46 8.67977C20.27 9.08977 19.7 9.08977 19.52 8.67977L19.27 8.10977C18.83 7.09977 18.03 6.28977 17.05 5.84977L16.29 5.50977C15.87 5.31977 15.87 4.71977 16.29 4.53977L17 4.21977C18.01 3.75977 18.81 2.92977 19.25 1.88977L19.5 1.26977C19.67 0.839766 20.26 0.839766 20.44 1.26977L20.69 1.87977C21.12 2.91977 21.92 3.74977 22.94 4.19977L23.65 4.50977C24.06 4.68977 24.06 5.28977 23.65 5.46977L22.89 5.79977C21.9 6.22977 21.11 7.03977 20.67 8.04977L20.71 8.11977ZM1.98999 3.98977C1.98999 3.42977 2.42999 2.98977 2.98999 2.98977H13.99V4.98977H3.98999V18.9898H19.99V10.9898H21.99V19.9898C21.99 20.5398 21.54 20.9898 20.99 20.9898H2.98999C2.42999 20.9898 1.98999 20.5398 1.98999 19.9898V3.98977ZM6.98999 12.9898H8.98999V16.9898H6.98999V12.9898ZM10.99 6.98977H12.99V16.9898H10.99V6.98977ZM14.99 9.98977H16.99V16.9898H14.99V9.98977Z" fill="#DCDCDC"/>\n' +
            '</svg>'
    },
    {
        label: '研发制造基地',
        labelEn: 'R&D & Manufacturing Bases',
        num: '3',
        unit: '',
        abst: [
            '个研发制造基地',
            '常州澳弘、常州海弘、泰国澳弘。'
        ],
        abstEn: ['R&D & Manufacturing Bases', 'Changzhou Aohong, Changzhou Haihong, Aohong Thailand.'],
        icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M22.6666 21H2.66663V19H3.66663V4C3.66663 3.44 4.10663 3 4.66663 3H18.6666C19.2166 3 19.6666 3.44 19.6666 4V9H21.6666V19H22.6666V21ZM17.6666 19H19.6666V11H13.6666V19H15.6666V13H17.6666V19ZM17.6666 9V5H5.66663V19H11.6666V9H17.6666ZM7.66663 11H9.66663V13H7.66663V11ZM7.66663 15H9.66663V17H7.66663V15ZM7.66663 7H9.66663V9H7.66663V7Z" fill="#DCDCDC"/>\n' +
            '</svg>'
    },
    {
        label: '全球业务中心',
        labelEn: 'Global Business Centers',
        num: '5',
        unit: '',
        abst: [
            '个全球业务中心，',
            '新加坡、香港、韩国、匈牙利、墨西哥。'
        ],
        abstEn: ['Global Business Centers', 'Singapore, Hong Kong, South Korea, Hungary, Mexico.'],
        icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M12.3333 22C6.80325 22 2.33325 17.52 2.33325 12C2.33325 6.47 6.80325 2 12.3333 2C17.8533 2 22.3333 6.47 22.3333 12C22.3333 17.52 17.8533 22 12.3333 22ZM10.0433 19.66C9.07325 17.61 8.48325 15.36 8.35325 12.99H4.38325C4.77325 16.16 7.03325 18.76 10.0233 19.65L10.0433 19.66ZM10.3633 12.99C10.5133 15.42 11.2033 17.71 12.3233 19.74C13.4433 17.71 14.1333 15.42 14.2833 12.98H10.3433L10.3633 12.99ZM20.2633 12.99H16.2933C16.1633 15.36 15.5633 17.61 14.6033 19.65C17.5933 18.75 19.8533 16.15 20.2433 12.98L20.2633 12.99ZM4.38325 10.99H8.34325C8.47325 8.61 9.06325 6.36 10.0233 4.32C7.02325 5.21 4.76325 7.81 4.37325 10.98L4.38325 10.99ZM10.3433 10.99H14.2733C14.1133 8.55 13.4233 6.26 12.3033 4.23C11.1733 6.25 10.4833 8.54 10.3333 10.98L10.3433 10.99ZM14.5933 4.32C15.5533 6.36 16.1433 8.61 16.2733 10.98H20.2333C19.8333 7.8 17.5733 5.2 14.5833 4.31L14.5933 4.32Z" fill="#DCDCDC"/>\n' +
            '</svg>'
    },
    {
        label: '服务全球',
        labelEn: 'Global Reach',
        num: '20',
        unit: '+',
        abst: [
            '遍布20多个国家和地区的全球客户，',
            '亚洲、欧洲、北美洲、南美洲、大洋洲、非洲'
        ],
        abstEn: ['Customers in 20+ countries and regions', 'Asia, Europe, North America, South America, Oceania, Africa'],
        icon: '<i class="ri-earth-line"></i>'
    }
]

const history = [
    {
        sectionName: '1973-1999',
        sectionSlogan: '澳弘成立',
        sectionSloganEn: 'Foundation',
        list: [
            {
                year: '1973',
                t1: '公司初创',
                t2: '创建"武进县孝都公社长江标牌厂"，开始生产简易的柳器、铭牌、五金等产品起步。',
                t1En: 'Company Inception',
                t2En: 'Founded as "Wujin County Xiaodu Commune Changjiang Label Factory," starting with the production of simple wickerwork, nameplates, and hardware products.',
                images: '/images/about/history/y/1973.jpg'
            },
            {
                year: '1982',
                t1: '开始生产单面PCB板',
                t2: '进入电子行业，为当时中国电视第一品牌，”黄河电视”供应单面PCB。',
                t1En: 'Entry into Single-Sided PCB Production',
                t2En: 'Entered the electronics industry by supplying single-sided PCBs for “Huanghe TV,” the leading television brand in China at the time.',
                images: '/images/about/history/y/1982.jpg'
            },
            {
                year: '1995',
                t1: '年销售达千万元',
                t2: '当年总销售额突破1000万元人民币。',
                t1En: 'Annual Sales Reach 10 Million Yuan',
                t2En: 'Total annual sales surpassed 10 million RMB.',
                images: '/images/about/history/y/1995.jpg'
            },
        ]
    },
    {
        sectionName: '2000-2019',
        sectionSlogan: '势不可挡',
        sectionSloganEn: 'Expansion',
        list: [
            {
                year: '2004',
                t1: '成立”海弘”',
                t2: '主营业务聚焦生产单面PCB板。年销售额突破1亿元人民币。',
                t1En: 'Establishment of “Haihong”',
                t2En: 'Main business focused on producing single-sided PCBs. Annual sales exceeded 100 million RMB.',
                images: '/images/about/history/y/2004.jpg'
            },
            {
                year: '2005',
                t1: '成立”澳弘”',
                t2: [
                    '开始生产双面和多层PCB板。',
                    '援建古巴PCB生产线。',
                    '成为LG绿色伙伴（GREEN PARTNER）。',
                    '公司首次通过ISO14000环境管理体系认证。',
                ],
                t1En: 'Establishment of “Aohong”',
                t2En: ['Began production of double-sided and multilayer PCBs.', 'Assisted in the construction of a PCB production line in Cuba.', 'Became an LG Green Partner.', 'Achieved initial ISO 14001 Environmental Management System certification.'],
                images: '/images/about/history/y/2005.jpg'
            },
            {
                year: '2009',
                t1: '扩建澳弘二期工厂',
                t2: '澳弘成立三年即实现满产，扩建二期生产车间，双面PCB板的年产能从30万平方米提高到80万平方米。',
                t1En: 'Expansion of Aohong Phase II Factory',
                t2En: 'Aohong reached full production capacity within three years of its establishment, leading to the expansion of the Phase II production plant. The annual production capacity for double-sided PCBs increased from 300,000 to 800,000 square meters.',
                images: '/images/about/history/y/2009.jpg'
            },
            {
                year: '2012',
                t1: '海弘整体搬迁',
                t2: '”海弘”整体搬迁到滨江工业园区的新基地，完成整厂自动化改造工程。单面PCB板的年产能300万平方米。',
                t1En: 'Haihong Relocation',
                t2En: '”Haihong” completed a full relocation to a new base in the Binjiang Industrial Park, along with a comprehensive factory automation upgrade. The annual production capacity for single-sided PCBs reached 3 million square meters.',
                images: '/images/about/history/y/2012.jpg'
            },
            {
                year: '2017',
                t1: '成立香港子公司',
                t2: '在香港成立第一家海外子公司，Elite Prospect Trading Limited （香港昇耀）, 开始走向国际化经营。',
                t1En: 'Establishment of Hong Kong Subsidiary',
                t2En: 'Established the first overseas subsidiary, Elite Prospect Trading Limited (Hong Kong), marking the beginning of international operations.',
                images: '/images/about/history/y/2017.jpg'
            },
            {
                year: '2018',
                t1: [
                    '完成股份制改造',
                    '成立新加坡子公司'
                ],
                t2: [
                    '2018年2月，在新加坡成立子公司，新加坡Elite Prospect Singapore Pte. Ltd., 进一步开拓海外市场。',
                    '2018年12月公司完成股份制改造，',
                    '澳弘、海弘、香港昇耀、新加坡ELITE合并成立股份制公司，母公司为”常州澳弘电子股份有限公司”。',
                ],
                t1En: ['Joint-Stock Reform Completed', 'Singapore Subsidiary Established'],
                t2En: ['In February 2018, established a subsidiary in Singapore, Elite Prospect Singapore Pte. Ltd., to further expand overseas markets.', 'In December 2018, the company completed its joint-stock reform.', 'Aohong, Haihong, Hong Kong Shengyao, and Singapore ELITE were merged to form a joint-stock company, with the parent company being “Changzhou Aohong Electronics Co., Ltd.”'],
                images: '/images/about/history/y/2018.jpg'
            },
        ]
    },
    {
        sectionName: '2020-Future',
        sectionSlogan: '精益求精',
        sectionSloganEn: 'Excellence',
        list: [
            {
                year: '2020',
                t1: '上交所挂牌上市',
                t2: '2020年10月21日，在上海证券交易所挂牌上市。',
                t1En: 'Listed on Shanghai Stock Exchange',
                t2En: 'Officially listed on the Shanghai Stock Exchange on October 21, 2020.',
                images: '/images/about/history/y/2020.jpg'
            },
            {
                year: '2022',
                t1: '澳弘A2生产基地投产',
                t2: [
                    '澳弘新建完成A2工厂的”年产120万平方米高精密度多层板、高密度互连积层板建设项目”。',
                    '海弘新建完成”年产60万平米单面板工厂建设项目”，总年产能达到560万平方米。',
                ],
                t1En: 'Aohong A2 Production Base Commences Operation',
                t2En: ['Aohong completed the construction of the “Annual 1.2 Million Square Meters High-Precision Multilayer Board and High-Density Interconnect (HDI) Build-Up Board Project” at the new A2 plant.', 'Haihong completed the “Annual 600,000 Square Meters Single-Sided Board Plant Construction Project,” bringing the total annual production capacity to 5.6 million square meters.'],
                images: '/images/about/history/y/2022.jpg'
            },
            {
                year: '2024',
                t1: '数智赋能，升级制造能力',
                t2: '澳弘开工建设”年产60万平方米高密度互联印制电路板项目”，实现澳弘A2工厂满产投资。',
                t1En: 'Digital & Intelligent Empowerment, Upgrading Manufacturing Capabilities',
                t2En: 'Aohong commenced construction on the “Annual 600,000 Square Meters High-Density Interconnect Printed Circuit Board Project,” achieving full capacity investment for the Aohong A2 plant.',
                images: '/images/about/history/y/2024.jpg'
            },
            {
                year: '2025',
                t1: '泰国工厂开工建设',
                t2: '在泰国巴真府金池工业园开工兴建海外第一家生产基地，澳弘电子（泰国）有限公司。',
                t1En: 'Construction Begins on Thailand Factory',
                t2En: 'Broke ground on the company\'s first overseas production base, Aohong Electronics (Thailand) Co., Ltd., located in the Gold Pond Industrial Estate in Prachinburi Province, Thailand.',
                images: '/images/about/history/y/2025.jpg'
            },
        ]
    }
]

const indexApplication = [
    {
        name: '智能家居',
        nameEn: 'Smart Home',
        anchorId: 'smart-home',
        iconClass: 'ri-home-office-line',
        region: '电视机、洗衣机、电冰箱、空调、热水器、微波炉、厨房电器、清洁电器、智能家居。',
        regionEn: 'Televisions, Washing Machines, Refrigerators, Air Conditioners, Water Heaters, Microwave Ovens, Kitchen Appliances, Cleaning Appliances, Smart Home Systems.',
        cover: '/images/home/application/1home.jpg',
        contentBg: '/images/application/1.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M21.1167 2.68324L34.65 14.9832H29.6833L19.9667 6.1499L9.96666 15.2332V31.6332H18.3V34.9666H8.3C7.36666 34.9666 6.63333 34.2166 6.63333 33.2999V18.2999H1.63333L18.8333 2.6499C19.4667 2.06657 20.4333 2.06657 21.0667 2.6499L21.1167 2.68324ZM23.3167 18.3166H38.3167V29.9832H23.3167V18.3166ZM26.65 21.6499V26.6499H34.9833V21.6499H26.65ZM39.9833 34.9832H21.65V31.6499H39.9833V34.9832Z" fill="#FF6400"/>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M21.1166 2.68372L34.65 14.9837H29.6833L19.9666 6.15039L9.96663 15.2337V31.6337H18.3V34.9671H8.29997C7.36663 34.9671 6.6333 34.2171 6.6333 33.3004V18.3004H1.6333L18.8333 2.65039C19.4666 2.06706 20.4333 2.06706 21.0666 2.65039L21.1166 2.68372ZM23.3166 18.3171H38.3166V29.9837H23.3166V18.3171ZM26.65 21.6504V26.6504H34.9833V21.6504H26.65ZM39.9833 34.9837H21.65V31.6504H39.9833V34.9837Z" fill="white"/>\n' +
            '</svg>\n'
    },
    {
        name: '汽车电子',
        nameEn: 'Automotive Electronics',
        anchorId: 'automotive',
        iconClass: 'ri-police-car-line',
        region: '电池管理、车载电源、刹车控制、方向盘、水泵、冷却系统、车灯、后视镜、座椅、车内感知……',
        regionEn: 'Battery Management Systems (BMS), Onboard Chargers (OBC), Brake Control Systems, Steering Wheels, Water Pumps, Cooling Systems, Automotive Lighting, Rearview Mirrors, Seats, In-Cabin Sensing...',
        cover: '/images/home/application/2car.jpg',
        contentBg: '/images/application/2.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_2352_297)">\n' +
            '<path d="M6.66667 21.6669V30.0002H33.3333V21.6669H6.66667ZM9.35001 18.3335H30.6167C30.8667 18.3335 31.1167 18.2669 31.35 18.1502C32.1667 17.7335 32.5 16.7335 32.0833 15.9002L29.95 11.6335H9.95001L7.81667 15.8835C7.70001 16.1002 7.63334 16.3669 7.63334 16.6169C7.63334 17.5335 8.36667 18.2835 9.30001 18.2835L9.35001 18.3335ZM36.65 22.5002V35.0002C36.65 35.9169 35.9 36.6669 34.9833 36.6669H33.3167C32.3833 36.6669 31.65 35.9169 31.65 35.0002V33.3335H8.31667V35.0002C8.31667 35.9169 7.56668 36.6669 6.65001 36.6669H4.98334C4.05001 36.6669 3.31667 35.9169 3.31667 35.0002V22.5002L1.23334 21.9669C0.483341 21.7669 -0.0333252 21.1002 -0.0333252 20.3335V19.1335C-0.0333252 18.6669 0.333341 18.3002 0.800008 18.3002H3.30001L7.36667 10.1335C7.91667 9.0002 9.08334 8.28353 10.3333 8.28353H13.2667V4.9502H18.2667V8.28353H21.6V4.9502H26.6V8.28353H29.5333C30.7833 8.28353 31.95 8.98353 32.5 10.1169L36.5667 18.2669H39.0667C39.5167 18.2669 39.9 18.6335 39.9 19.1002V20.2835C39.9 21.0335 39.3667 21.7002 38.6333 21.9002L36.55 22.4169L36.65 22.5002ZM8.31667 23.3335C12.1667 23.3335 14.7667 24.5835 16.1167 27.1002H16.1C16.3167 27.5002 16.15 28.0002 15.75 28.2169C15.6167 28.2669 15.4833 28.3002 15.35 28.3002H9.93334C9.00001 28.3002 8.26667 27.5502 8.26667 26.6335V23.3002L8.31667 23.3335ZM31.65 23.3335V26.6669C31.65 27.5835 30.9 28.3335 29.9833 28.3335H24.5667C24.4167 28.3335 24.2833 28.2835 24.1667 28.2335C23.75 28.0002 23.6 27.5002 23.8167 27.1002H23.8C25.1333 24.5835 27.7333 23.3169 31.6 23.3169L31.65 23.3335Z" fill="#FF6400"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_2352_297">\n' +
            '<rect width="40" height="40" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_2557_18644)">\n' +
            '<path d="M6.6668 21.6669V30.0002H33.3335V21.6669H6.6668ZM9.35013 18.3335H30.6168C30.8668 18.3335 31.1168 18.2669 31.3501 18.1502C32.1668 17.7335 32.5001 16.7335 32.0835 15.9002L29.9501 11.6335H9.95013L7.8168 15.8835C7.70013 16.1002 7.63346 16.3669 7.63346 16.6169C7.63346 17.5335 8.3668 18.2835 9.30013 18.2835L9.35013 18.3335ZM36.6501 22.5002V35.0002C36.6501 35.9169 35.9001 36.6669 34.9835 36.6669H33.3168C32.3835 36.6669 31.6501 35.9169 31.6501 35.0002V33.3335H8.3168V35.0002C8.3168 35.9169 7.5668 36.6669 6.65013 36.6669H4.98346C4.05013 36.6669 3.3168 35.9169 3.3168 35.0002V22.5002L1.23346 21.9669C0.483464 21.7669 -0.0332031 21.1002 -0.0332031 20.3335V19.1335C-0.0332031 18.6669 0.333464 18.3002 0.80013 18.3002H3.30013L7.3668 10.1335C7.9168 9.0002 9.08346 8.28353 10.3335 8.28353H13.2668V4.9502H18.2668V8.28353H21.6001V4.9502H26.6001V8.28353H29.5335C30.7835 8.28353 31.9501 8.98353 32.5001 10.1169L36.5668 18.2669H39.0668C39.5168 18.2669 39.9001 18.6335 39.9001 19.1002V20.2835C39.9001 21.0335 39.3668 21.7002 38.6335 21.9002L36.5501 22.4169L36.6501 22.5002ZM8.3168 23.3335C12.1668 23.3335 14.7668 24.5835 16.1168 27.1002H16.1001C16.3168 27.5002 16.1501 28.0002 15.7501 28.2169C15.6168 28.2669 15.4835 28.3002 15.3501 28.3002H9.93346C9.00013 28.3002 8.2668 27.5502 8.2668 26.6335V23.3002L8.3168 23.3335ZM31.6501 23.3335V26.6669C31.6501 27.5835 30.9001 28.3335 29.9835 28.3335H24.5668C24.4168 28.3335 24.2835 28.2835 24.1668 28.2335C23.7501 28.0002 23.6001 27.5002 23.8168 27.1002H23.8001C25.1335 24.5835 27.7335 23.3169 31.6001 23.3169L31.6501 23.3335Z" fill="white"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_2557_18644">\n' +
            '<rect width="40" height="40" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n'
    },
    {
        name: '电源能源',
        nameEn: 'Power & Energy',
        anchorId: 'power-energy',
        iconClass: 'ri-battery-charge-line',
        region: '不间断电源(UPS)、光伏逆变器、各因适配器、电站储能、移动电源、照明。',
        regionEn: 'Uninterruptible Power Supplies (UPS), Photovoltaic Inverters, Various Power Adapters, Energy Storage Systems (ESS) for Power Stations, Portable Power Banks, Lighting.',
        cover: '/images/home/application/3elec.jpg',
        contentBg: '/images/application/3.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M13.3333 31.6668H5.00001C4.06668 31.6668 3.33334 30.9168 3.33334 30.0002V10.0002C3.33334 9.06683 4.06668 8.3335 5.00001 8.3335H16.0417L14.0917 11.6668H6.65834V28.3335H13.325V31.6668H13.3333ZM20.6167 31.6668L22.55 28.3335H29.9667V11.6668H23.3V8.3335H31.6333C32.55 8.3335 33.3 9.06683 33.3 10.0002V30.0002C33.3 30.9168 32.55 31.6668 31.6333 31.6668H20.5833H20.6167ZM34.9833 15.0002H38.3167V25.0002H34.9833V15.0002ZM19.9833 18.3335H24.9833L16.65 31.6668V21.6668H11.65L19.9833 8.3335V18.3335Z" fill="#FF6400"/>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M13.3335 31.6663H5.00016C4.06683 31.6663 3.3335 30.9163 3.3335 29.9997V9.99967C3.3335 9.06634 4.06683 8.33301 5.00016 8.33301H16.0418L14.0918 11.6663H6.6585V28.333H13.3252V31.6663H13.3335ZM20.6168 31.6663L22.5502 28.333H29.9668V11.6663H23.3002V8.33301H31.6335C32.5502 8.33301 33.3002 9.06634 33.3002 9.99967V29.9997C33.3002 30.9163 32.5502 31.6663 31.6335 31.6663H20.5835H20.6168ZM34.9835 14.9997H38.3168V24.9997H34.9835V14.9997ZM19.9835 18.333H24.9835L16.6502 31.6663V21.6663H11.6502L19.9835 8.33301V18.333Z" fill="white"/>\n' +
            '</svg>\n'
    },
    {
        name: '消费办公',
        nameEn: 'Consumer & Office',
        anchorId: 'consumer-office',
        iconClass: 'ri-printer-line',
        region: '打印机、POS机、显示器、游戏机、电动工具。',
        regionEn: 'Printers, POS Terminals, Monitors, Game Consoles, Power Tools.',
        cover: '/images/home/application/4office.jpg',
        contentBg: '/images/application/4.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M28.3333 3.3335C29.25 3.3335 30 4.06683 30 5.00016V11.6668H35C35.9167 11.6668 36.6667 12.4002 36.6667 13.3335V30.0002C36.6667 30.9168 35.9167 31.6668 35 31.6668H30V35.0002C30 35.9168 29.25 36.6668 28.3333 36.6668H11.6667C10.7333 36.6668 10 35.9168 10 35.0002V31.6668H5.00001C4.06668 31.6668 3.33334 30.9168 3.33334 30.0002V13.3335C3.33334 12.4002 4.06668 11.6668 5.00001 11.6668H10V5.00016C10 4.06683 10.7333 3.3335 11.6667 3.3335H28.3333ZM26.6667 28.3335H13.3333V33.3335H26.6667V28.3335ZM33.3333 15.0002H6.66668V28.3335H10V26.6668C10 25.7335 10.7333 25.0002 11.6667 25.0002H28.3333C29.25 25.0002 30 25.7335 30 26.6668V28.3335H33.3333V15.0002ZM13.3333 16.6668V20.0002H8.33334V16.6668H13.3333ZM26.6667 6.66683H13.3333V11.6668H26.6667V6.66683Z" fill="#FF6400"/>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M28.3335 3.33301C29.2502 3.33301 30.0002 4.06634 30.0002 4.99967V11.6663H35.0002C35.9168 11.6663 36.6668 12.3997 36.6668 13.333V29.9997C36.6668 30.9163 35.9168 31.6663 35.0002 31.6663H30.0002V34.9997C30.0002 35.9163 29.2502 36.6663 28.3335 36.6663H11.6668C10.7335 36.6663 10.0002 35.9163 10.0002 34.9997V31.6663H5.00016C4.06683 31.6663 3.3335 30.9163 3.3335 29.9997V13.333C3.3335 12.3997 4.06683 11.6663 5.00016 11.6663H10.0002V4.99967C10.0002 4.06634 10.7335 3.33301 11.6668 3.33301H28.3335ZM26.6668 28.333H13.3335V33.333H26.6668V28.333ZM33.3335 14.9997H6.66683V28.333H10.0002V26.6663C10.0002 25.733 10.7335 24.9997 11.6668 24.9997H28.3335C29.2502 24.9997 30.0002 25.733 30.0002 26.6663V28.333H33.3335V14.9997ZM13.3335 16.6663V19.9997H8.3335V16.6663H13.3335ZM26.6668 6.66634H13.3335V11.6663H26.6668V6.66634Z" fill="white"/>\n' +
            '</svg>\n'
    },
    {
        name: '通讯安防',
        nameEn: 'Communications & Security',
        anchorId: 'communications',
        iconClass: 'ri-webcam-line',
        region: '光模块、机顶盒、安防控制、监控系统……',
        regionEn: 'Optical Modules, Set-Top Boxes, Security Control Units, Surveillance Systems...',
        cover: '/images/home/application/5tele.jpg',
        contentBg: '/images/application/5.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M18.3333 34.9999V33.1999C12.6667 32.3832 8.33334 27.5166 8.33334 21.6499V13.3166C8.33334 6.86657 13.55 1.6499 20 1.6499C26.4333 1.6499 31.6667 6.86657 31.6667 13.3166V21.6499C31.6667 27.5166 27.3167 32.3832 21.6667 33.1832V34.9666H28.3333V38.2999H11.6667V34.9666H18.3333V34.9999ZM20 4.9999C15.3833 4.9999 11.6667 8.71657 11.6667 13.3332V21.6666C11.6667 26.2666 15.3833 29.9999 20 29.9999C24.6 29.9999 28.3333 26.2666 28.3333 21.6666V13.3332C28.3333 8.71657 24.6 4.9999 20 4.9999ZM20 14.9999C20.9167 14.9999 21.6667 14.2499 21.6667 13.3332C21.6667 12.3999 20.9167 11.6666 20 11.6666C19.0667 11.6666 18.3333 12.3999 18.3333 13.3332C18.3333 14.2499 19.0667 14.9999 20 14.9999ZM20 18.3332C17.2333 18.3332 15 16.0832 15 13.3332C15 10.5666 17.2333 8.33324 20 8.33324C22.75 8.33324 25 10.5666 25 13.3332C25 16.0832 22.75 18.3332 20 18.3332Z" fill="#FF6400"/>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M18.3335 35.0004V33.2004C12.6668 32.3837 8.3335 27.5171 8.3335 21.6504V13.3171C8.3335 6.86706 13.5502 1.65039 20.0002 1.65039C26.4335 1.65039 31.6668 6.86706 31.6668 13.3171V21.6504C31.6668 27.5171 27.3168 32.3837 21.6668 33.1837V34.9671H28.3335V38.3004H11.6668V34.9671H18.3335V35.0004ZM20.0002 5.00039C15.3835 5.00039 11.6668 8.71706 11.6668 13.3337V21.6671C11.6668 26.2671 15.3835 30.0004 20.0002 30.0004C24.6002 30.0004 28.3335 26.2671 28.3335 21.6671V13.3337C28.3335 8.71706 24.6002 5.00039 20.0002 5.00039ZM20.0002 15.0004C20.9168 15.0004 21.6668 14.2504 21.6668 13.3337C21.6668 12.4004 20.9168 11.6671 20.0002 11.6671C19.0668 11.6671 18.3335 12.4004 18.3335 13.3337C18.3335 14.2504 19.0668 15.0004 20.0002 15.0004ZM20.0002 18.3337C17.2335 18.3337 15.0002 16.0837 15.0002 13.3337C15.0002 10.5671 17.2335 8.33372 20.0002 8.33372C22.7502 8.33372 25.0002 10.5671 25.0002 13.3337C25.0002 16.0837 22.7502 18.3337 20.0002 18.3337Z" fill="white"/>\n' +
            '</svg>\n'
    },
    {
        name: '工控/医疗/其他',
        nameEn: 'Industrial Control / Medical / Others',
        anchorId: 'industrial',
        iconClass: 'ri-router-line',
        region: '工业控制、精密电机、航空液压、各类EMS产品。',
        regionEn: 'Industrial Control Equipment, Precision Motors, Aviation Hydraulic Systems, Various EMS Products.',
        cover: '/images/home/application/6industry.jpg',
        contentBg: '/images/application/6.jpg',
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_2202_12926)">\n' +
            '<path d="M15.8333 8.3335H1.66666V31.6668H35V22.5002" stroke="#FF6400" stroke-width="3.33333"/>\n' +
            '<path d="M18.3333 31.6665V38.3332" stroke="#FF6400" stroke-width="3.33333"/>\n' +
            '<path d="M10 38.3335H26.6667" stroke="#FF6400" stroke-width="3.33333"/>\n' +
            '<path d="M32.7037 3.78389L31.713 1.6665H28.013L27.0227 3.7857L25.9188 4.42305L23.5883 4.22224L21.7383 7.42652L23.079 9.34504V10.6175L21.739 12.5362L23.589 15.7405L25.92 15.5387L27.023 16.1754L28.013 18.2945H31.713L32.7042 16.1768L33.8098 15.5384L36.1385 15.7405L37.9885 12.5362L36.6508 10.6202L36.6507 9.34137L37.9893 7.42652L36.1393 4.22224L33.8102 4.4227L32.7037 3.78389Z" stroke="#FF6400" stroke-width="3.33333"/>\n' +
            '<path d="M29.8652 8.19482V11.5282" stroke="#FF6400" stroke-width="3.33333"/>\n' +
            '</g>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_2202_12926">\n' +
            '<rect width="40" height="40" fill="white"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n',
        contentIcon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M15.8332 8.33398H1.6665V31.6673H34.9998V22.5007" stroke="white" stroke-width="3.33333"/>\n' +
            '<path d="M18.333 31.667V38.3337" stroke="white" stroke-width="3.33333"/>\n' +
            '<path d="M10 38.334H26.6667" stroke="white" stroke-width="3.33333"/>\n' +
            '<path d="M32.7036 3.78438L31.7129 1.66699H28.0129L27.0226 3.78619L25.9188 4.42354L23.5883 4.22273L21.7383 7.42701L23.0789 9.34553V10.618L21.7389 12.5367L23.5889 15.741L25.9199 15.5392L27.0229 16.1759L28.0129 18.295H31.7129L32.7041 16.1773L33.8098 15.5389L36.1384 15.741L37.9884 12.5367L36.6508 10.6207L36.6506 9.34186L37.9893 7.42701L36.1393 4.22273L33.8101 4.42319L32.7036 3.78438Z" stroke="white" stroke-width="3.33333"/>\n' +
            '<path d="M29.8652 8.19531V11.5286" stroke="white" stroke-width="3.33333"/>\n' +
            '</svg>\n'
    }
]

const newsList = [
    {
        id: '1',
        title: '喜封金顶，开启全球化新征程',
        categoryName: '企业新闻',
        cover: '/images/home/news/1.jpg',
        pubDate: '2025-10-14',
        abst: '2025年10月3日，随着最后一方混凝土精准浇筑到位，澳弘电子泰国生产基地主体结构正式封顶！公司创始人耿同章先生携核心管理团队、中泰员工代表及合作伙伴齐聚现场，共同见证这一标志着公司全球化战略落地的里程碑时刻。'
    },
    {
        id: '2',
        title: '澳弘电子荣膺 LG “战略合作伙伴奖”',
        categoryName: '企业新闻',
        cover: '/images/home/news/2.jpg',
        pubDate: '2025-09-03'
    },
    {
        id: '3',
        title: '澳弘电子再次荣获美国伊顿公司“全球卓越供应商”奖项',
        categoryName: '企业新闻',
        cover: '/images/home/news/3.jpg',
        pubDate: '2025-08-28'
    },
    {
        id: '1',
        title: '喜封金顶，开启全球化新征程',
        categoryName: '企业新闻',
        cover: '/images/home/news/1.jpg',
        pubDate: '2025-10-14'
    },
    {
        id: '2',
        title: '澳弘电子荣膺 LG “战略合作伙伴奖”',
        categoryName: '企业新闻',
        cover: '/images/home/news/2.jpg',
        pubDate: '2025-09-03'
    },
    {
        id: '3',
        title: '澳弘电子再次荣获美国伊顿公司“全球卓越供应商”奖项',
        categoryName: '企业新闻',
        cover: '/images/home/news/3.jpg',
        pubDate: '2025-08-28'
    },
]

const chinaPoints = [
    [
        {name: '天津销售处', nameEn: 'Tianjin Sales Office', position: {left: '59.904%', top: '38.590%'},
            cus: [
                '联系人：孙振清',
                '电话：13820153214',
                '地址：天津市北辰区宜兴埠七街开发区铁达洪针织厂院内',
            ],
            cusEn: [
                'Contact: Sun Zhenqing',
                'Tel: 13820153214',
                'Address: Tieda Hong Knitting Factory, Development Zone, Yixingbu 7th St, Beichen District, Tianjin',
            ]
        },
        {name: '邯郸销售处', nameEn: 'Handan Sales Office', position: {left: '57.514%', top: '41.975%'},
            cus: [
                '联系人：刘爱君',
                '电话：18206118072',
                '地址：河北省邯郸市高开区宏钜物流',
            ],
            cusEn: [
                'Contact: Liu Aijun',
                'Tel: 18206118072',
                'Address: Hongju Logistics, High-tech Zone, Handan, Hebei',
            ]
        },
        {name: '芜湖销售处', nameEn: 'Wuhu Sales Office', position: {left: '60.656%', top: '49.309%'},
            cus: [
                '联系人：刘一平',
                '电话：18206118382',
                '地址：安徽省芜湖市鸠江经济开发区宇润人才公寓17栋2单元501',
            ],
            cusEn: [
                'Contact: Liu Yiping',
                'Tel: 18206118382',
                'Address: Apt 501, Unit 2, Bldg 17, Yurun Talent Apt, Jiujiang Economic Dev. Zone, Wuhu, Anhui',
            ]
        },
        {name: '合肥销售处', nameEn: 'Hefei Sales Office', position: {left: '60.041%', top: '48.745%'},
            cus: [
                '联系人：陈利',
                '电话：18206118396',
                '地址：合肥经开区海恒社区福禄园14栋101',
            ],
            cusEn: [
                'Contact: Chen Li',
                'Tel: 18206118396',
                'Address: Rm 101, Bldg 14, Fuluyuan, Haiheng Community, Economic Dev. Zone, Hefei',
            ]
        },
        {name: '武汉销售处', nameEn: 'Wuhan Sales Office', position: {left: '58.333%', top: '51.002%'},
            cus: [
                '联系人：刘爱君',
                '电话：18206118072',
                '地址：湖北省武汉市沌口开发区珠山湖大道792号国博全力物流仓储有限公司',
            ],
            cusEn: [
                'Contact: Liu Aijun',
                'Tel: 18206118072',
                'Address: Guobo Quanli Logistics, No. 792 Zhushanhu Ave, Zhuankou Dev. Zone, Wuhan, Hubei',
            ]
        }
    ],
    [
        {name: '重庆销售处', nameEn: 'Chongqing Sales Office', position: {left: '51.844%', top: '52.017%'},
            cus: [
                '联系人：耿兴国',
                '电话：13915897951',
                '地址：重庆市江北区五里坪港城东路98号东田产业园2栋C2-3电梯二楼',
            ],
            cusEn: [
                'Contact: Geng Xingguo',
                'Tel: 13915897951',
                'Address: 2F, Bldg 2, Dongtian Industrial Park, No. 98 Gangcheng East Rd, Jiangbei District, Chongqing',
            ]
        }
    ],
    [
        {name: '江门销售处', nameEn: 'Jiangmen Sales Office', position: {left: '56.472%', top: '62.025%'},
            cus: [
                '联系人：植嘉伟',
                '电话：15917876134',
                '地址：江门蓬江区棠下镇江盛路6号1栋家缘住宿',
            ],
            cusEn: [
                'Contact: Zhi Jiawei',
                'Tel: 15917876134',
                'Address: Jiayuan Hostel, Bldg 1, No. 6 Jiangsheng Rd, Tangxia Town, Pengjiang District, Jiangmen',
            ]
        },
    ],
    [
        {name: '黄岛销售处', nameEn: 'Huangdao Sales Office', position: {left: '61.749%', top: '41.524%'},
            cus: [
                '联系人：严洪',
                '电话：18206118383',
                '地址：青岛市黄岛区前湾港路临港花园',
            ],
            cusEn: [
                'Contact: Yan Hong',
                'Tel: 18206118383',
                'Address: Lingang Garden, Qianwan Port Rd, Huangdao District, Qingdao',
            ]
        },
        {name: '青岛销售处', nameEn: 'Qingdao Sales Office', position: {left: '60.792%', top: '42.652%'},
            cus: [
                '联系人：王伟',
                '电话：18206118383',
                '地址：青岛市李沧区改装大道天力保温材料公司院内',
            ],
            cusEn: [
                'Contact: Wang Wei',
                'Tel: 18206118383',
                'Address: Tianli Insulation Materials Co., Gaizhuang Ave, Licang District, Qingdao',
            ]
        },
        {name: '常州本部', nameEn: 'Changzhou HQ', position: {left: '61.847%', top: '49.020%'},
            cus: [
                '联系人：耿克非',
                '电话：0519-69887878转9666',
                '邮箱：gengkf@czaohong.com',
                '地址：江苏省常州市新北区电子产业园新科路15号',
            ],
            cusEn: [
                'Contact: Geng Kefei',
                'Tel: +86-519-69887878 ext. 9666',
                'Email: gengkf@czaohong.com',
                'Address: No. 15 Xinke Road, Electronics Industrial Park, Xinbei District, Changzhou, Jiangsu',
            ]
        },
        {name: '深圳销售处', nameEn: 'Shenzhen Sales Office', position: {left: '58.060%', top: '61.383%'},
            cus: [
                '联系人：王渭',
                '电话：18206118395',
                '地址：深圳市宝安区绿科方群食品有限公司/厂房2楼仓库208号房',
            ],
            cusEn: [
                'Contact: Wang Wei',
                'Tel: 18206118395',
                "Address: Rm 208, Warehouse 2F, Lükefang Food Co., Bao'an District, Shenzhen",
            ]
        },
        {name: '香港昇耀', nameEn: 'Elite Prospect (Hong Kong)', position: {left: '57.992%', top: '63.075%'},
            cus: [],
            cusEn: [],
            largeItem:true
        },
    ]
]

const gloPoints = [
    {name: '英国', nameEn: 'UK', position: {left: '5.260%', top: '50.551%'}, type: 'orange'},
    {name: '德国', nameEn: 'Germany', position: {left: '8.197%', top: '51.936%'}, type: 'orange'},
    {name: '波兰', nameEn: 'Poland', position: {left: '11.480%', top: '52.332%'}, type: 'orange'},
    {name: '法国', nameEn: 'France', position: {left: '6.079%', top: '54.508%'}, type: 'orange'},
    {name: '奥地利', nameEn: 'Austria', position: {left: '9.718%', top: '53.800%'}, type: 'orange'},
    {name: '斯洛文尼亚', nameEn: 'Slovenia', position: {left: '9.918%', top: '54.400%'}, type: 'orange'},
    {name: '斯洛伐克', nameEn: 'Slovakia', position: {left: '11.624%', top: '53.427%'}, type: 'orange'},
    {name: '匈牙利', nameEn: 'Hungary', position: {left: '11.324%', top: '53.727%'}, type: 'blue'},
    {name: '意大利', nameEn: 'Italy', position: {left: '9.768%', top: '57.377%'}, type: 'orange'},
    {name: '西班牙', nameEn: 'Spain', position: {left: '4.713%', top: '58.169%'}, type: 'orange'},
    {name: '突尼斯', nameEn: 'Tunisia', position: {left: '8.538%', top: '60.147%'}, type: 'orange'},
    {name: '埃及', nameEn: 'Egypt', position: {left: '14.159%', top: '63.410%'}, type: 'orange'},
    {name: '迪拜', nameEn: 'Dubai', position: {left: '21.059%', top: '63.81%'}, type: 'orange'},
    {name: '罗马尼亚', nameEn: 'Romania', position: {left: '12.596%', top: '55.466%'}, type: 'orange'},
    {name: '土耳其', nameEn: 'Turkey', position: {left: '15.096%', top: '58.466%'}, type: 'orange'},
    {name: '印度', nameEn: 'India', position: {left: '27.049%', top: '66.973%'}, type: 'orange'},
    {name: '日本', nameEn: 'Japan', position: {left: '44.331%', top: '57.674%'}, type: 'orange'},
    {name: '台湾', nameEn: 'Taiwan', position: {left: '38.730%', top: '64.995%'}, type: 'orange'},
    {name: '菲律宾', nameEn: 'Philippines', position: {left: '38.798%', top: '69.545%'}, type: 'orange'},
    {name: '马来西亚', nameEn: 'Malaysia', position: {left: '33.05%', top: '72.003%'}, type: 'orange'},
    {name: '越南', nameEn: 'Vietnam', position: {left: '35.297%', top: '68.459%'}, type: 'orange'},
    {name: '印度尼西亚', nameEn: 'Indonesia', position: {left: '36.997%', top: '74.459%'}, type: 'orange'},
    {name: '澳大利亚', nameEn: 'Australia', position: {left: '43.852%', top: '83.296%'}, type: 'orange'},
    {name: '常州', nameEn: 'Changzhou', position: {left: '38.183%', top: '61.730%'}, type: 'yellow'},
    {name: '泰国', nameEn: 'Thailand', position: {left: '33.333%', top: '68.655%'}, type: 'yellow'},
    {name: '美国', nameEn: 'USA', position: {left: '76.639%', top: '58.169%'}, type: 'orange'},
    {name: '巴西', nameEn: 'Brazil', position: {left: '87.5%', top: '75.5%'}, type: 'orange'},
    {name: '韩国', nameEn: 'South Korea', position: {left: '40.710%', top: '59.554%'}, type: 'blue'},
    {name: '韩国', nameEn: 'South Korea', position: {left: '40.310%', top: '59.154%'}, type: 'orange'},
    {name: '香港', nameEn: 'Hong Kong', position: {left: '37.022%', top: '65.094%'}, type: 'blue'},
    {name: '新加坡', nameEn: 'Singapore', position: {left: '33.75%', top: '73.403%'}, type: 'blue'},
    {name: '墨西哥', nameEn: 'Mexico', position: {left: '76.161%', top: '64.005%'}, type: 'blue'},
    {name: '墨西哥', nameEn: 'Mexico', position: {left: '75.8%', top: '64.3%'}, type: 'orange'},
]

const gloPointsForHome = [
    { "name": "o1", "position": { "left": "5.260%", "top": "36.051%" }, "type": "orange" }, 
    { "name": "o2", "position": { "left": "8.197%", "top": "37.436%" }, "type": "orange" }, 
    { "name": "o3", "position": { "left": "11.680%", "top": "37.832%" }, "type": "orange" }, 
    { "name": "o4", "position": { "left": "6.079%", "top": "40.008%" }, "type": "orange" }, 
    { "name": "o5", "position": { "left": "9.768%", "top": "42.877%" }, "type": "orange" }, 
    { "name": "o6", "position": { "left": "4.713%", "top": "43.669%" }, "type": "orange" }, 
    { "name": "o7", "position": { "left": "8.538%", "top": "45.647%" }, "type": "orange" }, 
    { "name": "o8", "position": { "left": "15.096%", "top": "43.966%" }, "type": "orange" }, 
    { "name": "o9", "position": { "left": "31.831%", "top": "33.183%" }, "type": "orange" }, 
    { "name": "o10", "position": { "left": "27.049%", "top": "52.473%" }, "type": "orange" }, 
    { "name": "o11", "position": { "left": "44.331%", "top": "43.174%" }, "type": "orange" }, 
    { "name": "o12", "position": { "left": "38.730%", "top": "50.495%" }, "type": "orange" }, 
    { "name": "o13", "position": { "left": "38.798%", "top": "55.045%" }, "type": "orange" }, 
    { "name": "o14", "position": { "left": "35.997%", "top": "62.959%" }, "type": "orange" }, 
    { "name": "o15", "position": { "left": "43.852%", "top": "68.796%" }, "type": "orange" }, 
    { "name": "y1", "position": { "left": "38.183%", "top": "47.230%" }, "type": "yellow" }, 
    { "name": "y2", "position": { "left": "33.333%", "top": "54.155%" }, "type": "yellow" }, 
    { "name": "y3", "position": { "left": "76.639%", "top": "43.669%" }, "type": "yellow" }, 
    { "name": "b1", "position": { "left": "40.710%", "top": "45.054%" }, "type": "blue" }, 
    { "name": "b2", "position": { "left": "37.022%", "top": "50.594%" }, "type": "blue" }, 
    { "name": "b3", "position": { "left": "33.743%", "top": "58.903%" }, "type": "blue" }, 
    { "name": "b4", "position": { "left": "76.161%", "top": "49.505%" }, "type": "blue" }
]

const patentBanner = [
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    },
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    },
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    },
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    },
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    },
    {
        image:  '/images/about/patent/item-content.jpg',
        year: '2024',
        t1: 'PCB板抗腐蚀性检测工艺及检测设备 ',
        label: '发明专利',
        abst: '这项由常州澳弘电子申请的发明专利，提出了一种集成盐雾、高温高湿等多种环境模拟的PCB抗腐蚀性检测工艺，并配套专用设备，实现自动化测试与数据判定，提升检测效率与准确性。'
    }
]

const honorList = [
    {
        image: '/images/about/honor/a/1.png'
    },
    {
        image: '/images/about/honor/a/2.png'
    },
    {
        image: '/images/about/honor/a/3.png'
    },
    {
        image: '/images/about/honor/a/4.png'
    },
    {
        image: '/images/about/honor/a/5.png'
    },
    {
        image: '/images/about/honor/a/6.png'
    },
    {
        image: '/images/about/honor/a/7.png'
    },
    {
        image: '/images/about/honor/a/8.png'
    },
    {
        image: '/images/about/honor/a/9.png'
    },
    {
        image: '/images/about/honor/a/10.png'
    },
    {
        image: '/images/about/honor/a/11.png'
    },
    {
        image: '/images/about/honor/a/12.png'
    },
]

const prodList = {
    single: [
        {
            image: '/images/prod/single/1.jpg',
            name: '单面喷锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'FR-4、红油、湿膜感光'
                },
                {
                    label: '使用场景',
                    content: '家电'
                }
            ]
        },
        {
            image: '/images/prod/single/2.jpg',
            name: '单面OSP板',
            p: [
                {
                    label: '产品特点',
                    content: 'CEM-3、UV、蓝油'
                },
                {
                    label: '使用场景',
                    content: '空调'
                }
            ]
        },
        {
            image: '/images/prod/single/3.jpg',
            name: '单面OSP板',
            p: [
                {
                    label: '产品特点',
                    content: 'CEM-1、2oz厚铜'
                },
                {
                    label: '使用场景',
                    content: '游戏机'
                }
            ]
        },
    ],
    double: [
        {
            image: '/images/prod/double/1.jpg',
            name: '双面化锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、黑油'
                },
                {
                    label: '使用场景',
                    content: '汽车车灯'
                }
            ]
        },
        {
            image: '/images/prod/double/2.jpg',
            name: '双面无铅喷锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、2oz厚铜、红油'
                },
                {
                    label: '使用场景',
                    content: '汽车车灯'
                }
            ]
        },
        {
            image: '/images/prod/double/3.jpg',
            name: '双面OSP板',
            p: [
                {
                    label: '产品特点',
                    content: 'FR-4、无PTH孔、线圈走线、湿膜感光'
                },
                {
                    label: '使用场景',
                    content: '电机'
                }
            ]
        },
    ],
    multi: [
        {
            image: '/images/prod/multi/1.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、2.0T'
                },
                {
                    label: '使用场景',
                    content: '汽车BMU（电池管理单元）'
                }
            ]
        },
        {
            image: '/images/prod/multi/2.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、2oz厚铜'
                },
                {
                    label: '使用场景',
                    content: '汽车BSC(制动安全控制系统）'
                }
            ]
        },
    ],
    hdi: [
        {
            image: '/images/prod/hdi/1.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'BLM1B（黑板料、Tg210度）、二阶HDI、叠盲孔、P0.9、墨色一致性、填孔电镀'
                },
                {
                    label: '使用场景',
                    content: '高端显示屏'
                }
            ]
        },
        {
            image: '/images/prod/hdi/2.jpg',
            name: '八层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg170、盲埋孔、金手指'
                },
                {
                    label: '使用场景',
                    content: '特种UPS'
                }
            ]
        },
        {
            image: '/images/prod/hdi/3.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: '6G高频、直径0.4mm半孔、盲埋孔、树脂塞孔、黑油、0.15mm钻针'
                },
                {
                    label: '使用场景',
                    content: '智能家居'
                }
            ]
        },
    ],
    lv: [
        {
            image: '/images/prod/lv/1.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、2.0T'
                },
                {
                    label: '使用场景',
                    content: '汽车BMU（电池管理单元）'
                }
            ]
        },
        {
            image: '/images/prod/lv/2.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、2oz厚铜'
                },
                {
                    label: '使用场景',
                    content: '汽车BSC(制动安全控制系统）'
                }
            ]
        },
    ],
    cu: [
        {
            image: '/images/prod/cu/1.jpg',
            name: '单面铜基化锡板',
            p: [
                {
                    label: '产品特点',
                    content: '盲孔0.1mm、黑油'
                },
                {
                    label: '使用场景',
                    content: '汽车车灯'
                }
            ]
        },
    ],
    tao: [
        {
            image: '/images/prod/tao/1.jpg',
            name: '五层陶瓷板',
            p: [
                {
                    label: '产品特点',
                    content: '化金'
                },
                {
                    label: '使用场景',
                    content: '特种UPS'
                }
            ]
        },
    ],
    te: [
        {
            image: '/images/prod/te/1.jpg',
            name: '四层喷锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、塞铜浆、蓝油'
                },
                {
                    label: '使用场景',
                    content: '汽车BMS(电池管理系统）'
                }
            ]
        },
        {
            image: '/images/prod/te/2.jpg',
            name: '四层化锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg170、CTI600V、无卤材料、线圈板、3.2T、外形倒圆角'
                },
                {
                    label: '使用场景',
                    content: '特种UPS'
                }
            ]
        },
        {
            image: '/images/prod/te/3.jpg',
            name: '六层化金板',
            p: [
                {
                    label: '产品特点',
                    content: '侧沉铜、金手指、2oz厚铜'
                },
                {
                    label: '使用场景',
                    content: '汽车OBC（车载充电机）'
                }
            ]
        },
        {
            image: '/images/prod/te/4.jpg',
            name: '四层喷锡板',
            p: [
                {
                    label: '产品特点',
                    content: 'Tg150、塞铜浆、蓝油'
                },
                {
                    label: '使用场景',
                    content: '汽车BMS(电池管理系统）'
                }
            ]
        },
    ],
}


const salesPoints = [
    {
        pointName: '青岛销售处',
        pointNameEn: 'Qingdao Sales Office',
        address: '青岛市李沧区改装大道天力保温材料公司院内',
        addressEn: 'Inside Tianli Thermal Insulation Materials Company Yard, Gaizhuang Avenue, Licang District, Qingdao City',
        name: ['王伟'],
        tel: ['18206118383']
    },
    {
        pointName: '黄岛销售处',
        pointNameEn: 'Huangdao Sales Office',
        address: '青岛市黄岛区前湾港路临港花园',
        addressEn: 'Lingang Huayuan, Qianwan Gang Road, Huangdao District, Qingdao City',
        name: ['严洪'],
        tel: ['18206118383']
    },
    {
        pointName: '合肥销售处',
        pointNameEn: 'Hefei Sales Office',
        address: '合肥经开区海恒社区福禄园14栋101',
        addressEn: 'Building 14, Unit 101, Fuluyuan, Haiheng Community, Hefei Economic and Technological Development Zone, Hefei City',
        name: ['陈利'],
        tel: ['18206118396']
    },
    {
        pointName: '重庆销售处',
        pointNameEn: 'Chongqing Sales Office',
        address: '重庆市江北区五里坪港城东路98号东田产业园2栋C2-3电梯二楼',
        addressEn: '2nd Floor, Elevator C2-3, Building 2, Dongtian Industrial Park, No. 98 Gangcheng East Road, Wuliping, Jiangbei District, Chongqing City',
        name: ['耿兴国'],
        tel: ['13915897951']
    },
    {
        pointName: '深圳销售处',
        pointNameEn: 'Shenzhen Sales Office',
        address: '深圳市宝安区绿科方群食品有限公司/厂房2楼仓库208号房',
        addressEn: 'Room 208, Warehouse 2nd Floor, Lvkefangqun Food Co., Ltd. / Factory Building, Bao\'an District, Shenzhen City',
        name: ['王渭'],
        tel: ['18206118395']
    },
    {
        pointName: '江门销售处',
        pointNameEn: 'Jiangmen Sales Office',
        address: '江门蓬江区棠下镇江盛路6号1栋家缘住宿',
        addressEn: 'Building 1, Jiayuan Accommodation, No. 6 Jiangsheng Road, Tangxia Town, Pengjiang District, Jiangmen City',
        name: ['植嘉伟'],
        tel: ['15917876134']
    },
    {
        pointName: '邯郸销售处',
        pointNameEn: 'Handan Sales Office',
        address: '河北省邯郸市高开区宏钜物流',
        addressEn: 'Hongju Logistics, Gaokai District, Handan City, Hebei Province',
        name: ['刘爱君'],
        tel: ['18206118072']
    },
    {
        pointName: '芜湖销售处',
        pointNameEn: 'Wuhu Sales Office',
        address: '安徽省芜湖市鸠江经济开发区宇润人才公寓17栋2单元501',
        addressEn: 'Building 17, Unit 2, 501, Yurun Talent Apartment, Jiujiang Economic Development Zone, Wuhu City, Anhui Province',
        name: ['刘一平'],
        tel: ['18206118382']
    },
    {
        pointName: '天津销售处',
        pointNameEn: 'Tianjin Sales Office',
        address: '天津市北辰区宜兴埠七街开发区铁达洪针织厂院内',
        addressEn: 'Inside Tiedahong Knitting Factory Yard, Qijie Development Zone, Yixingfu, Beichen District, Tianjin City',
        name: ['孙振清'],
        tel: ['13820153214']
    },
    {
        pointName: '武汉销售处',
        pointNameEn: 'Wuhan Sales Office',
        address: '湖北省武汉市沌口开发区珠山湖大道792号国博全力物流仓储有限公司',
        addressEn: 'Guobo Quanli Logistics Warehousing Co., Ltd., No. 792 Zhushan Lake Avenue, Zhuankou Development Zone, Wuhan City, Hubei Province',
        name: ['刘爱君'],
        tel: ['18206118072']
    },
    {
        pointName: '韩国销售处',
        pointNameEn: 'South Korea Sales Office',
        address: 'Tera Tower B (651 Moonjung-Dong) 167 Songpa-daero, Songpa-gu, Seoul, Korea',
        name: ['洪斗杓（DP Hong）'],
        tel: ['822-6959-5509']
    },
    {
        pointName: '欧洲销售处',
        pointNameEn: 'Europe Sales Office',
        address: '2890 Tata, Új út 3. Hungary',
        name: ['Gergely Szilas'],
        tel: ['+36 70 421 0329']
    },
]

// =============================================
// ESG 报告下载配置
// 程序员后台维护：更新 url 字段为实际 PDF 下载链接
// title: 显示在卡片上的报告标题
// year: 报告年份
// url: PDF 下载地址（为空则隐藏下载按钮）
// =============================================
const esgReport = {
    title: '澳弘电子 ESG 报告',
    year: '2024',
    url: ''
}

export default {
    nav,
    indexBanner,
    profileData,
    indexApplication,
    history,
    newsList,
    chinaPoints,
    gloPoints,
    gloPointsForHome,
    patentBanner,
    honorList,
    prodList,
    salesPoints,
    esgReport
}
