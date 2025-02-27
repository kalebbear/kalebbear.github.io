import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/ProductDetail/:id',
        name: 'ProductDetail',
        component: () => import('@/views/front/components/ProductDetail.vue'),
        props: true
    },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        component: () => import('@/views/login/register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/front/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/service',
        name: 'service',
        component: () => import('@/views/about/Service.vue'),
        meta: {
            title: '行业覆盖'
        }
    },
    // 介绍
    {
        path: '/aboutHS',
        name: 'aboutHS',
        component: () => import('@/views/about/AboutHS.vue'),
        meta: {
            title: '关于华赛'
        }
    },
    {
        path: '/team',
        name: 'team',
        component: () => import('@/views/about/team.vue'),
        meta: {
            title: '咨询团队'
        }
    },
    {
        path: '/khpj',
        name: 'team',
        component: () => import('@/views/about/khpj.vue'),
        meta: {
            title: '客户评价'
        }
    },
    {
        path: '/noPage',
        name: 'noPage',
        component: () => import('@/views/about/XXX.vue'),
        meta: {
            title: '暂无'
        }
    },
    {
        path: '/cmmijs',
        name: 'cmmijs',
        component: () => import('@/views/cmmi/cmmijs.vue'),
        meta: {
            title: '什么是CMMI'
        }
    },
    {
        path: '/whatCMMI',
        name: 'whatCMMI',
        component: () => import('@/views/cmmi/what.vue'),
        meta: {
            title: '什么是CMMI'
        }
    },
    {
        path: '/shCMMI',
        name: 'shCMMI',
        component: () => import('@/views/cmmi/shCMMI.vue'),
        meta: {
            title: '实施CMMI'
        }
    },
    {
        path: '/hy',
        name: 'hy',
        component: () => import('@/views/cmmi/hy.vue'),
        meta: {
            title: '覆盖行业'
        }
    },
    {
        path: '/al',
        name: 'al',
        component: () => import('@/views/cmmi/al.vue'),
        meta: {
            title: '客户案例'
        }
    },
    {
        path: '/pglc',
        name: 'al',
        component: () => import('@/views/cmmi/pglc.vue'),
        meta: {
            title: '评估流程'
        }
    },
    // 华赛服务consultingService
    {
        path: '/consultingService',
        name: 'consultingService',
        component: () => import('@/views/service/consultingService.vue'),
        meta: {
            title: '咨询服务'
        }

    },
    {
        path: '/gkkc',
        name: 'gkkc',
        component: () => import('@/views/service/gkkc.vue'),
        meta: {
            title: '公开课程'
        }

    },
    {
        path: '/kcml',
        name: 'kcml',
        component: () => import('@/views/service/kcml.vue'),
        meta: {
            title: '课程目录'
        }

    },
    {
        path: '/qynx',
        name: 'qynx',
        component: () => import('@/views/service/qynx.vue'),
        meta: {
            title: '企业内训'
        }

    },
    {
        path: '/training',
        name: 'training',
        component: () => import('@/views/service/training.vue'),
        meta: {
            title: '培训服务'
        }

    },
    {
        path: '/cmmi',
        name: 'cmmi',
        component: () => import('@/views/front/CMMI.vue'),
        meta: {
            title: 'CMMI评估'
        }
    },
    {
        path: '/productService',
        name: 'ProductService',
        component: () => import('@/views/front/ProductService.vue'),
        meta: {
            title: '产品与服务'
        }
    },
    {
        path: '/business',
        name: 'Business',
        component: () => import('@/views/front/Business.vue'),
        meta: {
            title: '招商'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
        meta: {
            title: '关于我们'
        }
    },

    {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/admin/Index.vue'),
        meta: {
            title: '后台首页'
        },
        children: [
            {
                path: '/info',
                name: 'Info',
                component: () => import('@/views/admin/Info.vue'),
                meta: {
                    title: '基本信息'
                }
            },
            {
                path: '/Brands',
                name: 'Brands',
                component: () => import('@/views/admin/Brands.vue'),
                meta: {
                    title: '品牌配置'
                }
            },
            {
                path: '/Products',
                name: 'Products',
                component: () => import('@/views/admin/Products.vue'),
                meta: {
                    title: '商品配置'
                }
            },
            {
                path: '/Carousel',
                name: 'Carousel',
                component: () => import('@/views/admin/Carousel.vue'),
                meta: {
                    title: '轮播图配置'
                }
            },
            {
                path: '/ProductsCarousels',
                name: 'ProductsCarousels',
                component: () => import('@/views/admin/ProductsCarousels.vue'),
                meta: {
                    title: '轮播图配置'
                }
            },
            {
                path: '/ProductsWaterfall',
                name: 'ProductsWaterfall',
                component: () => import('@/views/admin/ProductsWaterfall.vue'),
                meta: {
                    title: '瀑布流商品配置'
                }
            },
            {
                path: '/BrandAuthorizationCertificate',
                name: 'BrandAuthorizationCertificate',
                component: () => import('@/views/admin/BrandAuthorizationCertificate.vue'),
                meta: {
                    title: '品牌授权证书配置'
                }
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router

export function resetRouter () {
    router.push({ path: '/login' })
}
