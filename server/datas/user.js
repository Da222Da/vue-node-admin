/**
 * @file 用js文件模拟用户数据表
 * @param auth 用户权限
 */
module.exports = [
    {
        id: 1,
        name: "张三",
        auth: [0, 1, 2, 3],
    },
    {
        id: 2,
        name: "李四",
        auth: [4, 5],
    },
    {
        id: 3,
        name: "王五",
        auth: [0, 1, 2, 3, 4, 5],
    },
];
