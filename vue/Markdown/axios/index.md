# 配置 axios

> axios，ajax 封装框架`npm i axios -S`
>
> 经常和数据序列化插件 qs`npm i qs -S`配合使用：
>
> 例如，QS.stringify({name:admin,password}) --> 'name=admin&password=123456'
>
> 例如，QS.parse('name=admin&password=123456') --> {name: "admin", password: "123456"}

## #基本配置以及使用

-   **`plugin/axios/index.js`配置文件如下**

```
/**
 * @flie 配置axios
 */
import axios from "axios";
import QS from "qs"; // 序列化数据，

// 配置请求路径
axios.defaults.baseURL = "development" === process.env.NODE_ENV ? "http://localhost:3000" : "http://localhost:3000";
// 请求超时10s
axios.defaults.timeout = 10000;

/**
 * axios get请求
 * @param {string} url [请求地址]
 * @param {Object} params [请求参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params: params })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * axios post请求
 * @param {string} url [请求地址]
 * @param {Object} data [请求参数]
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, QS.stringify(data))
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

```

-   **`api/login/login.js`api 统一管理文件。代码如下：**

```
/**
 * @file 登录接口文件
 */

import { get, post } from "@/assets/plugins/axios/index.js";

export const login = (data) => post("/login", data);

```

-   **`login.vue`api 使用文件。代码如下：**

```
<script>
import { login } from "@/api/login/login.js";
export default {
    data() {
        return {
            loginData: {
                name: "admin",
                password: "123456",
            },
        };
    },
    methods: {
        submit() {
            let data = {
                name: this.loginData.name,
                password: this.loginData.password,
            };
            login(data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

```
