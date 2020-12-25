<template>
    <div>
        <h3>{{ id ? "修改" : "创建" }}--账号</h3>
        <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" :label-width="labelWidth">
                <el-input v-model="formData.username" placeholder="请填写姓名，例如:admin" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="labelWidth">
                <el-input v-model.number="formData.password" type="password" placeholder="请填写密码，例如：123456" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">{{ id ? "修改" : "提交" }}</el-button>
                <el-button @click="$router.go(-1)">返回上一级</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { createData, findOne, updataData } from "@/api/admin/index.js";
export default {
    props: {
        // 接收router props 参数解耦
        id: { type: String },
    },
    data() {
        return {
            labelWidth: "140px",
            formData: {
                username: "",
                password: "",
            },
        };
    },
    activated: function() {
        this.id && this.findOne(this.id);
    },
    methods: {
        submitForm() {
            if (!this.id) {
                // 新建数据
                createData(this.formData).then((res) => {
                    if (200 === res.code) {
                        this.$message.success(res.msg);
                        this.$router.go(-1);
                    }
                });
            } else {
                // 修改数据
                updataData(this.id, this.formData).then((res) => {
                    if (200 === res.code) {
                        this.$message.success(res.msg);
                        this.$router.go(-1);
                    }
                });
            }
        },
        // 查询单条数据
        findOne(id) {
            findOne(id).then((res) => {
                if (200 === res.code) {
                    this.formData.username = res.data.username;
                    this.formData.password = res.data.password;
                }
            });
        },
    },
};
</script>
