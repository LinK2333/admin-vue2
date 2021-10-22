
# Question

## tinymce

gitHub地址: https://github.com/tinymce/tinymce  Star 9.9k

中文文档: http://tinymce.ax-z.cn/ (英文文档需翻墙)

功能齐全扩展性强 (菜单配置:https://blog.csdn.net/zjiang1994/article/details/79856058)

### 汉化:

  最新的5.x版本 `需手动引入汉化包`

### tinymce-vue

  问题: 报错警告,提示很多方法没有

  原因: 目前最新的是4.0以上的版本,只支持vue3.x

  解决方案: 降级到 `^3.0.1`

## Tags封装

### 使用
  
  反显需要在组件上添加传参 `tags(String)`

  获取数据时,调用子组件内方法 `getTags`

## other

### npm7.x

  报错: npm ERR! code ERESOLVE

  原因: npm7.x版本对某些命令比npm6.x更严格

  解决方法: 
    指定npm6来安装(无需卸载npm7)
    npx -p npm@6 npm i --legacy-peer-deps

### compression-webpack-plugin 打包报错

  原因: 版本过高,目前是9.0.0版本

  解决方法: 版本降级 6.1.1版本

  注: 其实不需要,vue-cli4好像内置了gzip压缩,我试了打包后一样的






