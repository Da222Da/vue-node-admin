const mongoose = require("mongoose");

/**
 * @title 管理员数据模型
 * @param {String} username 管理员名称
 * @param {Number} password 内容
 */
let schema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String },
});

// Test文档对象-并导出
module.exports = mongoose.model("AdminUser", schema);
