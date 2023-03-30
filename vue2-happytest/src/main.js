//引入Vue
import Vue from 'vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器配置数组
import routes from './router'
//引入store
import store from './store'
//引入App
import App from './App'
//整个项目的一般样式，vue-cli3构建环境下通过import导入less只要配备相应loader即可，因为webpack把所有文件都当做模块来处理
import './style/common.less'
//这个rem.js应该是移动端响应式布局相关，没太看懂
import './config/rem'

//应用插件
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

//创建vm
new Vue({
  el:'#app',
  router,
  store,
  render:h => h(App)
})