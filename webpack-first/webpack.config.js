//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //必须是绝对路径
    filename: 'bundle.[hash:6].js',
    publicPath: '/' //通常是CDN地址
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/, //匹配规则
              use: ['babel-loader'],
              exclude: /node_modules/ //排除 node_modules 目录
          },
          {
            test: /\.(le|c)ss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: function () {
                        return [
                            require('autoprefixer')({
                                "overrideBrowserslist": [
                                    ">0.25%",
                                    "not dead"
                                ]
                            })
                        ]
                    }
                  }
                }
            }, 'resolve-url-loader', 'less-loader'],
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, //10K
                        esModule: false
                    }
                }
            ],
            exclude: /node_modules/
          },
          // {
          //   test: /.html$/,
          //   use: 'html-withimg-loader'
          // }
      ]
  },
  devtool: 'eval-cheap-module-source-map', //开发环境下使用
  plugins: [
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html', //打包后的文件名
        config: config.template
        // minify: {
        //     removeAttributeQuotes: false, //是否删除属性的双引号
        //     collapseWhitespace: false, //是否折叠空白
        // },
        // hash: true //是否加上hash，默认是 false
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
    })
  ],
  devServer: {
    port: '3000', //默认是8080
    //webpack 5移除了以下两项
    // quiet: false, //默认不启用
    // inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    devMiddleware: {
      stats: "errors-only", //终端仅打印 error
    },
    client: {
      logging: 'info',
      // Can be used only for `errors`/`warnings`
      //
      // overlay: {
      //   errors: true,
      //   warnings: true,
      // }
      overlay: false, //默认不启用
    },
    compress: true //是否启用 gzip 压缩
  }
}
