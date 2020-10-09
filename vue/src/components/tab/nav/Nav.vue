<template>
  <div
    class="tab-nav"
    v-tab-current="{
      currentIndex: currentIndex,
      className: 'tab-item',
      currentClassName: 'active',
    }"
  >
    <Item
      v-for="(item, index) in navData"
      :key="index"
      :item="item"
      :index="index"
    ></Item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { tabCurrent } from "@/directives/index.js";
import Item from "./Item";

export default {
  name: "Nav",
  props: {
    navData: Array,
  },
  computed: {
    ...mapState(["currentIndex"]),
  },
  // 注册指令
  directives: {
    tabCurrent,
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
.tab-nav {
  display: flex;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #000;
}
</style>

