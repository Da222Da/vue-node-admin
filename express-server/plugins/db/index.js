/**
 * @file 链接mongodb数据库
 */
module.exports = (app) => {
    const mongoose = require("mongoose");
    mongoose.connect("mongodb://127.0.0.1:27017/node-db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
