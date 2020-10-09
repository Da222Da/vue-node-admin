<template>
  <div class="tab-item" @click="setCurrentIndex(index)">
    {{ item }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "tabItem",
  props: {
    item: String,
    index: Number,
  },
  methods: {
    // 调用vuex-setCurrentIndex，点击时改变CurrentIndex
    ...mapMutations(["setCurrentIndex"]),
  },
};
</script>

<style lang="scss" scoped>
.tab-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #000;
  }
}
</style>