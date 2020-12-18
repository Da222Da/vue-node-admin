<template>
    <div class="main">
        <el-container style="width:100%;height:100%;border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['2']" router default-active="login-register" active-text-color="#409EFF">
                    <!-- <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>技术支持</template>
                        <el-menu-item index="express-server">express服务器</el-menu-item>
                    </el-submenu> -->

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>测试案例</template>
                        <el-menu-item index="login-register">登录注册功能</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    methods: {
        selectMethod: function(index, path) {
            console.log(index, path);
        },
    },
};
</script>

<style scope>
.main {
    height: 100%;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
