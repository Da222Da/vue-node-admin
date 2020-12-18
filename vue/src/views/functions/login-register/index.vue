<template>
    <div>
        <el-button type="primary" @click="$router.push('/edtor')">新建</el-button>
        <el-table :data="listData" border style="width: 100%;margin-top:15px;">
            <el-table-column prop="title" label="标题" min-width="120"> </el-table-column>
            <el-table-column prop="name" label="姓名" align="center" min-width="80"> </el-table-column>
            <el-table-column prop="money" label="金额（USDT)" align="center" min-width="80"> </el-table-column>
            <el-table-column label="操作" align="center" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push(`/edtor/${scope.row._id}`)">编辑</el-button>
                    <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getData, createData, removeData } from "@/api/popup/index.js";
export default {
    data() {
        return {
            listData: [],
        };
    },
    activated: function() {
        this.getData();
    },
    methods: {
        // 获取弹框数据
        getData() {
            getData().then((res) => {
                this.listData = res.data;
            });
        },

        // 删除某一条弹框数据
        remove(id) {
            removeData(id).then((res) => {
                if (200 === res.code) {
                    this.$message.success(res.msg);
                    this.getData();
                } else {
                    this.$message.error(res.msg);
                }
            });
        },
    },
};
</script>
