/**
 * @flie 配置axios
 */
import axios from "axios";

// 配置请求路径
axios.defaults.baseURL = "development" === process.env.NODE_ENV ? "http://localhost:3000" : "http://localhost:3000";
// 请求超时10s
axios.defaults.timeout = 10000;

/**
 * axios get请求
 * @param {string} url [请求地址]
 * @param {Object} params [请求参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params: params })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, { data: data })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
