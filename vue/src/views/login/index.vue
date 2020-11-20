<template>
    <div class="wrapper">
        <el-form :model="loginData" label-width="40px" class="demo-ruleForm">
            <el-form-item label="账号" prop="name">
                <el-input v-model="loginData.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginData.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit()">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { login } from "@/api/login/login.js";
export default {
    data() {
        return {
            loginData: {
                name: "admin",
                password: "123456",
            },
        };
    },
    methods: {
        submit() {
            let data = {
                name: this.loginData.name,
                password: this.loginData.password,
            };
            login(data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.demo-ruleForm {
    width: 400px;
    padding: 30px;
    box-shadow: 0 0 10px #ccc;
    border-radius: 10px;
}
</style>
