/**
 * @file 假数据模拟用户表
 * @param id   课程id
 * @param pid 第几级路由，例如：“pid=0”，最高权限，第一层路由
 * @param path 路径
 * @param link 点击跳转的路由
 * @param name 对应着前端页面组件的name
 * @param title 名称
 */
module.exports = [
    { id: 0, pid: 0, path: "course", link: "/course", name: "Course", title: "课程管理" },
    { id: 1, pid: 1, path: "operate", link: "/course/operate", name: "CourseOperate", title: "课程操作" },
    { id: 2, pid: 2, path: "info_data", link: "/course/operate/info_data", name: "OperateInfoData", title: "课程数据" },
    { id: 3, pid: 1, path: "add", link: "/course/add", name: "CourseAdd", title: "增加课程" },
    { id: 4, pid: 0, path: "study", link: "/study", name: "Study", title: "学生管理" },
    { id: 5, pid: 1, path: "study_add", link: "/study/add", name: "StudyAdd", title: "增加学生" },
];
