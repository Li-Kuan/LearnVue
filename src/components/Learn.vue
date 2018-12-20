
<template>
  <div class="learn">
    <h1>Vue Learn {{world}} </h1>
    
    <!-- <span :title="world" v-html="world"> {{fruits}}</span> 
    <span :title="world" v-text="world"> {{fruits}}</span> -->
    <div class="block">
      <span :title="world"> {{fruits}}</span>
    </div>
    <div class="block">
      <ul>
        <li v-for="(item, index) in list" :key="item.name">{{`序号${index}: ${item.name} 价格：${item.price}`}}</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li v-for="(value, key) in obj" :key="value">{{`${key}: ${value}`}}</li>
      </ul>
    </div>
    <div class="block">
      <hello-world msg="Learn My Vue.js"/>
    </div>
    <div class="block">
      <p :is="HelloWorld" msg="IS 动态组件"></p>
    </div>
    <div class="block">
      <button v-on:click="addItem">添加</button>
    </div>
    <div class="block">
      <!-- 使用v-bind 则link为变量，不使用link为字符串 -->
      <a v-bind:href="link">v-bind</a>
      <div :class="className">v-bind绑定对象</div>
    </div>
    <div class="block">
      <input @keydown.enter="keydownEvent" type="text" v-model="value">
    </div>
    <div class="block">
      <About :title="list" :fruits="value2"/>
    </div>
    <div class="block">
      <About @my-event="myEvent"/>
    </div>
     <div class="block">
      <input v-for="item in list" :key="item.name" type="checkbox" v-model.lazy="myBox" :value="item.name">
      <input type="checkbox" v-model="myBox" value="apple">
      <input type="text" v-model.lazy="myText">
      <input type="text" v-model="myValue">
      {{myBox}}
      {{valueNumber}}
    
     
    </div>
    <div class="block">
        <div>{{date}}</div>
        <div>{{date1()}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
/*
  v-bind 缩写 :
  v-on 缩写 @
  插槽功能：<slot name="header">

  v-if v-show 配合 v-else
  @keydown.enter == @keydown.13
  props 父组向子组件传值
  自定义事件 this.$emit  子组件向父组件传值
  v-model 双向绑定
    修饰符 
    .lazy 完成输入才更新
    .trim 在我们的输入框中，我们经常需要过滤一下一些输入完密码不小心多敲了一下空格的兄弟输入的内容。
    .number
      如果你先输入数字，那它就会限制你输入的只能是数字。
      如果你先输入字符串，那它就相当于没有加.number

  事件修饰符
    .stop 由于事件冒泡的机制，我们给元素绑定点击事件的时候，也会触发父级的点击事件。相当于调用了event.stopPropagation()方法。
    .prevent 用于阻止事件的默认行为，例如，当点击提交按钮时阻止对表单的提交。相当于调用了event.preventDefault()方法。
    .once 这个修饰符的用法也是和名字一样简单粗暴，只能用一次，绑定了事件以后只能触发一次，第二次就不会触发。

    .native
    我们经常会写很多的小组件，有些小组件可能会绑定一些事件，但是，像下面这样绑定事件是不会触发的
    <My-component @click="shout(3)"></My-component>
    必须使用.native来修饰这个click事件（即），可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，
    注意：使用.native修饰符来操作普通HTML标签是会令事件失效的
    
    .left 左键点击
    .right 右键点击
    .middle 中键点击

  .keyCode
    //普通键
    .enter
    .tab
    .delete //(捕获“删除”和“退格”键)
    .space
    .esc
    .up
    .down
    .left
    .right
    //系统修
    .ctrl
    .alt
    .meta
    .shift
  .prop

    通过自定义属性存储变量，避免暴露数据
    防止污染 HTML 结构


  计算属性以及数据监听
  computed
  methods

  属性监听
  watch
 */
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue'
import About from '../views/About.vue'
export default {
  name: 'Learn',
  components:{
    HelloWorld,
    About
  },

  watch: {
    myValue: function (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  computed: {
    valueNumber () {
      return this.myValue.replace(/\d/g, '*')
    },
    date() {
      return Date();
    }
  },
  data: function () {
    return {
      HelloWorld: 'HelloWorld',
      myValue: '',
      link:'###',
      className: {
        red: true,
        blue: false
      },
      world: 'hello',
      fruits: '<a>apple</a>',
      myBox: [],
      myText: '',
      list: [
        {
          name: 'banana',
          price: '5'
        },
        {
          name: 'orange',
          price: '6'
        }, {
          name: 'bear',
          price: '8'
        }
      ],
      obj: {
          name: 'orange',
          price: '8',
          unit: '元'
        },
      value: '123',
      value2:''
     };
  },
  methods: {
    addItem() {
      console.log(this.list);
      let obj = {
        name: 'peach',
        price: '188'
      }
      Vue.set(this.list, 1, obj)
      if (checkList(this.list, obj)) {
        this.list.push(obj);
      }
    },
    keydownEvent() {
      this.value2 = this.value;
      /* if ('lk' === this.value) {
        alert(`${this.value}beautiful`);
      } else {
        alert('input error');
      } */
    },
    myEvent(prams) {
      alert(`123${prams}`)
    },
    date1() {
      return Date()
    }
  }
  /* data() { 
     return {
      world: 'LK'
     } 
    } */
  }
  function checkList(arr1, obj) {
    let t = true;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].name === obj.name) {
        t = false; 
      }
    }
    return t;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
添加socped 只将样式添加到此组件中
-->
<style lang="less" scoped>
  .learn {
    font-size: 18px;
    color: #666;
  }
  .block {
    padding: 10px;
    background: rgb(229, 140, 140);
    float: left;
    margin: 10px;
    ul {
      background: #a680ee;
      li {
       text-align: left;
      }
    }
  }
</style>
