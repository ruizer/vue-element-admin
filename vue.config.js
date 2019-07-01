const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');
const resolve = dir => {
    return path.join(__dirname, dir);
};
const isDev = process.env.NODE_ENV === 'development';
const PUBLIC_PATH = isDev ? '/' : '/';
const pluginsPro = isDev ? [] : [new LodashModuleReplacementPlugin()];

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: PUBLIC_PATH,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'));
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域
    //   devServer: {
    //     port: 8050,
    //     proxy: 'http://172.16.0.200:9003'
    //   },
    // The object will be merged into the final webpack config using webpack-merge.
    configureWebpack: {
        module: {
            rules: [{
                test: /\.html$/,
                loader: 'vue-template-loader',
                exclude: /index.html/,
                options: {
                    transformToRequire: {
                        img: 'src'
                    }
                }
            }]
        },
        plugins: pluginsPro
    },
};
