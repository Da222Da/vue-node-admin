<template>
    <div class="tab">
        <tab-nav :navData="navData"></tab-nav>
        <tab-content :pageData="pageData"></tab-content>
    </div>
</template>

<script>
import tabNav from "./nav/Nav.vue";
import tabContent from "./content/Content";
import navData from "@/datas/tab.js";
import pageData from "@/datas/pages.js";

export default {
    name: "tab",
    data() {
        return {
            navData,
            pageData,
        };
    },

    components: {
        tabNav,
        tabContent,
    },
};
</script>

<style lang="scss" scoped>
.tab {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
}
</style>
