// const baseUrl = 'http://127.0.0.1:8088'   // 测试环境地址
const baseUrl = 'http://81.71.17.188:8088' // 产线地址
// const baseUrl = process.env.VUE_APP_API_URL; // 使用环境变量

const menuList = [

    {
        name: 'CMMI实施',
        path: '/home',
    },
    {
        name: 'CMMI评估认证',
        path: '/cmmi',
    },
    {
        name: '关于华赛',
        pic: '/images/wbq/p5.webp',
        path: '',
        subMenu: [
            {
                name: '华赛简介',
                path: '/aboutHS'
            },
            {
                name: '咨询团队',
                path: '/team'
            },

            {
                name: '行业覆盖',
                path: '/hy'
            },
            {
                name: '客户评价',
                path: '/khpj'
            },
            {
                name: '典型案例',
                path: '/al'
            },
        ],
    },
    {
        name: '华赛业务',
        path: '',
        pic: '/images/wbq/p6.webp',
        subMenu: [
            {
                name: '咨询服务',
                path: '/consultingService'
            },
            {
                name: '培训服务',
                path: '/training'
            },
            {
                name: '认证服务',
                path: '/rzservice'
            },
        ],
    },
    {
        name: '华赛研究',
        path: '',
        pic: '/images/wbq/p9.jpg',
        subMenu: [
            {
                name: '华赛工具',
                path: '/hstools'
            },
            {
                name: '华赛文库',
                path: '/hsdocs'
            },
            {
                name: '参考资料',
                path: '/hsdatas'
            },
        ],
    },
    // {
    //     name: '社区建设',
    //     pic: '/images/wbq/p1.webp',
    //     path: '',
    //     subMenu: [
    //         {
    //             name: '社区活动',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '商务合作',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '廉洁申明',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '信息安全',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '服务政策',
    //             path: '/noPage'
    //         },
    //     ],
    // },
    {
        name: '联系我们',
        path: 'phone',
    },
]
const menuLista = [

    {
        name: 'ASPICE',
        path: '/aspice',
    },
    {
        name: '关于华赛',
        pic: '/images/wbq/p5.webp',
        path: '',
        subMenu: [
            {
                name: '华赛简介',
                path: '/aboutHS'
            },
            {
                name: '咨询团队',
                path: '/team'
            },

            {
                name: '行业覆盖',
                path: '/hy'
            },
            {
                name: '客户评价',
                path: '/khpj'
            },
            {
                name: '典型案例',
                path: '/al'
            },
        ],
    },
    {
        name: '华赛业务',
        path: '',
        pic: '/images/wbq/p6.webp',
        subMenu: [
            {
                name: '咨询服务',
                path: '/consultingService'
            },
            {
                name: '培训服务',
                path: '/training'
            },
            {
                name: '认证服务',
                path: '/aspiceService'
            },
        ],
    },
    {
        name: '华赛研究',
        path: '',
        pic: '/images/wbq/p9.jpg',
        subMenu: [
            {
                name: '华赛工具',
                path: '/hstools'
            },
            {
                name: '华赛文库',
                path: '/hsdocs'
            },
            {
                name: '参考资料',
                path: '/hsdatas'
            },
        ],
    },
    // {
    //     name: '社区建设',
    //     pic: '/images/wbq/p1.webp',
    //     path: '',
    //     subMenu: [
    //         {
    //             name: '社区活动',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '商务合作',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '廉洁申明',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '信息安全',
    //             path: '/noPage'
    //         },
    //         {
    //             name: '服务政策',
    //             path: '/noPage'
    //         },
    //     ],
    // },
    {
        name: '联系我们',
        path: 'phone',
    },
]
const footList = [
    {
        name: '关于华赛',
        path: '/ProductService',
        subMenu: [
            {
                name: '了解华赛',
                path: '/aboutHS'
            },
            {
                name: '行业覆盖',
                path: '/service'
            },
            {
                name: '典型案例',
                path: '/noPage'
            },
        ],
    },
    {
        name: '华赛业务',
        path: '/Business',
        subMenu: [
            {
                name: '咨询服务',
                path: '/consultingService'
            },
            {
                name: '培训服务',
                path: '/a'
            },
            {
                name: '认证服务',
                path: '/a'
            },
        ],
    },
    {
        name: '华赛研究',
        path: '/Business',
        subMenu: [
            {
                name: '华赛工具',
                path: '/a'
            },
            {
                name: '华赛文库',
                path: '/a'
            },
            {
                name: '参考资料',
                path: '/a'
            },
        ],
    },
    {
        name: '社区建设',
        path: '/Business',
        subMenu: [
            {
                name: '社区活动',
                path: '/a'
            },
            {
                name: '上午合作',
                path: '/a'
            },
            {
                name: '廉洁申明',
                path: '/a'
            },
            {
                name: '信息安全',
                path: '/a'
            },
            {
                name: '服务政策',
                path: '/a'
            },
        ],
    },
    {
        name: '联系我们',
        path: '/about',
        subMenu: [
            {
                name: '在线方式',
                path: '/a'
            },
            {
                name: '在线客服',
                path: '/a'
            },
        ],
    },
]
export {
    baseUrl,
    menuList,
    menuLista,
    footList
}

