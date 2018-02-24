import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import Status from './views/Status.vue'
import StatusItem1 from './views/StatusItem1.vue'
import StatusItem2 from './views/StatusItem2.vue'



Vue.use(Router);


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'HOME'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'ABOUT'
        }
    },
    {
        path: '/status',
        name: 'status',
        component: Status,
        meta: {
            title: 'STATUS'
        },
        children: [ // 嵌套路由的作用是在一个view里，再用router引入其他组件，也就是嵌套而不是整个切换view，切换整个view如item2。你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。
            {
                path: 'item1', // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
                component: StatusItem1,
                meta: {
                    title: 'STATUSITEM1'
                }
            }
        ]
    },
    {
        path: '/status/item2',
        component: StatusItem2,
        meta: {
            title: 'STATUSITEM2'
        }
    },
    {
        path: '*',
        redirect: '/status',
        meta: {
            title: 'STATUS'
        }
    },
];


const router = new Router({
    routes: routes,
    mode: 'hash',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(to.matched);

    document.title = to.meta.title;
    document.querySelector('title').innerText = to.meta.title;
    next();
});


export default router

