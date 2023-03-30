<template>
  <div>
    <!-- camel-case方式传参，组件内部就以驼峰式接收参数 -->
    <Itemcontainer father-component="home"></Itemcontainer>
  </div>
</template>

<script>
import Itemcontainer from '../components/Itemcontainer'
export default {
  name:'Home',
  components: {
    Itemcontainer
  }
}
</script>
