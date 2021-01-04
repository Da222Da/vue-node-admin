// 
/**
 * 测试路由
 * @param pid 路由层级(pid等于父级路由的id,第一级路由pid直接为0)
 */
module.exports = [
    {
        id: 1,
        pid: 0,
        path: '/course',
        name: "Course",
        // link: "/course",
        title: "课程管理"
    },
    {
        id: 2,
        pid: 1,
        path: 'operate',
        name: "CourseOperate",
        link: "/course/operate",
        title: "课程操作"
    },
    {
        id: 3,
        pid: 1,
        path: 'reading',
        name: "CourseReading",
        link: "/course/reading",
        title: "课程查看"
    },
    {
        id: 4,
        pid: 0,
        path: '/user',
        name: "User",
        // link: "/course",
        title: "用户管理"
    },
    {
        id: 5,
        pid: 4,
        path: 'operate',
        name: "UserOperate",
        link: "/user/operate",
        title: "用户操作"
    },
    
]