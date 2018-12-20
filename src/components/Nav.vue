<template>
  <header>  
      <nav id="nav">
        <ul class="ul-nav clearfix">
          <li v-for="(menuitem, index) in navMneu" :key="menuitem.name" @click="thisNav(menuitem.name)">
            <router-link :index="index" :to="{path: menuitem.path, query: menuitem.query}">{{menuitem.name}}</router-link>
          </li>
         <!--  <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link :to="{name: 'learn',  query: { plan: params }}">Learn</router-link>
          </li>
          <li>
            <router-link :to="{path: '/VueCompontent',  query: { learn: 'VueCompontent' }}">VueCompontent</router-link>
          </li> -->
        </ul>
      </nav>
  </header>
</template>

<script>
  export default {
    data: function () {
      return {
        navMneu: [
          {name: 'home', path: '/', query: ''},
          {name: 'about', path: '/about', query: ''},
          {name: 'learn', path: '/learn', query: { learn: 'vuelearn' }},
          {name: 'VueCompontent', path: '/VueCompontent', query: ''},
        ]
      }
    },
    methods: {
      thisNav: function (nav) {
        return this.$emit('this-nav', nav);
      }
    }
  }
</script>

<style lang="less" scoped>
  nav#nav {
    background: #ccc;
    border-bottom: 1.5px solid #f00;
    > ul.ul-nav {
      width: 50%;
      margin: 0 auto;
      > li {
        float: left;
        text-align: center;
        font-size: 14px;
        color: #f0f0f0;
        cursor: pointer;
        a {
          display: block;
          padding: 10px 15px;
          color: #333;
          &:hover {
            color: #fff;
            background: linear-gradient(rgba(0, 0, 8, 0.5), red);
          }
          &.router-link-exact-active {
            color: #fff;
            // background: #333;
            background: linear-gradient(#000, #f00);
            //background: linear-gradient(rgba(0, 0, 8, 0.5), red);
          }
        }
      }
    }
  }
</style>

