//创建并暴露route配置数组
export default [{
  path: '', //NOTE:即根路径/#/默认显示home路由组件
  component: r => require.ensure([], () => r(require('../page/Home')), 'Home') //路由懒加载
}, {
  path: '/item', //NOTE:以/开头的嵌套路径会被当作根路径
  component: r => require.ensure([], () => r(require('../page/Item')), 'Item')
}, {
  path: '/score',
  component: r => require.ensure([], () => r(require('../page/Score')), 'Score')
}]
