import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/common.css"; // css
import "@/assets/icons/index.js"; // icons
import "@/assets/plugins/element-ui/index.js"; // element-ui

// 配置请求路径
import config from "@/config";
Vue.prototype.$baseurl = "development" === process.env.NODE_ENV ? config.baseURL.dev : config.baseURL.pro;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
