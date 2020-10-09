<template>
  <div>
    <router-link to="/" tag="h3" class="title"> 👈tab组件封装</router-link>
    <div class="desc">
      <h4>
        需求分析(封装组件流程：“写架子” >
        “从内而外，一层层地写”。总之，谋定而后动，一切想好了，再做。)
      </h4>
      <ul>
        <li>1. tab选项卡分为：“导航nav”和“页面page”两部分</li>
        <li>
          2.
          导航nav部分：“选项1”、“选项2”、“选项3”等，相似且独立，为了便于维护和拓展，单独用Item.vue放这些选项。最终，这部分，拆为index.vue和item.vue两个组件
        </li>
        <li>3. 页面content部分:“页面1 | 2 | 3”，page.vue一个组件，足矣。</li>
      </ul>
      <ul>
        <ol>
          <b>拓展1(使用directives对代码进行进一步的复用和抽象)：</b>
          定义指令v-tab-current，控制tab选项样式的切换
        </ol>
      </ul>
    </div>
    <tab></tab>
  </div>
</template>

<script>
import tab from "@/components/tab/index.vue";
export default {
  name: "Tab",
  components: {
    tab,
  },
};
</script>

<style lang="scss" scoped>
.title {
  cursor: pointer;
}
</style>

