/* eslint-disable */ 
<template>
  <div class="about">
    <h1>About 组件</h1>
    <div v-for="item in title">{{item.name}}this is about page</div>
    <span>{{fruits}}</span>
    <button @click="$emit('my-event', '/Lk666/')">$emit</button>
    <button @click="myEvent1">$emit</button>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
/* eslint-disable */ 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})

/* store.commit('increment')

console.log(store.state.count, 'lk') // -> 1 */
export default {
  props: ['title', 'fruits'],
  data: function () {
    return {
        count: store.state.count
      }
  },
  computed: {
     count2() {
      return store.state.count
    }
  },
  methods: {
    myEvent1() {
      this.$emit('my-event','$emit 666')
    },
    increment () {
      store.commit('increment')
      this.count++
    },
    decrement () {
      store.commit('decrement')
      this.count--
    }
  }
}
</script>

<style>

</style>
