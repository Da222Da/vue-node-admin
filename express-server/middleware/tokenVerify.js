/**
 * token解析中间件
 */
const jwt = require("jsonwebtoken");
const adminUser = require("./../model/adminUser");

module.exports = async function (req, res, next) {
    // 获取token信息
    let info = req.headers.authorization.split(" ").pop();
    let token_value = info === "undefined" ? undefined : info;

    // 校验token信息
    if (!token_value) {
        res.status(401).send({ msg: "token值不存在" });
        return;
    } else {
        // 解析token信息
        let { id, username } = jwt.verify(token_value, "privateKey");
        let model = await adminUser.findById({ _id: id });

        if (id === model._id && username === model.username) {
            res.status(401).send({ msg: "该用户不存在" });
            return;
        } else {
            await next();
        }
    }
};
