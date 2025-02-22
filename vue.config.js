module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true,
        port: 9000,
        proxy: {
            '/api/': {
                // target: 'http://127.0.0.1:8088',   // 测试环境
                target: 'http://81.71.17.188:8088', // 产线地址
                changeOrigin: true,  // 是否跨域
                pathRewrite: {
                    '^/api/': ''
                }
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true, // 如果你需要使用JavaScript表达式，例如`@`规则
                },
            },
        },
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '智慧其心';
                return args;
            })
    }
}
module.exports = {

    css: {


        loaderOptions: {


            less: {


                // 这里可以添加全局的Less变量、混合等配置


                lessOptions: {


                    modifyVars: {


                        // 配置全局变量


                        'primary-color': '#42b983',


                    },


                    javascriptEnabled: true,


                },


            },


        },


    },


};