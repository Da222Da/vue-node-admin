<template>
    <div class="container">
        <el-card class="box-card" shadow="always">
            <div slot="header">
                <span class="title-text">请先登录</span>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="用户名称" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>

export default {
    data() {
        var checkusername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("用户名不能为空"));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                return callback(new Error("请输入密码"));
            }
            callback();
        };

        return {
            ruleForm: {
                password: "123456",
                username: "admin",
            },
            rules: {
                password: [{ validator: validatePass, trigger: "blur" }],
                username: [{ validator: checkusername, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('login', this.ruleForm).then((res) => {
                            this.$router.push("/popup");
                            this.$message.success(res.msg)
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style scope>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #416f7b;
}
/* Card */
.box-card {
    width: 450px;
    background: #fff;
}
.title-text {
    font-size: 18px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
