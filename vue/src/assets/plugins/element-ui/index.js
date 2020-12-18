/**
 * 按需引入element-ui框架
 */
import Vue from "vue";
import {
    Button,
    Form,
    FormItem,
    Input,
    Select,
    Checkbox,
    Radio,
    Switch,
    Main,
    Header,
    Aside,
    Footer,
    Container,
    Table,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Dropdown,
    TableColumn,
    DropdownItem,
    DropdownMenu,
    Message,
    Option,
    Dialog,
    Upload,
} from "element-ui";

export default (function() {
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Checkbox);
    Vue.use(Radio);
    Vue.use(Switch);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Main);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Footer);
    Vue.use(Container);
    Vue.use(Table);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(MenuItem);
    Vue.use(Dropdown);
    Vue.use(DropdownItem);
    Vue.use(DropdownMenu);
    Vue.use(TableColumn);
    Vue.use(Option);
    Vue.use(Dialog);
    Vue.use(Upload);

    // Message组件导出方式不同，需特殊处理
    Vue.component(Message);
    Vue.prototype.$message = Message;
})();
