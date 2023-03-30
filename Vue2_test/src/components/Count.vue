<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我在{{school}}，学习{{subject}}</h3>
		<h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapActions,mapGetters,mapMutations, mapState} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			...mapState('countAbout',['sum','school','subject']),
			...mapState('personAbout',['personList']),
			...mapGetters('countAbout',['bigSum'])
		},
		methods: {
			...mapMutations({increment:'countAbout/JIA',decrement:'countAbout/JIAN'}),
			...mapActions({incrementOdd:'countAbout/jiaOdd',incrementWait:'countAbout/jiaWait'})
			// increment(){
			// 	this.$store.commit('JIA',this.n)
			// },
			// decrement(){
			// 	this.$store.commit('JIAN',this.n)
			// },
			// incrementOdd(){
			// 	this.$store.dispatch('jiaOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('jiaWait',this.n)
			// },
		},
		mounted() {
			console.log('Count',this)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
