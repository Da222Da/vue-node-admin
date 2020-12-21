/**
 * @file 文章管理api
 */

import { get, post, del, put } from "@/assets/plugins/axios/index.js";

export const getData = () => get("/article"); // 查询全部数据
export const createData = (data) => post("/article", data); // 新增数据
export const removeData = (id) => del(`/article/${id}`); // 删除数据
export const findOne = (id) => get(`/article/${id}`); // 查询单条数据
export const updataData = (id, data) => put(`/article/${id}`, data); // 更新数据
