<template>
    <div>
        <el-button type="primary" @click="$router.push('/edtor')">新建</el-button>
        <el-button type="primary" @click="dialogVisible = true"><i class="el-icon-upload"></i> 上传表格文件xlsx</el-button>
        <el-table :data="listData" border style="width: 100%;margin-top:15px;">
            <el-table-column prop="name" label="姓名" align="center" min-width="80"> </el-table-column>
            <el-table-column prop="title" label="标题" min-width="120"> </el-table-column>
            <el-table-column label="操作" align="center" width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="$router.push(`/edtor/${scope.row._id}`)">编辑</el-button>
                    <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 上传弹框 -->
        <el-dialog :visible.sync="dialogVisible" width="30%">
            <el-upload
                class="upload-demo"
                drag
                :action="this.$baseurl + '/popup/upload'"
                multiple
                list-type="picture"
                :file-list="fileList"
                :limit="1"
                :on-success="handleSuccess"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传表格文件xlsx</div>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script>
import { getData, createData, removeData } from "@/api/popup/index.js";
export default {
    data() {
        return {
            listData: [],
            dialogVisible: false,
            fileList: [], // 已上传文件列表
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

        // 文件上传处理函数
        handleSuccess() {
            let promise = new Promise((resolve, reject) => {
                this.$message.success("文件上传成功");
                this.dialogVisible = false;
                resolve(true);
            });
            promise.then((res) => {
                if (res) this.fileList = [];
            });
        },
    },
};
</script>
