<template>
  <div>
    <Example />
    <button @click="getParams">
      获取参数
    </button>
    <div class="block">
      <!-- <transition name="my-trans" :appear=true mode="out-in">
        <div v-show="isShow" key="1">COMPONTENTS</div>
        <div v-else key="2">COMPONTENTS ELSE</div> 
      </transition> -->
      <!-- <div class="text">层宝贝我们在一起</div> -->
      <transition 
        :css="false"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave">
        
        <div class="aniamte-div" v-show="isShow" v-color="'#636'">{{loveTime}}</div>
        <!-- <div v-else key="2">COMPONTENTS ELSE</div> -->
      </transition> 
    </div>
    
    <!-- <button @click="fnShow" v-color="'#f33'">展示/关闭</button> -->
    <input type="text" v-focus>
  </div>
</template>
<script>

  /**
   * 自定义指令
   * 1.只在当前组件内使用的 直接在组件内定义
   * 
   * Vue 过度动画CSS
   *        Enter
   * opacity:0     ----->   opacity: 1
   *    |     \          |         /
   *   V-enter \-- V-enter-active-/ 
   * 
   * 
   *        Leave
   * opacity: 1    ----->   opacity: 0
   *    |     \          |         /
   *   V-leave \-- V-leave-active-/      
   * 
   * javaScripts 过度动画
   * 通过事件方法
   * :css 避免css动画影响
   * 标签名相同动画是不执行的 如果标签相同 要指定key
   * -------------------根组件-------------------
   *              |
   *              |
   * -----------layout--------------
   *    |           |             |
   *    |           |             |
   * --header--  --footer--  --content--
   *                              |
   *                           --等组件--  
   * 
   */
  
  
  
  const $ = window.$;
  import  Example from "./Export";
  const VueCompontent = {
    components: {
        Example
    },
    data: function () {
      return {
        isShow: true,
        appear: true,
        loveTime: ''
      }
    },
    directives: {
      color: function (el, binding) {
        // console.log(binding)
        el.style.color = binding.value;
      },
      focus:{
        inserted (el/* ,binding */) {
          el.focus();
        }
      }
    },
    computed: {
     
    },
    beforeMount: function () {
      var self = this;
      let passTime = new Date('2013/04/01 12:00:00');
      setInterval(gettime, 1000);
      function gettime() {
        let nowTime = new Date();
        // 相差毫秒数
          let timeDiff = nowTime.getTime() - passTime.getTime();
          let days=0,
              hours=0,
							minutes=0,
							seconds=0;//时间默认值
          // 一天有多少毫秒
          let msec1 = 24 * 3600 * 1000;

          // 一小时有多少毫秒
          let msec2 = 60 * 60 * 1000;

          days = timeDiff / msec1;

          hours =  (timeDiff % msec1) / msec2;

          minutes = ((timeDiff % msec1) % msec2) / (60 * 1000);
          seconds = ((timeDiff % msec1) % msec2) % (60 * 1000) / 1000;
          // console.log([days, hours, minutes, seconds].join('-'));
          function init(num) {
            if(num < 10) {
              num = '0' + Math.floor(num);
            }else {
              num = Math.floor(num);
            }
            return num;
          }
          self.loveTime = [init(days) + '天', init(hours)+ '时', init(minutes)+ '分', init(seconds) + '秒'].join(':');
      }
      gettime();
    },
    methods: {
      fnShow: function () {
        this.isShow = !this.isShow;
      },
      getParams: function () {
        console.log(this.$route.query, this.$route.params);
      },
      beforeEnter: function(el)  {
        $(el).css({
          left: '0px',
          opacity: 0
        })
      },
      enter: function(el, done)  {
        // console.log(el) el:当前元素 done: 动画结束之后执行done()
        $(el).animate({
          left: 500,
          opacity: 1
        }, 1000, done)
        done();
      },
      leave: function(el, done)  {
        $(el).animate({
          left: '1000px',
          opacity: 0
        },1000, done)
      },
      computeDate: function () {
      
      }
    }
  }
  export default VueCompontent;
  // export { VueCompontent };
</script>

<style lang="less" scoped>
  .block {
    margin: 10px;
    width: 100%;
    height: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .my-trans-enter-active{
    transition: all .5s ease-out;
  }
   .my-trans-leave-active{
    transition: all 5s ease-out;
  }
  .my-trans-enter{
    opacity: 0;
    transform: translateX(-500px);
  }
  .my-trans-leave-to {
    transform: translateY(500px);
    opacity: 0
  }
  .aniamte-div {
    font-size: 36px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    bottom: 0;
  }
  .text {
    font-size: 36px;
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    bottom: 0;
    color: #666;
  }
</style>

