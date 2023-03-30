<template>
  <div>
    <!-- camel-case方式传参，组件内部就以驼峰式接收参数 -->
    <Itemcontainer father-component="item"></Itemcontainer>
  </div>
</template>

<script>
import Itemcontainer from '../components/Itemcontainer'
export default {
  name:'Item',
  components: {
    Itemcontainer
  },
  created(){
    //进入题目页面，开始计时
    this.$store.commit('REMBER_TIME')
  }
}
</script>

