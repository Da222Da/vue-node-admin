# ECMAScript 6

## #历史来源

## #Babel 转码器：

1. 存在的意义

    > Babel 存在的意义，就是将 ES6 转成 ES5s，从而，达到兼容的目的。

2. 配置文件.babelrc
    > .babelrc 用于配置转码的规则`presets`和插件`plugins`
    >
    > TC39 标准委员会，规定每一种新的语法从提案变成正式的标准，需要经历以下五个阶段:
    >
    > stage0(Strawman 展示阶段) --> stage1(Proposal 征求意见阶段) --> stage2(Draft 草案阶段) --> stage3(Candidate 候选阶段) --> stage4{Finished 定案阶段}
    >
    > 一般一种新语法进入了 stage2，以后的正式标准的语法，就会照着 stage2 这套来了。

```
# 最新的转码规则 npm i -D babel-preset-latest
# ES6草案阶段的转码规则 npm i -D babel-preset-stage-2

{
    "presets": [
        "lastest",
        "stage-2"
    ],
    plugins:[]
}
```

3. Babel 常用依赖包
    - `npm i babel-cli -D` 命令行转码 babel-cli，`单文件转码：babel index.js -o dist.js`、`文件夹转码：babel src -d dist`
    - `npm i babel-polyfill -D` Babel 默认只转换新的 JavaScript 句法（ yntax ），而不转换新的 API ，如 Promise 等全局对象，以及一些定义在全局对象上的方法（如 Object assign ）都不会转码。
