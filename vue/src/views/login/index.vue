<template>
    <div>
        登录页面
        <el-button>默认按钮</el-button>
    </div>
</template>

<script>
import { test } from "@/api/index.js";
export default {
    created: function() {
        test().then((res) => {
            console.log(res);
        });
    },
};
</script>
