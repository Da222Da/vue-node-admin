/**
 * 返回客户端的内容--统一返回数据格式
 * @param {Object} body // 响应数据内容
 * @param {String} msg // 响应提示语
 * @param {Number} code // 状态码
 */
module.exports = function returnBody(body, msg, code) {
    return {
        data: body || {},
        msg: msg || "success",
        code: code || 200,
    };
};
