// Create read update delete api
const express = require("express");
const router = express.Router();
const PopupModel = require("../../model/popup");
const { ctx } = require("../../extend/index");

// 创建数据
router.post("/", async (req, res) => {
    try {
        const model = await PopupModel.create(req.body);
        res.json(ctx.body(model, "创建成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 查询全部数据
router.get("/", async (req, res) => {
    try {
        const model = await PopupModel.find();
        res.json(ctx.body(model, "更新成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 通过_id，查询单挑数据
router.get("/:id", async (req, res) => {
    try {
        const model = await PopupModel.findById({ _id: req.params.id });
        res.json(ctx.body(model, "查询成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 通过_id，更新数据
router.put("/:id", async (req, res) => {
    try {
        const model = await PopupModel.findByIdAndUpdate(req.params.id, req.body);
        res.json(ctx.body(model, "修改成功"));
    } catch (error) {
        res.json(ctx.body(err, "error", 500));
    }
});

//  删除数据
router.delete("/:id", async (req, res) => {
    try {
        const model = await PopupModel.findByIdAndRemove({ _id: req.params.id });
        res.json(ctx.body(model, "删除成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

module.exports = router;
