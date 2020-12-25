<template>
    <div>
        <el-button type="primary" @click="$router.push('/admin-edtor')">新建</el-button>
        <el-table :data="listData" border style="width: 100%;margin-top:15px;">
            <el-table-column prop="username" label="账号" align="center" min-width="80"> </el-table-column>
            <el-table-column prop="password" label="密码" align="center" min-width="80"> </el-table-column>
            <el-table-column label="操作" align="center" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push(`/admin-edtor/${scope.row._id}`)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[9, 15, 30, 100]"
            :page-size="9"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script>
import { getData } from "@/api/admin/index.js";
export default {
    data() {
        return {
            listData: [],
            total: 0,
            page: 1,
            size: 9,
        };
    },
    activated: function() {
        this.getData();
    },
    methods: {
        // 获取弹框数据
        getData(page, size) {
            let _query = `page=${this.page}&size=${this.size}`;
            getData(_query).then((res) => {
                if (200 === res.code) {
                    this.total = res.count;
                    this.listData = res.data;
                }
            });
        },
        // 分页
        // pageSize 改变时会触发
        handleSizeChange(val) {
            this.size = val;
            this.getData();
        },
        // currentPage 改变时会触发
        handleCurrentChange(val) {
            this.page = val;
            this.getData();
        },
    },
};
</script>

<style scoped>
.el-pagination {
    margin-top: 15px;
    float: right;
}
</style>
