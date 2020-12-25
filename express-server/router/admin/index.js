// Create read update delete api
const express = require("express");
const router = express.Router();
const adminUser = require("../../model/adminUser");
const { ctx } = require("../../extend/index");

// 创建数据API
router.post("/", ctx.tokenVerify, async (req, res) => {
    try {
        const model = await adminUser.create(req.body);
        res.json(ctx.body(model, "创建成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 查询全部数据API-分页
router.get("/", ctx.tokenVerify, async (req, res, next) => {
    try {
        let page = req.query.page - 0 || 1,
            size = req.query.size - 0 || 9;

        // 分页查询，默认15条
        // skip() 跳过多少条
        let model = await adminUser
            .find()
            .skip((page - 1) * size)
            .limit(size);

        // 响应体
        let resBody = ctx.body(model, "更新成功");
        resBody.count = await adminUser.estimatedDocumentCount();
        res.json(resBody);
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 通过_id，查询单挑数据API
router.get("/:id", ctx.tokenVerify, async (req, res) => {
    try {
        const model = await adminUser.findById({ _id: req.params.id });
        res.json(ctx.body(model, "查询成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 通过_id，更新数据API
router.put("/:id", ctx.tokenVerify, async (req, res) => {
    try {
        const model = await adminUser.findByIdAndUpdate(req.params.id, req.body);
        res.json(ctx.body(model, "修改成功"));
    } catch (error) {
        res.json(ctx.body(err, "error", 500));
    }
});

module.exports = router;
