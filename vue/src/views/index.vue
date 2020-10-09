<template>
    <div>
        <!-- 后台管理页面布局：头部、导航条、内容区域 -->
        <my-header></my-header>
        <sidebar></sidebar>
        <content-area></content-area>
        <!-- <router-link to="/tab">1.封装tab组件</router-link> -->
    </div>
</template>

<script>
import myHeader from "@/components/myHeader.vue";
import sidebar from "@/components/sidebar.vue";
import contentArea from "@/components/contentArea.vue";
export default {
    name: "Index.vue",
    components: {
        myHeader,
        sidebar,
        contentArea,
    },
};
</script>
