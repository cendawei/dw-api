module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        path: __dirname + '/public/',
        filename: '[name].js'
    },
    resolve: {
        // extensions: ['', '.js', '.jsx']
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.tpl$/,
        //         loader: "tmod",
        //         query: {
        //             // 编译输出目录设置
        //             output: "./build",
        //             // 设置输出的运行时路径
        //             runtime: "./template.js",
        //             syntax: "simple",
        //             // 模板文件后缀
        //             suffix: '.tpl'
        //         }
        //     }
        // ]
    },
};