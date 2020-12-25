/**
 * @file 账号管理API
 */
import { get, post, del, put } from "@/assets/plugins/axios/index.js";

// 查询分页查询数据
export const getData = (str) => {
    let url = `/admin?${str}`;
    return get(url);
};
export const createData = (data) => post("/admin", data); // 新增数据
export const findOne = (id) => get(`/admin/${id}`); // 查询单条数据
export const updataData = (id, data) => put(`/admin/${id}`, data); // 更新数据
