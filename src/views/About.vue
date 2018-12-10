/* eslint-disable */ 
<template>
  <div class="about">
    <h1>About 组件</h1>
    <div v-for="item in title">{{item.name}}this is about page</div>
    <span>{{fruits}}</span>
    <button @click="$emit('my-event', 'Lk666/')">$emit</button>
    <button @click="myEvent1">$emit</button>
  </div>
</template>

<script>
/* eslint-disable */ 
import Vue from 'vue';
export default {
  props: ['title', 'fruits'],
  methods: {
    myEvent1() {
      this.$emit('my-event','$emit 666')
    }
  }
}
</script>

<style>

</style>
