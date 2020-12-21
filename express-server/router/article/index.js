/**
 * article 文章接口
 */

const router = require('express').Router();
const qs = require('qs')
const articleModel = require('./../../model/article.js')
const { ctx } = require("../../extend/index");

// 增加文章接口
router.post("/", async (req, res) => {
    let model = await articleModel.create(qs.parse(req.body))
    res.json(ctx.body(model, '创建成功'))
})


module.exports = router;
