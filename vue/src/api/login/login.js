/**
 * @file 登录接口文件
 */

import { get, post } from "@/assets/plugins/axios/index.js";

export const test = () => get("/");

export const login = (data) => post("/login", data);
