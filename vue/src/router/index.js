import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: index },
    { path: "/login", component: () => import('@/views/login/index.vue')},
    { path: "/test",component: () => import('@/views/test-pages/index.vue') }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
