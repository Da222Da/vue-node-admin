import Vue from "vue";
import Vuex from "vuex";

import { login, getInfo } from "@/api/login/index.js";

Vue.use(Vuex);

const state = {
    token: localStorage.getItem("Token") || "",
    name: "",
    avatar: "",
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
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
    logout({commit}) {
        return new  Promise((resolve,reject) => {
            commit("SET_NAME", "");
            commit("SET_TOKEN", "");
            localStorage.removeItem("Token");

            resolve();
        }).catch(err => {
            reject(err)
        })
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
