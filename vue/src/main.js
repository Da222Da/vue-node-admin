import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/common.css"; // css
import "@/assets/icons/index.js"; // icons
import "@/assets/plugins/element-ui/index.js"; // element-ui

import { generateRouter } from "@/utils/index.js"

// 配置请求路径
import config from "@/config";
Vue.prototype.$baseurl = "development" === process.env.NODE_ENV ? config.baseURL.dev : config.baseURL.pro;

Vue.config.productionTip = false;

// 路由守卫
router.beforeEach(async (to,from,next) => {
    if(!store.state.isHasAuth){
        await store.dispatch("getRouterAuth");
        const newRouters = generateRouter(store.state.authRouter);
        console.log(newRouters);
        // vue-router动态添加路由
        router.addRoutes(newRouters);
        console.log(router);
        next({to: to.path})
    }else {
        next();
    }
})

// router.beforeEach((to, from, next) => {
//     // 是否已经登录----拿到了token信息
//     if(store.state.name.length === 0) {
//         // 前往登录页面的时候，不获取用户信息
//         if(to.path === "/login"){
//             next();
//         }else{
//             store.dispatch("get_user_info").then(() => {
//                 next();
//             })
//         } 
//     }else {
//         next();
//     }
// });


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
