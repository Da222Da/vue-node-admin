<template>
  <div>
    <div class="page">
      {{ pageData[currentIndex] }}
    </div>
  </div>
</template> 

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  props: {
    pageData: Array,
  },
  computed: {
    ...mapState(["currentIndex"]),
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 440px;
  line-height: 440px;
  text-align: center;
  font-size: 50px;
}
</style>

