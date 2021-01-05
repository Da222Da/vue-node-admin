# ECMAScript 6

## #历史来源

## #Babel 转码器：

1. 存在的意义

    > Babel 存在的意义，就是将 ES6 转成 ES5，从而，达到兼容的目的。

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





## #let和const命令 申明变量的新方式：
> let 和 const带来的新特性：
>
> * 新增块级作用域，所以，ES6除了全局作用域和函数作用域，还有"(let | const) + { }"形成的块级作用域。
> 不存在变量提升
> 不允许重复声明
> 全局变量与顶层对象的属性隔离

1. 块级作用域带来的改变`案例：防止变量泄露到全局`：
```
// 写法1：ES6--防止变量泄露到全局
var a = [];
for(let i = 0; i < 5; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[2]();


// 写法:2：ES5--防止变量泄露到全局
var a = [];
function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 5; i++) {
    // 每一次循环形成一个独立的函数作用域
    _loop(i);
}
a[2]();

// 写法3：ES5--立即执行函数，防止变量泄露到全局
var a = [];
for (var i = 0; i < 5; i++) {
    // 立即执行函数，每一次循环形成一个独立的函数作用域
    (function (i) {
        a[i] = function () {
            console.log(i);
        };
    })(i);
}
a[3]();
```


2. const 申明内存地址不会改变的变量，不是变量不能改变
```
const foo = {}
foo.name = "we are sb";

// foo = {name : "we are sb"}; 报错，内存地址不容改变

console.log(foo); // { name: "we are sb"}
```


3. 全局变量与顶层对象的属性隔离，`注意：javascript顶层对象混乱，浏览器是window对象、node环境是global对象`
```
// ES5
var a = 1;
console.log(window.a); // 1

// ES6
let b = 2;
console.log(window.b); // undefined
```





## #解构赋值 新的赋值方式 提取数据结构里面的值，然后赋值给新的变量

* 基本用法，`常常用于数组、对象、函数，至于数字、字符串、Boolean还需要包装类，一点都不实用！`：
```
// 数组
let [x,y] = [1,2]

// 对象
let {name:x,age:y} = {name:'tom',age:8}

// 函数
function add([x,y]){
    return x + y;
}
add([1,2])
```

* 应用场景————处理交换值问题：
```
// ES5--处理交换值问题
var x = 1, y = 2;

x = x+y;
y = x-y;
x = x-y;

// ES6--处理交换值问题
let x =1,
    y= 2;
[x,y] = [y,x];
```

* 应用场景————处理函数返回多值的问题
```
// ES5 -- 处理函数返回多值的问题
function add() {
  return [1, 2, 3];
}

var _add2 = add(),
    a = _add2[0],
    b = _add2[1],
    c = _add2[2];


// ES6 -- 处理函数返回多值的问题
function add() {
  return [1, 2, 3];
}
let [a,b,c] = add();
```

## #ES6字符串拓展
1. 新增模板字符串
2. 新增遍历器：`for……of`获取值、`for……in`获取索引
3. 字符串新增方法：
    * 在charCodeAt()的基础之上，新增了codePointAt()、String.fromCodePoint()
    * 在charAt()的基础之上，新增了at()
    * 在indexOf()的基础之上，新增includes()、startsWith()、endsWith()
    * 新增重复方法repeat()、补全方法padStart()、padEnd()
    ```
        # 场景：提示字符串格式

        console.log('01'.padStart(10,'YYYY-MM-DD'));
    ```

## #正则拓展
