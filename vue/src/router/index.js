import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: index,
        redirect: { path: "/login-register" },
        children: [
            // { path: "/express-server", component: () => import("@/views/technival-support/ExpressServer.vue") },
            { path: "/login-register", component: () => import("@/views/functions/login-register/index.vue") },
            { path: "/edtor", component: () => import("@/views/functions/login-register/Edtor.vue") },
            // 配置props: true,将params.id注入到Edtor.vue组件，实现解耦。
            { path: "/edtor/:id", component: () => import("@/views/functions/login-register/Edtor.vue"), props: true },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
