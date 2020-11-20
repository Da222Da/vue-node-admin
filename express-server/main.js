const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 跨域
app.use(cors());

// Router路由
require("./router/index.js")(app);

app.listen(3000, () => console.log("server is running"));
