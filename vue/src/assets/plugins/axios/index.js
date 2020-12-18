/**
 * @flie 配置axios
 */
import axios from "axios";
import QS from "qs"; // 序列化数据，例如QS.stringify({name:admin,password:123456}) --> name=admin&password=123456

import config from "@/config";
// 配置请求路径
axios.defaults.baseURL = "development" === process.env.NODE_ENV ? config.baseURL.dev : config.baseURL.pro;
// 请求超时10s
axios.defaults.timeout = 10000;

// 响应拦截器
axios.interceptors.response.use(
    (res) => {
        // 对响应数据做些什么
        return res.data;
    },
    (err) => {
        // 对响应错误做些什么
        return Promise.reject(err);
    }
);

/**
 * axios get请求
 * @param {string} url [请求地址]
 */
export function get(url) {
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * axios post请求
 * @param {string} url [请求地址]
 * @param {Object} data [请求参数]
 */
export function post(url, data) {
    // console.log(QS.parse("name=admin&password=123456"));
    return new Promise((resolve, reject) => {
        axios
            .post(url, QS.stringify(data))
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * axios delete请求
 * @param {string} url [请求地址]
 */
export function del(url) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * axios put请求
 * @param {string} url [请求地址]
 */
export function put(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, QS.stringify(data))
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
