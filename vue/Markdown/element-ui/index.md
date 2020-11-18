# element-ui 框架的使用

-   第一步：安装`npm i element-ui -S`

-   第二步：配置 babel.config.js:

> 注意：跟官方文档有出入！针对 vue2.0

```
module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk",
            },
        ],
    ],
};

```

-   第三步：模块化管理
-   文件目录`assets/libs/element-ui/index.js`:

```
/**
 * 按需引入element-ui框架
 */
import Vue from "vue";
import { Button } from "element-ui";

export default (function() {
    Vue.use(Button);
})();

```

-   第四步：全局引入 main.js

```
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/libs/element-ui";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

```
