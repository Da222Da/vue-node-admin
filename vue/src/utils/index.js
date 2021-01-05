// 将后台返回的路由表，格式化成为树形结构
function formatRouterTree(data) {
    // 将数组分成两部分：父级和子级
    let parents = data.filter(p => p.pid === 0),
        children = data.filter(c => c.pid !== 0);
        dataToTree(parents, children);

    // 递归函数--将多层子路由转成树形结构
    function dataToTree(parents, children) {
        parents.map(p => {
            children.map((c,i) => {
                // 如果父级的id等于子级的pid，那么，说明他们隶属于父子级关系
                if(p.id === c.pid) {
                    // 深拷贝
                    let _c = JSON.parse(JSON.stringify(children));

                    // 删除children的当前项，从而，创建出新的父级c以及新的子级_c，用于再次递归
                    _c.splice(i, 1)

                    // 递归
                    dataToTree([c], _c);

                    // 判断父级是否已经存在了子级
                    if(p.children) {
                        p.children.push(c);
                    }else {
                        p.children = [c];
                    }
                }
            })
        })
    }
    return parents;
}

// 生成vue-router路由表
function generateRouter(userRouter) {
    let newRouters = userRouter.map(r => {
        let routers = {
            path: r.path,
            name: r.name,
            component: () => import(`@/views/${r.name}`)
        }
        if(r.children) {
            routers.children = generateRouter(r.children);
        }
        return routers;
    })

    return newRouters;
}



export {
    formatRouterTree,
    generateRouter
}