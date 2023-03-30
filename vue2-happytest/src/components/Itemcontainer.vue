<template>
  <section>
    <!-- 页眉 -->
    <header class="top_tips">
      <!-- 初始化页面默认显示第几周 -->
      <span class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</span>

      <!-- item路由组件头部显示当前为第几题 -->
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span
      >
    </header>

    <!-- 初始化页面默认为Home路由组件 -->
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <!-- 点击后路径变为/#/item，App.vue中<router-view></router-view>变为item路由组件 -->
      <router-link to="/item" class="start button_style"></router-link>
    </div>

    <!-- item路由组件对应的选择答题区 -->
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <!-- itemNum负责控制显示第几题，随着它的改变页面题目也发生相应改变 -->
          <header class="item_title">
            {{ itemDetail[itemNum - 1].topic_name }}
          </header>
          <ul>
            <!-- item为答案选项对象，包含每个选项的相关信息；选中某项更新选中答案索引与id -->
            <li
              v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
							:key="index"
              @click="choosed(index, item.topic_answer_id)"
              class="item_list"
            >
              <!-- 选项字母框，选中答案索引项显示选中样式 -->
              <span
                class="option_style"
                :class="{ has_choosed: choosedNum == index }"
                >{{ chooseType(index) }}</span
              >

              <!-- 选项文本 -->
              <span class="option_detail">{{ item.answer_name }}</span>

            </li>
          </ul>
        </div>
      </div>
      <!-- 不是最后一题则显示下一题图标 -->
      <span
        class="next_item button_style"
        @click="nextItem"
        v-if="itemNum < itemDetail.length"
      ></span>
      <!-- 最后一题则显示提交图标 -->
      <span
        class="submit_item button_style"
        v-else
        @click="submitAnswer"
      ></span>
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name:'Itemcontainer',
  data() {
    return {
      // itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null, //选中答案id
    };
  },
  props: ["fatherComponent"],
  computed: mapState([
    "itemNum", //第几题
    "level", //第几周
    "itemDetail", //题目详情
    "timer", //计时器
  ]),
  methods: {
    ...mapActions(["addNum", "initializeData"]),
    //点击下一题
    nextItem() {
      //跳到下一题之前重置选中答案索引
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId);
      } else {
        alert("您还没有选择答案哦");
      }
    },
    //索引0-3对应答案A-B
    chooseType: (type) => {
      switch (type) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    //选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id;
    },
    //到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push("/score"); //这里"score"等同于"/score"
      } else {
        alert("您还没有选择答案哦");
      }
    },
  },
  //Home路由组件初始化信息
  created() {
    if (this.fatherComponent == "home") {
      this.initializeData();
			//切换到根路由后背景图片相应切换，这里的地址对应build后生成的dist文件夹内相对路径
      document.body.style.backgroundImage = "url(./img/1-1.1f6f6a62.jpg)";
    }
  },
}
</script>

<style lang="less" scoped>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "\\9ED1\4F53";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background-image: url(../images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_back {
  background-image: url(../images/2-1.png);
  background-size: 100% 100%;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../images/1-4.png);
}
.next_item {
  background-image: url(../images/2-2.png);
}
.submit_item {
  background-image: url(../images/3-1.png);
}
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>