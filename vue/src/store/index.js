import Vue from "vue";
import Vuex from "vuex";

import { login, getInfo, getRouterInfo } from "@/api/login/index.js";
import { formatRouterTree } from "@/utils/index.js"

Vue.use(Vuex);

const state = {
    token: localStorage.getItem("Token") || "",
    name: "",
    avatar: "",

    uid:3, // user id
    isHasAuth: false, // 是否存在权限
    authRouter:[], // 存储树形结构的路由表
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_UID: (state, uid) => {
        state.uid = uid
    },
    SET_AUTHROUTER: (state, routers) => {
        state.authRouter = routers;
    },
    SET_ISHASAUTH: (state, auth) => {
        state.isHasAuth = auth;
    }
};
const actions = {
    login({commit}, userinfo) {
        const { username, password } = userinfo;
        return new Promise((resolve,reject ) => {
            login({username, password}).then(res => {
                if(200 === res.code) {
                    const data = res.data;
                    localStorage.setItem("Token",data.token);
                    commit("SET_TOKEN", data.token)
                }
                resolve(res);
            }).catch(error => {
                reject(error)
            })
        })
    },
    get_user_info({commit, state}) {
        return new Promise((resolve,reject) => {
            getInfo(state.token).then(res => {
                const { data } = res;
                if(!data) reject("验证失败，请重新登录")
                
                // 存储个人信息
                const { username } = data;
                commit("SET_NAME", username)

                resolve(res);
            }).catch(err => {
                console.log(err);
            })
        })
    },
    // 退出登录
    logout({commit}) {
        return new  Promise((resolve,reject) => {
            commit("SET_NAME", "");
            commit("SET_TOKEN", "");
            localStorage.removeItem("Token");

            resolve();
        }).catch(err => {
            reject(err)
        })
    },
    // 获取用户权限列表
    async getRouterAuth({state,commit}) {
        let data = await getRouterInfo(state.uid);
        let tree = formatRouterTree(data.data);
        
        // 开启权限
        commit("SET_ISHASAUTH", true);

        // 赋值树形结构--路由数据
        commit("SET_AUTHROUTER", tree);
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
