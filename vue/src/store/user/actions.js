/**
 * @file 异步请求
 */

// import { getUserRouters } from "../../services";
import { getUserRouters } from "@/services/index.js";

export default {
    async setUserRouters({ commit, state }) {
        const userRouters = await getUserRouters(state.uid);
    },
};
