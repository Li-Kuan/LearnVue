/* eslint-disable */
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
        <li v-for="(item, index) in list">{{`序号${index}: ${item.name} 价格：${item.price}`}}</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li v-for="(value, key) in obj">{{`${key}: ${value}`}}</li>
      </ul>
    </div>
    <div class="block">
      <HelloWorld msg="Learn My Vue.js"/>
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
  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
/*
  v-bind 缩写 :
  v-on 缩写 @
  v-if v-show 配合 v-else
  @keydown.enter == @keydown.13
  props 父组向子组件传值
  自定义事件 this.$emit  子组件向父组件传值
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
  data: function learn() {
    return {
      link:'###',
      className: {
        red: true,
        blue: false
      },
      world: 'hello',
      fruits: '<a>apple</a>',
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
