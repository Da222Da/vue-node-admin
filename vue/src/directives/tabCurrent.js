/**
 * @file 定义v-tab-current的指令,在父组件中控制tab-nav选项卡样式的切换
 * @author 梅小二
 */

export default {
    // bind，钩子函数，每次绑定指令的时候，执行
    // updata，钩子函数，每次视图更新的时候，执行
    bind(el, binding) {
        // 获取配置项options、以及tab elements
        var options = binding.value,
            _c = el.getElementsByClassName(options.className);

        // 默认选中样式
        _c[options.currentIndex].className += ` ${options.currentClassName}`;
    },

    update(el, binding) {
        // 获取配置项options、上一次的配置项options、以及tab elements
        var options = binding.value,
            oldOptions = binding.oldValue,
            _c = el.getElementsByClassName(options.className);

        // 还原上一次的tab class，并配置当前的tab class
        _c[oldOptions.currentIndex].className = oldOptions.className;
        _c[options.currentIndex].className += ` ${options.currentClassName}`;
    },
};
