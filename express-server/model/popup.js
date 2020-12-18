// 对象
const mongoose = require("mongoose");

/**
 * @title Test数据模型
 * @param {String} name 用户名称
 * @param {String} content 内容
 */
let schema = new mongoose.Schema({
    name: { type: String, require: true },
    title: { type: String },
    money: { type: Number },
});

// Test文档对象-并导出
module.exports = mongoose.model("Test", schema);
