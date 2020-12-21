// Create read update delete api
const express = require("express");
const router = express.Router();
let path = require("path");
const PopupModel = require("../../model/popup");
const { ctx } = require("../../extend/index");

// xlsx表格解析
var xlsx = require("node-xlsx").default;

// 中间件
// 借助multer模块，实现上传中间件upload
let multer = require("multer");
let upload = multer({ dest: path.join(__dirname + "/../../uploads") });

// 创建数据
router.post("/", async (req, res) => {
    try {
        const model = await PopupModel.create(req.body);
        res.json(ctx.body(model, "创建成功"));
    } catch (error) {
        res.json(ctx.body(error, "error", 500));
    }
});

// 查询全部数据-分页
router.get("/", async (req, res) => {
    try {
        const model = await PopupModel.find().limit(10);
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

// 上传并解析xlsx数据
router.post("/upload", upload.single("file"), async (req, res) => {
    new Promise((resolve, reject) => {
        try {
            let file = req.file;
            // file.url = `http://localhost:3000/uploads/${file.filename}`; 图片显示
            res.json({}, "文件上传成功", 200);
            resolve(file);
        } catch {
            res.json(ctx.body(error, "error", 500));
            reject(error);
        }
    }).then((file) => {
        // 表格解析-Promise: [{name: 'Sheets1', data:[[ '张茜颖', '成功购买新星计划，金额2000USD' ],[ '周焕金', '成功购买新星计划，金额200USD' ],…… 99956 more items]}, {name: 'Sheets2', data:[…… 99956 more items]} ……]
        const sheetData = xlsx.parse(path.join(`${__dirname}`, `./../../uploads/${file.filename}`));
        let obj = {};
        for (let i = 0; i < sheetData.length; i++) {
            let items1 = sheetData[i].data;
            for (let j = 0; j < items1.length; j++) {
                let items2 = items1[j];
                obj.name = items2[0];
                obj.title = items2[1];
                // 存储数据库
                PopupModel.create(obj);
            }
        }
    });
});

module.exports = router;
