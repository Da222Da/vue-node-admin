`全局安装 npm install koa-generator -g 生成项目 koa2 server cd server 安装依赖npm install 启动项目 npm run dev`

`npm i koa2-cors -S`,解决跨域

```
const cors = require("koa2-cors");

// 跨域问题
app.use(
    cors({
        origin: function (ctx) {
            return "http://localhost:8080";
        },
    })
);
```
