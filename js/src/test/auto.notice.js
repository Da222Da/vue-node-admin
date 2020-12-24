!(function ($) {
    $(function () {
        // 初始化函数
        var init = function () {
            // 初始化父级元素
            createElement();
            // 根据API创建公告
            createNotice();
        };
        // 生成DOM元素
        function createElement() {
            $("body").append("<div class = 'notice-wrapper'></div>");
        }

        // 根据API自动生成公告
        function createNotice() {
            // 随机生成公告
            var time = 7000,
                page = 1;
            setInterval(function () {
                // 累加
                function totalTime(len) {
                    let t = 0;
                    for (var i = 0; i < len; i++) {
                        t += Math.ceil((Math.random() > 0.5 ? 1 : 0) * Math.random() * 100000);
                    }
                    return t;
                }
                time = 100000 + totalTime(10);

                $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/popup/web",
                    data: {
                        page: page,
                        size: "1",
                    },
                    success: function (data) {
                        // 随机请求页数
                        page = Math.floor(Math.random() * data.count) || 1;
                        localStorage.noticeData = data.data;
                        // 执行公告的显示或隐藏
                        contorlNotice(localStorage.getItem("noticeData").split()[0]);
                    },
                    error: function (err) {
                        console.log("这是请求失败的");
                    },
                });
            }, time);
        }

        // 自动地创建或删除公告DOM
        function contorlNotice(content) {
            // 创建公告
            $($(".notice-wrapper")[0]).append("<p></p>");
            $(".notice-wrapper p")
                .text(content)
                .css({
                    display: "flex",
                    width: "330px",
                    padding: "14px 15px 14px 13px",
                    "border-radius": "8px",
                    "box-sizing": " border-box",
                    border: "1px solid #ebeef5",
                    position: "fixed",
                    right: "0",
                    top: "300px",
                    "background-color": "#fff",
                    "box-shadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                })
                .animate(
                    {
                        marginTop: "-=150px",
                        opacity: "1",
                    },
                    2000
                );

            // 删除公告
            setTimeout(function () {
                // 隐藏动画
                $(".notice-wrapper p").animate(
                    {
                        marginTop: "-=20px",
                        opacity: "0",
                    },
                    2000
                );
                //动画结束后删除p
                setTimeout(function () {
                    $(".notice-wrapper p").remove();
                }, 2000);
            }, 4000);
        }

        // 执行初始化函数
        init();
    });
})(jQuery);
