import { isObject, isArray } from "./utils";
import Danmu from "./Danmu";

class VideoDanmu {
    constructor(video, canvas, options) {
        if (!video || !canvas || !options) return;
        if (!isObject(options)) return;
        if (!options.danmuData || !isArray(options.danmuData)) return;

        this.video = video;
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.canvas.width = video.offsetWidth;
        this.canvas.height = video.offsetHeight;

        //  弹幕暂停标识
        this.danmuPaused = true;

        // 将默认地相关属性合并到this实例对象之上
        Object.assign(this, options, {
            speed: 2,
            runTime: 0,
            color: "#fff",
        });

        // 弹幕数据池，将包装好的弹幕数据，汇聚到数据池当中
        this.danmuPool = this.createDanmuPool();
    }
    // 包装弹幕数据
    createDanmuPool() {
        return this.danmuData.map((dm) => new Danmu(dm, this));
    }

    // 渲染函数
    render() {
        // 清除弹幕
        this.clearRect();
        // 绘制弹幕
        this.drawDanmu();
        // this.danmupaused为false的时候，才开始动画
        !this.danmuPaused && requestAnimationFrame(this.render.bind(this));
    }

    drawDanmu() {
        let currentTime = this.video.currentTime;

        this.danmuPool.map((danmu) => {
            // if (currentTime >= danmu.runTime) {
            if (!danmu.isInit) {
                danmu.init();
                danmu.isInit = true;
            }
            danmu.X -= danmu.speed;
            danmu.draw();

            if (danmu.X <= danmu.width * -1) {
                danmu.stopDrawing = true;
            }
            // }
        });
    }

    // 清除canvas画布
    clearRect() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default VideoDanmu;
