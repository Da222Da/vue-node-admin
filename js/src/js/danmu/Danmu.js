import { getTextWidth, getTextPosition } from "./utils";
// 包装弹幕的类
class Danmu {
    constructor(danmu, _this) {
        this.content = danmu.content;
        this.runTime = danmu.runTime;
        this.danmu = danmu;
        this.ctx = _this;
        this.isInit = false; // 是否初始化
        this.init();
    }
    init() {
        this.color = this.danmu.color || this.ctx.color;
        this.speed = this.danmu.speed || this.ctx.speed;
        this.fontSize = 30;

        // 弹幕文字的width
        this.width = getTextWidth(this.content, this.fontSize);

        // 弹幕文字的x，y的位置
        getTextPosition(this.ctx.canvas, this.fontSize, this);
    }

    // canvas绘制方法
    draw() {
        console.log(this.content, this.color);
        this.ctx.canvasCtx.font = this.fontSize + "px";
        this.ctx.canvasCtx.fillStyle = this.color;
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
}

export default Danmu;
