/**
 * 文章数据结构
 * @param classify 分类
 * @param title 标题
 * @param body 内容
 */

const mongoose = require('mongoose')
module.exports = mongoose.model('Article', {
    classify: { type: Array },
    title: { type: String },
    body: { type: String }
})