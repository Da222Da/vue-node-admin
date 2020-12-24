# express server 文档

-   使用 mongoose，配置、操作 MongoDB 数据库
-   统一处理接口`/extend/_return.js`

*   multer 插件，处理单文件、多文件上传，显示上传文件进度条
*   如何实现分页功能流程
*   如何实现登录注册

# MongoDB 文档

> 特点：文档型数据库、遵循小驼峰命名

## 数据库操作指令

> `cmd` -> `mongo`,链接 MongoDB 本地服务 -> `show dbs`

-   `show dbs`，显示当前数据库，默认有“admin”、“config”、“local”
-   `use db-name`，进入（或新建）数据库，例如:“use new-admin”
-   `db`显示当前选择的数据库

*   `db.dropDatabase()`删除当前数据库

## collection 集合操作指令

## 文档操作指令

1. 查询

-   `db.collection-name.find()`,查询该集合的所有数据

## #mongoodb 文档记录

-   **API**

1.  `collection-name.estimatedDocumentCount()`，查询文档对象的 length

## #插件

-   bcrypt 使用方式

```
const bcrypt = require("bcrypt");
// 加密
// bcrypt.hashSync(myPlaintextPassword, saltRounds);，自动生成salt，参与加密的字符
//saltRounds || 10，生成salt的迭代次数

const hash = bcrypt.hashSync("123456", 10);
console.log(hash); // 2b$10$hdF0pNUScpjRXKoeKccFHO7KTbmM1aKsQR/GDKX6cBOrF5gkMQYUu


// 解密
// bcrypt.compareSync(myPlaintextPassword, "password from the DB");，自动生成salt，参与加密的字符
let isVaild = bcrypt.compareSync(password, baseData.password)
console.log(isVaild) // Boolean
```

-   jsonwebtoken 使用方式

```
const jwt = require("jsonwebtoken");

// 生成token令牌
const token_value = jwt.sign({ name:"小明", password: 123456 }, "privateKey");

// 解析token令牌
const {name, password} = jwt.verify(token_value, "privateKey");
```

## ##token 登录流程

1. 登录 API（验证用户名是否存在、密码是否正确，然后，返回 token）
2. 前端操作

    - 登录时，将 token 值存到 localstorage
    - 写好路由拦截

    ```
        // 全局路由守卫
        router.beforeEach((to, from, next) => {
            let isLogin = localStorage.getItem("token") ? true : false;
            if (to.path === "/login") {
                next();
            } else {
                isLogin ? next() : next({ path: "/login" });
            }
        });
    ```

    - 使用 axios 写好请求拦截器，为每一条请求 API，添加请求头 authorization 属性，将登录获取的 token 值，发给后台服务器，后台校验该用户是否有权限。

3. 后台服务器写好校验权限中间件

## ## 优化，自动弹框脚本（script）
