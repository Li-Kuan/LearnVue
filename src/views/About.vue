<template>
  <div class="about">
    <h1>About 组件</h1>
    <div v-for="item in title">{{item.name}}this is about page</div>
    <span>{{fruits}}</span>
    <button @click="myEvent1">$emit</button>
  </div>
</template>

<script>
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
