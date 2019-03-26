<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js App">
      <h1 slot="hello2">{{name}}</h1>
      <h1 slot="hello1">sss</h1>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'slot defind'
    }
  }
}
</script>
