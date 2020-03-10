if (process.env.LOCAL_DEBUG) {
  // 如果是调试模式，加载src中的源码
  require('./src/index')
} else {
  // dist会发到npm
  require('./dist/index')
}
