/**
 * @flie 登录模块
 */

const express = require("express");
const router = express.Router();
const adminUser = require("./../../model/adminUser.js");
const { ctx } = require("../../extend/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const user = require("../../datas/user")
const auth = require("../../datas/router")

// 用户token登录
router.post("/", async (req, res) => {
    let { username, password } = req.body;

    // 校验用户是否存在
    let userModel = await adminUser.findOne({ username: username });

    // 不存在：1.一个用户都没有时，新增admin账户、2.真的没有这个用户
    if (!userModel) {
        let count = await adminUser.estimatedDocumentCount();
        if (0 === count) {
            // 加密
            const password = "123456";
            const hash = bcrypt.hashSync(password, 10, { expiresIn: 60 });
            let model = await adminUser.create({ username: "admin", password: hash });
            res.json(ctx.body(model, "创建admin账号，并登录成功", 200));
            return;
        }
    }

    // 校验密码、返回token
    let isVaild = bcrypt.compareSync(password, userModel.password);
    if (!isVaild) {
        res.json({ msg: "密码错误，请重新输入", code: 400 });
    } else {
        let token = jwt.sign({ id: userModel._id }, "privateKey");
        res.json(ctx.body({token}, "登录成功", 200));
    }
});

// 通过解析用户的token信息获取id，再通过id查询用信息
router.get("/:token",async (req,res) => {
    const { token } = req.params;

    // 解析token
    const { id } = jwt.verify(token, "privateKey");

    // 查表
    let userinfo = await adminUser.find({_id: id}, {password:0})
    res.json(ctx.body(...userinfo));
})

module.exports = router;
