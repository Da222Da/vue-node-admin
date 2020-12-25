/**
 * @flie 登录模块
 */

const express = require("express");
const router = express.Router();
const adminUser = require("./../../model/adminUser.js");
const { ctx } = require("../../extend/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// token login API
router.post("/", async (req, res) => {
    let { username, password } = req.body;

    // 校验用户是否存在
    let userModel = await adminUser.findOne({ username: username });

    // 不存在：1.一个用户都没有时，新增admin账户、2.真的没有这个用户
    if (!userModel) {
        let count = await adminUser.estimatedDocumentCount();
        if (0 === count) {
            let model = await adminUser.create({ username: "admin", password: "123456" });
            res.json(ctx.body(model, "创建admin账号，并登录成功", 200));
        }
    } else {
        if (password === userModel.password) {
            let token = jwt.sign({ id: userModel._id, username: userModel.username }, "privateKey");
            res.json(ctx.body(token, "登录成功", 200));
        } else {
            res.json({ msg: "密码错误，请重新输入", code: 404 });
        }
    }
});

// 加密版
// router.post("/", async (req, res) => {
//     let { username, password } = req.body;

//     // 校验用户是否存在
//     let userModel = await adminUser.findOne({ username: username });

//     // 不存在：1.一个用户都没有时，新增admin账户、2.真的没有这个用户
//     if (!userModel) {
//         let count = await adminUser.estimatedDocumentCount();
//         if (0 === count) {
//             // 加密
//             const password = "123456";
//             const hash = bcrypt.hashSync(password, 10, { expiresIn: 60 });
//             let model = await adminUser.create({ username: "admin", password: hash });
//             res.json(ctx.body(model, "创建admin账号，并登录成功", 200));
//             return;
//         }
//     }

//     // 校验密码、返回token
//     let isVaild = bcrypt.compareSync(password, userModel.password);
//     if (!isVaild) {
//         res.json({ msg: "密码错误，请重新输入", code: 200 });
//     } else {
//         let token = jwt.sign({ id: userModel._id, username: userModel.username }, "privateKey");
//         res.json(ctx.body(token, "登录成功", 200));
//     }
// });

module.exports = router;
