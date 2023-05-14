import type { 
    MenuItem, 
    SiteConfig, 
    DefaultAssets, 
    PostSliderConfig, 
    TwikooConfig, 
    FooterConfig, 
    MemoriesConfig, 
    ThemeConfig, 
    HeadingConfig
} from './types/config'

// 站点信息
export const site:SiteConfig = {
    // 你将要部署到的站点地址
    origin: 'https://iak.dorakika.cn',
    // 站点图标链接
    favicon: '/iak.png',
    // 站点名称
    name: 'IAK',
    // 站点标语
    slogan: '一个简单的Astro博客',
    // 站点描述
    description: '这里是一个基于Astro框架搭建的简单博客，主要使用Astro原生与Vue3.0+TypeScript开发',
    // 站点关键词
    keywords: 'Astro,博客,Vue3.0,TypeScript',
    // 站点作者
    author: 'DORAKIKA'
}
export const author = {
    // 作者名称
    name: 'DORAKIKA',
    // 作者头像
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1633198089&s=140',
    // 作者简介
    description: '我是一个喜欢折腾的前端工程师，对一切新鲜事物充满好奇，希望我的文章能给你带来思考和帮助',
    // 作者邮箱
    email: 'dorakika@163.cm',
}
// 顶部菜单：仅支持二级菜单
export const menus: MenuItem[] = [
    {
        name: '时',
        children: [
            {name: '文章归档', href: '/posts'},
            {name: '与昨日书', href: '/memories'},
            {name: '吾之足迹', href: '/mark'}
        ]
    },{
        name: '空',
        children: [
            {name: '友情链接', href: '/friends'}
        ]
    }
]

export const default_assets: DefaultAssets = {
    // 默认文章封面
    cover: '/placeholder-hero.jpg'
}

// 页脚信息
export const footer: FooterConfig = {
    beian: {
        enabled: true,
        value: "皖ICP备2022003488号"
    },
    slogan: "这里是一个简简单单的博客示例 - qaq",
    links: [
        {
            href: 'https://dorakika.cn',
            icon: '<img src="/images/dorakika.png" class="icon" alt="DORAKIKA" />',
            title: 'DORAKIKA'
        },
        {
            href: 'https://github.com/dorakika/iak',
            icon: '<svg t="1670852782966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" width="32" height="32"><path d="M0 524.992q0 166.016 95.488 298.496t247.488 185.504q6.016 0.992 10.016 0.992t6.496-1.504 4-3.008 2.016-4.992 0.512-4.992v-100.512q-36.992 4-66.016-0.512t-45.504-14.016-28.992-23.488-16.992-25.504-8.992-24-5.504-14.496q-8.992-15.008-27.008-27.488t-27.008-20-2.016-14.496q50.016-26.016 112.992 66.016 34.016 51.008 119.008 30.016 10.016-40.992 40-70.016Q293.984 736 237.984 670.976t-56-158.016q0-87.008 55.008-151.008-22.016-64.992 6.016-136.992 28.992-2.016 64.992 11.488t50.496 23.008 25.504 17.504q56.992-16 128.512-16t129.504 16q12.992-8.992 28.992-19.008t48.992-21.504 60.992-9.504q27.008 71.008 7.008 135.008 56 64 56 151.008 0 92.992-56.992 158.496t-172 85.504q43.008 43.008 43.008 104v128.992q0 0.992 0.992 3.008 0 6.016 0.512 8.992t4.512 6.016 12 3.008q152.992-52 250.496-185.504t97.504-300.512q0-104-40.512-199.008t-108.992-163.488-163.488-108.992T512.032 12.96 313.024 53.472 149.536 162.464t-108.992 163.488-40.512 199.008z" p-id="2657"></path></svg>',
            title: 'Github'
        },{
            href: 'mailto:dorakika@163.com',
            icon: '<svg t="1670853960118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1440" width="32" height="32"><path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l64 54.250667V746.666667h597.333334V429.44l64-54.250667zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z m-9.6 64h-578.133334L512 523.882667 801.066667 277.333333z" p-id="1441"></path></svg>',
            title: 'Mail'
        },{
            href: '/rss.xml',
            icon: '<svg t="1677297152241" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3739" width="128" height="128"><path d="M677.7 512c0-91.135-74.565-165.7-165.7-165.7s-165.7 74.565-165.7 165.7c0 77.879 53.852 143.33 126.761 160.73-1.657 4.143-2.486 8.285-2.486 13.257v281.692c0 23.198 18.227 41.425 41.425 41.425s41.425-18.227 41.425-41.425v-281.692c0-4.143-0.83-9.114-2.486-13.257 72.909-17.398 126.761-82.851 126.761-160.73zM512 603.135c-50.539 0-91.135-40.597-91.135-91.135s40.597-91.135 91.135-91.135 91.135 40.597 91.135 91.135-40.597 91.135-91.135 91.135z" fill="#3399FF" p-id="3740"></path><path d="M512 14.897c-274.235 0-497.103 222.867-497.103 497.103 0 166.53 82.022 314.004 207.126 404.309l48.054-67.108c-104.391-75.395-172.329-198.842-172.329-337.201 0-228.667 185.584-414.253 414.253-414.253s414.253 185.584 414.253 414.253c0 138.359-67.938 261.808-173.157 336.373l48.054 67.108c125.933-90.307 207.126-237.78 207.126-404.309 0.83-273.407-222.039-496.274-496.274-496.274z" fill="#3399FF" p-id="3741"></path><path d="M512 180.598c-183.099 0-331.402 148.302-331.402 331.402 0 111.019 54.682 209.612 138.359 269.264l48.054-67.108c-62.966-45.568-103.563-119.306-103.563-202.156 0-137.533 111.019-248.551 248.551-248.551s248.551 111.019 248.551 248.551c0 82.851-40.597 156.588-103.563 202.156l48.054 67.108c83.679-59.652 138.359-158.244 138.359-269.264 0-183.099-148.302-331.402-331.402-331.402z" p-id="3742"></path></svg>',
            title: 'rss订阅'
        }
    ]
}

export const post_slider: PostSliderConfig = {
    limit: 4
}

export const memories: MemoriesConfig = {
    // 在memories页面显示的最大数量
    show_limit: 10,
    // 在首页显示的最大数量
    recent_limit: 5
}

// twikoo => https://twikoo.js.org/
export const twikoo: TwikooConfig = {
    enabled: false,
    url: "https://twikoo.you.love",
    recent_limit: 5,
    // 你的留言板页面，向用户呈现的时候引导用户去留言
    board_url: ''
}

export const headings: HeadingConfig = {
    // 文章标题目录深度（1-6）
    depth: 3
}

// 主题配置
// 此配置只做选项与默认项，具体配置会读取用户浏览器的LocalStorage数据
export const theme: ThemeConfig = {
    main_colors: [
        'var(--blue-meta)',
        'var(--yellow-meta)', 
        'var(--pink-meta)', 
        'var(--red-meta)',
        'var(--green-meta)'
    ],
    large_border_radius: {
        default: true
    },
    brightness: {
        default: 1,
        min: 0.5,
        max: 1,
        step: 0.1
    },
    headerFixed: {
        default: false
    },
    imageBackground: {
        default: false,
        url: 'https://img.dorakika.cn/dora/201704_C.png',
        // 继承：例如在文章页面，背景会继承文章封面图
        inherit: true
    },
    whiteCard: {
        default: true,
    }
}