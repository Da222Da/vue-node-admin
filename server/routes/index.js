const router = require("koa-router")();

// 获取假数据
const routers = require("./../datas/router.js");
const users = require("./../datas/user.js");
router.get("/", async (ctx, next) => {
    await ctx.render("index", {
        title: "Hello Koa 2!",
    });
});

router.post("/user-router-auth", async (ctx, next) => {
    const { uid } = ctx.request.body;
    if (uid) {
        // 用户存在uid，怎么样
        let authRouterInfo = [];

        // 获取请求用户所拥有的路由表
        const userinfo = users.filter((user) => user.id == uid)[0];
        userinfo.auth.map((rid) => {
            routers.map((router) => {
                if (router.id === rid) {
                    authRouterInfo.push(router);
                }
            });
        });

        ctx.body = authRouterInfo;
    } else {
        next();
    }
});

module.exports = router;
