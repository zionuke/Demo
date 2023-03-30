//通过变量定义函数名，这样名字更语义化
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num
	},
	//记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id)
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
    //记录定时器id，便于答题结束清空定时器
		state.timer = setInterval(() => {
			state.allTime++
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1
		state.allTime = 0
		state.answerid = []
	}
}