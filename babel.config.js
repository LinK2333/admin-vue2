const plugins = [];

// 生产环境去除console
if (process.env.NODE_ENV === 'prod') {
  plugins.push('transform-remove-console');
}
 
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
};

