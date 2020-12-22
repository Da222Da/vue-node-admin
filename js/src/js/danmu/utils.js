// 判断是否对象
function isObject(value) {
    const type = Object.prototype.toString.call(value);
    return type === "[object Object]";
}

// 判断是否数组
function isArray(value) {
    return Array.isArray(value);
}

// 获取弹幕文本的width
function getTextWidth(content, fontSize) {
    // 创建临时元素
    const _span = document.createElement("span");
    _span.innerText = content;
    _span.style.fontSize = fontSize;

    // 将span转成块级元素
    _span.style.position = "absolute";
    document.body.appendChild(_span);

    // 获取元素width,并清除元素
    let width = _span.offsetWidth;
    document.body.removeChild(_span);
    return width;
}

// 获取弹幕文字的位置Position
function getTextPosition(canvas, fontSize, ctx) {
    let X = canvas.width,
        Y = canvas.height * Math.random();

    // 处理Y的临界值
    Y < fontSize && (Y = fontSize);
    Y > canvas.height - fontSize && (Y = canvas.height - fontSize);

    ctx.X = X;
    ctx.Y = Y;
}

export { isObject, isArray, getTextWidth, getTextPosition };
