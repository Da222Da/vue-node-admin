/**
 * @file 将请求回来的路由数据，解析成为路由树
 * @desc 根据pid，将路由分成父级parents（pid==0）和子级children(pid!=0)两大派。首先将父级路由独立出来（深拷贝，清除多余项），再通过递归将子路由添加到对应的父级路由之下
 */

function formatRouterTree(data) {
    //  将路由分成父级parents和子级children两大派
    let parents = data.filter((p) => p.pid === 0),
        children = data.filter((c) => c.pid !== 0);
    dataToTree(parents, children);
    console.log(parents, children);
    function dataToTree(parents, children) {
        parents.map((p) => {
            children.map((c, index) => {
                if (c.pid === p.id) {
                    let _c = JSON.parse(JSON.stringify(children));
                    // 删除当前children
                    _c.splice(index, 1);

                    // 递归，将除l当前的c放进去,作为子级
                    dataToTree([c], _c);
                    if (p.children) {
                        p.children.push(c);
                    } else {
                        p.children = [c];
                    }
                }
            });
        });
    }

    return parents;
}

export { formatRouterTree };
