<template>
    <div>
        <h3>创建文章</h3>
        <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="分类" :label-width="labelWidth">
                <el-select v-model="formData.classify" multiple placeholder="请选择">
                    <el-option v-for="item in select" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题" :label-width="labelWidth">
                <el-input v-model="formData.title" placeholder="请输入标题" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="内容" :label-width="labelWidth">
                <quill-editor v-model="formData.body" :options="editorOption" ref="myQuillEditor"> </quill-editor>
                <!-- <el-input v-model.number="formData.body" placeholder="请输入内容" autocomplete="off"></el-input> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">创建</el-button>
                <el-button @click="$router.go(-1)">返回上一级</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import { createData } from "@/api/article/index.js";
export default {
    props: {
        // 接收router props 参数解耦
        // id: { type: String },
    },
    data() {
        return {
            labelWidth: "140px",
            editorOption: {
                modules: {
                    /**
                     * bold 加粗
                     * italic 斜体
                     * underline 下划线
                     * strike 删除线
                     * blockquote 索引
                     * code-block 代码块
                     * image 上传图片
                     * [{ header: 1 }, { header: 2 }, { header: 2 }] 标题
                     * [{ list: "ordered" }, { list: "bullet" }] 列表
                     * [{ 'script': 'sub'}, { 'script': 'super' }],
                     */
                    toolbar: [
                        ["blockquote", "bold", "code-block", "image"], // toggled buttons

                        [{ header: 1 }, { header: 2 }, { header: 3 }],
                        [{ list: "ordered" }, { list: "bullet" }, { script: "sub" }, { script: "super" }, { color: [] }, { background: [] }, { align: [] }],
                    ],
                },
            },
            select: [
                {
                    value: "选项1",
                    label: "黄金糕",
                },
                {
                    value: "选项2",
                    label: "双皮奶",
                },
                {
                    value: "选项3",
                    label: "蚵仔煎",
                },
                {
                    value: "选项4",
                    label: "龙须面",
                },
                {
                    value: "选项5",
                    label: "北京烤鸭",
                },
            ],
            formData: {
                classify: [],
                body: "",
                title: "",
            },
        };
    },
    components: {
        quillEditor,
    },

    methods: {
        submitForm() {
            createData(this.formData).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>

<style scoped>
/* 修改富文编辑器样式 */
.quill-editor >>> .ql-container {
    min-height: 200px;
}
.quill-editor >>> .ql-picker {
    line-height: 24px;
}
</style>
