# 前言

> 在做前端后台项目的时候经常会用到很多 icon 图标，刚开始还好，但随着项目的不断迭代，每次修改添加图标会变得很麻烦，而且总觉得不够优雅，于是开始琢磨着有啥简单方便的工作流呢？

# icon 演变史

-   **炼气期：**雪碧图`image sprite`，所谓的雪碧图，就是将多个图片合成一个图片，然后利用 css 的 background-position 定位显示不同的 icon 图标。但这个也有一个很大的痛点，维护困难。每新增一个图标，都需要改动原始图片，还可能不小心出错影响到前面定位好的图片，而且一修改雪碧图，图片缓存就失效了，久而久之你不知道该怎么维护了。

-   **筑基期：**font 库`Font Awesome`，无法自定义制定图标，只能用别人的。

-   **结丹期：**阿里爸爸开源图库`iconfont`，三种使用方式：

    -   **unicode：**原理是 CSS3 特性`@font-face`，具体使用看文档！
    -   **font-class：**原理是 CSS3 特性`@font-face`，具体使用看文档！
    -   **symbol：**原理是`SVG Sprite`，具体使用看下文！

-   **大乘期：**上述方式都会，然后，根据不同的场景使用不同的方式！！！

# vue-cli3 中配置并使用 iconfont

-   第一阶段：创建 icon-component 组件

```
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

```
//引入svg组件
import IconSvg from '@/components/IconSvg'

//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

//在代码中使用
<icon-svg icon-class="password" />

```

-   第二阶段：使用  webpack 插件`svg-sprite-loader`，将多个 svg 打包成 svg-sprite。

    > **为什么要打包 svg？**
    >
    > 现在所有的 svg-sprite 都在 iconfont.js 里面，皱巴巴的一块，很不直观。最关键是，无法做到**按需加载**，自定义性太差了，添加也麻烦。
    >
    > **svg-sprite-loader 和 url-loader 冲突了怎么办？**
    > 最安全合理的做法是使用 webpack 的  [exclude](https://webpack.js.org/configuration/module/#rule-exclude)  和  [include](https://webpack.js.org/configuration/module/#rule-include) ，让`svg-sprite-loader`只处理你指定文件夹下面的 svg，`url-loaer`只处理除此文件夹之外的所以 svg，这样就完美解决了冲突的问题。

-   **vue.config.js 配置如下：**

```
const path = require("path");

function resolve(dir) {
    return path.join(__dirname,dir)
}


module.exports = {
    // 配置webpack
    chainWebpack: (config) => {
        // 配置url-loader: 让url-loader对src/assets/svg目录下的svg图片不做处理
        config.module.rule("svg").exclude.add(resolve('src/assets/icons/svg')).end();

        // 配置svg-sprite-loader：让svg-sprite-loader对src/assets/svg目录下的svg图片不做处理
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    }
}
```

-   使用到 webpack 的  `require.context`，实现自动导入：
    > require.context("./test", false, /.test.js\$/);
    > 这行代码就会去 test 文件夹（不包含子目录）下面的找所有文件名以 .test.js 结尾的文件能被 require 的文件。
    > 更直白的说就是 我们可以通过正则匹配引入相应的文件模块。
    >
    > **require.context 有三个参数：**
    >
    > -   directory：说明需要检索的目录
    > -   useSubdirectories：是否检索子目录
    > -   regExp: 匹配文件的正则表达式

```
import Vue from 'vue'

import IconSvg from "@/components/iconfont/IconSvg.vue";
Vue.component('icon-svg', IconSvg)

// 自动导入svg
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req);
```

-   具体使用：按需添加 svg -> 使用
    ![按需添加路径.png](https://upload-images.jianshu.io/upload_images/14703115-8f5a15fe24d28af4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
// 直接使用全局组件，iconClass属性写文件名
<icon-svg iconClass="recharge"/>

```

第三阶段：优化
[了解 svg sprites 技术——移步张大大博客](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
[压缩 SVG——移步张大大博客](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)

# #完结

鸣谢，花裤衩大大、张鑫旭大大，还有我自己。
