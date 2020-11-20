/**
 * 按需引入element-ui框架
 */
import Vue from "vue";
import { Button, Form, FormItem, Input, Select, Checkbox, Radio, Switch } from "element-ui";

export default (function() {
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Checkbox);
    Vue.use(Radio);
    Vue.use(Switch);
    Vue.use(Form);
    Vue.use(FormItem);
})();
