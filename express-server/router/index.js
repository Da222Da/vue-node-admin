/**
 * @flie 路由导出文件
 */

module.exports = function (app) {
    app.use("/login", require("./login/login.js"));
};
