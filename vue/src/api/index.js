/**
 * @file api接口请求统一处理文件
 */

import { get, post } from "@/assets/plugins/axios/index.js";

// export const test = () => get("/");
export const test = () => {
    console.log(get("/"));
    return get("/");
};
