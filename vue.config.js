// vue.config.js
module.exports = {
  /* 独立 构建true，【运行构建】
  解决的办法如下： 根目录下新建一个vue.config.js的文件，
  runtimeCompiler的介绍 
  */
  baseUrl: '',
  runtimeCompiler: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    },
    
  },
  /* 服务端口号 */
  devServer: {
    port: 8880
  }
}
