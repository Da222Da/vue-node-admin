/**
 * @flie 登录模块
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("welcome to login."));

router.post("/", (req, res) => {
    let name = req.body.name,
        password = req.body.password;
    if ("admin" === name && "123456" === password) {
        res.json({
            code: 200,
            msg: "登录成功",
        });
    } else {
        res.json({
            code: 0,
            msg: "登录失败",
        });
    }
});

module.exports = router;
