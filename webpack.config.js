var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/main',
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:8080/dist/'
    },
    module: {
        // 加载器
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css!autoprefixer'},
            {test: /\.less/, loader: 'style!css!autoprefixer!less'},
            {test: /\.(png|jpg|gif)$/, loader: 'url?limit=10000&name=static/[hash:base64:5].[ext]'},
            {test: /\.(html|tpl)$/, loader: 'html'}
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map',
    //其他节点省略
    plugins: [
        //把指定文件夹下的文件复制到指定的目录
        new TransferWebpackPlugin([
            {from: 'www', to: '.'}
        ], path.resolve(__dirname))
    ]
};
