<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // 注册自定义指令
  directives: {
    // 声明自定义指令v-focus
    focus: {
      // 定义指令的钩子函数
      inserted: function (el, binding) {
        console.log(el, binding);
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
