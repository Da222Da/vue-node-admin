/**
 * @file 异步请求
 */

// import { getUserRouters } from "../../services";
import { getUserRouters } from "@/services/index.js";
import { formatRouterTree } from "@/libs/utils.js";

export default {
    async setUserRouters({ commit, state }) {
        const userRouters = await getUserRouters(state.uid),
            routerTree = formatRouterTree(userRouters);
        console.log(routerTree);
    },
};
