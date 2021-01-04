/**
 * @flie 登录模块
 */

const express = require("express");
const router = express.Router();
const { ctx } = require("../../extend/index");

const user = require("../../datas/user")
const routers = require("../../datas/router")



// 获取用户权限表
router.get('/user-router-auto/:uid', async (req,res) => {
    // 获取前端传过来的user id,
    var uid = req.params.uid;

    if(uid) {
        // 根据用户权限不同生成不同的路由表authRouterinfo
        let authRouterInfo = [];

        let userInfo = user.filter(user => user.id == uid)[0];
        userInfo.auth.map(rid => {
            routers.map(router => {
                if(rid === router.id) {
                    authRouterInfo.push(router)
                } 
            })
        })        
        res.json(ctx.body(authRouterInfo))
    }
})

module.exports = router;
