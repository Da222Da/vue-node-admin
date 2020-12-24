# express server 文档

-   使用 mongoose，配置、操作 MongoDB 数据库
-   统一处理接口`/extend/_return.js`

*   multer 插件，处理单文件、多文件上传，显示上传文件进度条
*   如何实现分页功能流程
*   如何实现登录注册

# MongoDB 文档

> 特点：文档型数据库、遵循小驼峰命名

## 数据库操作指令

> `cmd` -> `mongo`,链接 MongoDB 本地服务 -> `show dbs`

-   `show dbs`，显示当前数据库，默认有“admin”、“config”、“local”
-   `use db-name`，进入（或新建）数据库，例如:“use new-admin”
-   `db`显示当前选择的数据库

*   `db.dropDatabase()`删除当前数据库

## collection 集合操作指令

## 文档操作指令

1. 查询

-   `db.collection-name.find()`,查询该集合的所有数据

## #mongoodb 文档记录

-   **API**

1.  `collection-name.estimatedDocumentCount()`，查询文档对象的 length

## #插件

-   bcrypt 使用方式

```
const bcrypt = require("bcrypt");
// 加密
// bcrypt.hashSync(myPlaintextPassword, saltRounds);，自动生成salt，参与加密的字符
//saltRounds || 10，生成salt的迭代次数

const hash = bcrypt.hashSync("123456", 10);
console.log(hash); // 2b$10$hdF0pNUScpjRXKoeKccFHO7KTbmM1aKsQR/GDKX6cBOrF5gkMQYUu


// 解密
// bcrypt.compareSync(myPlaintextPassword, "password from the DB");，自动生成salt，参与加密的字符
let isVaild = bcrypt.compareSync(password, baseData.password)
console.log(isVaild) // Boolean
```
