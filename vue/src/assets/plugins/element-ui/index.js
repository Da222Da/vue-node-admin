/**
 * 按需引入element-ui框架
 */
import Vue from "vue";
import { Button } from "element-ui";

export default (function() {
    Vue.use(Button);
})();
