/**
 * @flie 配置axios
 */
import axios from "axios";
import QS from "qs"; // 序列化数据，例如QS.stringify({name:admin,password}) -->

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

/**
 * axios post请求
 * @param {string} url [请求地址]
 * @param {Object} data [请求参数]
 */
export function post(url, data) {
    console.log(QS.parse("name=admin&password=123456"));
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
