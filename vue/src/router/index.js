import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: index,
        redirect: { path: "/popup" },
        children: [
            { path: "/popup", component: () => import("@/views/popup/index.vue") },
            { path: "/popup-edtor", component: () => import("@/views/popup/Edtor.vue") },
            // 配置props: true,将params.id注入到Edtor.vue组件，实现解耦。
            { path: "/popup-edtor/:id", component: () => import("@/views/popup/Edtor.vue"), props: true },

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
    let isLogin = localStorage.getItem("token") ? true : false;
    if (to.path === "/login") {
        next();
    } else {
        isLogin ? next() : next({ path: "/login" });
    }
});

export default router;
