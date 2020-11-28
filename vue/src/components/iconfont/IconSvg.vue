<template>
    <svg ref="icon" :class="{ icon: true, 'cursor-pointer': pointer }" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    props: {
        // 图标名称
        icon: {
            type: String,
            required: true,
        },
        // 配置图标的font-size
        fontsize: {
            type: String,
            default: "16",
        },
        // 光标样式，默认是手势
        pointer: {
            type: Boolean,
            default: true,
        },
    },
    mounted: function() {
        this.setFontsize();
    },
    methods: {
        // 控制字体大小
        setFontsize() {
            this.$refs.icon.style.fontSize = this.fontsize + "px";
        },
    },
    computed: {
        iconName() {
            return `#icon-${this.icon}`;
        },
    },
};
</script>

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
