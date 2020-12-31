import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";
import store from "@/store/index.js"

import {Message} from "element-ui"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: index,
        redirect: { path: "/login" },
        children: [
            { path: "/popup", component: () => import("@/views/popup/index.vue") },
            { path: "/popup-edtor", component: () => import("@/views/popup/Edtor.vue") },
            // 配置props: true,将params.id注入到Edtor.vue组件，实现解耦。
            { path: "/popup-edtor/:id", component: () => import("@/views/popup/Edtor.vue"), props: true },

            // 账号管理
            { path: "/admin", component: () => import("@/views/admin/index.vue"), name: "Admin" },
            { path: "/admin-edtor", component: () => import("@/views/admin/Edtor.vue"), name: "AdminEdtor" },
            { path: "/admin-edtor/:id", component: () => import("@/views/admin/Edtor.vue"),  props: true },
            // 文章管理
            // { path: "/create-article", component: () => import("@/views/functions/article/Edtor.vue") },
        ],
    },
    // 登录页面
    { path: "/login", component: () => import("@/views/login-register/index.vue"), name: "Login" },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
        // 是否已经登录----拿到了token信息
        if(store.state.name.length === 0) {
            // 前往登录页面的时候，不获取用户信息
            if(to.path === "/login"){
                next();
            }else{
                store.dispatch("get_user_info").then(() => {
                    next();
                })
            } 
        }else {
            next();
        }
});

export default router;
