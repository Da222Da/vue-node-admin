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