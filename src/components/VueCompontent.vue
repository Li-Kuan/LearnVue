<template>
  <div>
    <div class="block">
      <!-- <transition name="my-trans" :appear=true mode="out-in">
        <div v-show="isShow" key="1">COMPONTENTS</div>
        <div v-else key="2">COMPONTENTS ELSE</div> 
      </transition> -->
      <transition 
        :css="false"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <div class="aniamte-div" v-show="isShow">COMPONTENTS</div>
        <!-- <div v-else key="2">COMPONTENTS ELSE</div> -->
      </transition> 
    </div>
    
    <button @click="fnShow">展示/关闭</button>
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
  const VueCompontent = {
    data: function () {
      return {
        isShow: true,
        appear: true
      }
    },
    directives: {
      color: function (el, binding) {
        el.style.color = binding.value;
      }
    },
    methods: {
      fnShow: function () {
        this.isShow = !this.isShow;
      },
      beforeEnter: function(el)  {
        $(el).css({
          left: '0px',
          opacity: 0
        })
      },
      enter: function(el, done)  {
        console.log(el)
        $(el).animate({
          left: 500,
          opacity: 1
        }, 1000, done)
      },
      leave: function(el, done)  {
        $(el).animate({
          left: '1000px',
          opacity: 0
        },1000, done)
      }
    }
  }
  export default VueCompontent;
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
    position: absolute;
    left: 500px;
    top: 50px;
  }
</style>

