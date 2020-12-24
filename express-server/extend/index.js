/** 统一导出功能性方法 */

// 自定义返回响应function
const returnBody = require("./_return");

// 身份验证中间件
const tokenVerify = require("./../middleware/tokenVerify");

module.exports = {
    ctx: {
        body: returnBody,
        tokenVerify,
    },
};
