/**
 * @file 弹框数据api
 */

import { get, post, del, put } from "@/assets/plugins/axios/index.js";

// 查询分页查询数据
export const getData = (str) => {
    let url = `/popup?${str}`;
    return get(url);
};
export const createData = (data) => post("/popup", data); // 新增数据
export const removeData = (id) => del(`/popup/${id}`); // 删除数据
export const findOne = (id) => get(`/popup/${id}`); // 查询单条数据
export const updataData = (id, data) => put(`/popup/${id}`, data); // 更新数据
