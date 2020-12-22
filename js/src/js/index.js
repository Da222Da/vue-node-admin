// 数据
// content 弹幕内容
// speed 步长
// runTime 出现在视频播放的哪一个时间点

const { default: VideoDanmu } = require("./danmu");

// color 颜色
const danmuData = [
    { content: "孕妇、心血管疾病患者、体内安装医院器械者或骨科类疾病患者等不适用按摩功能", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
    { content: "i am fine", speed: 2, runTime: 0, color: "red" },
];

!(function (doc) {
    // 获取canvas、video的DOM对象
    const eDanmuCanvas = doc.getElementById("danmuCanvas"),
        eDanmuVideo = doc.getElementById("danmuVideo");

    // 初始化函数
    const init = () => {
        // 生成弹幕对象,并挂载到window对象之上
        window.videoDanmu = new VideoDanmu(eDanmuVideo, eDanmuCanvas, {
            danmuData,
        });
        bindEvent();
    };

    // 绑定事件处理函数的管理函数
    function bindEvent() {
        eDanmuVideo.addEventListener("click", handleVideoPlay);
        eDanmuVideo.addEventListener("play", handleVideoPlay);
        eDanmuVideo.addEventListener("pause", handleVideoPause);
    }
    function handleVideoPlay() {
        videoDanmu.danmuPaused = false;
        videoDanmu.render();
    }
    function handleVideoPause() {
        videoDanmu.danmuPaused = true;
    }
    // 执行模块处理函数
    init();
})(document);
