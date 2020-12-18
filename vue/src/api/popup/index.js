/**
 * @file 弹框数据api
 */

import { get, post, del, put } from "@/assets/plugins/axios/index.js";

export const getData = () => get("/popup"); // 查询全部数据
export const createData = (data) => post("/popup", data); // 新增数据
export const removeData = (id) => del(`/popup/${id}`); // 删除数据
export const findOne = (id) => get(`/popup/${id}`); // 查询单条数据
export const updataData = (id, data) => put(`/popup/${id}`, data); // 更新数据
