module.exports = {
    publicPath: './dist/',
    publicPath: './',
    // mode: 'history',
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
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '华赛';
                return args;
            })
    }
}
// module.exports = {
//     publicPath: 'https://kalebbear.github.io/dist/',
//     css: {


//         loaderOptions: {


//             less: {


//                 // 这里可以添加全局的Less变量、混合等配置


//                 lessOptions: {


//                     modifyVars: {


//                         // 配置全局变量


//                         'primary-color': '#42b983',


//                     },


//                     javascriptEnabled: true,


//                 },


//             },


//         },


//     },


// };