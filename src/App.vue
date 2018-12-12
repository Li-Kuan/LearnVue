<template>
  <div id="app">
    <Nav @this-nav="thisNav"/>
    <section class="clearfix">
      <router-view/>
    </section>
    <footer class="footer">
      This is Footer
    </footer>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import reset from "./reset/reset.css";
export default {
  /* 
    ``<router-link> 相关属性'
    to
      表示目标路由的链接。 当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象
      <!-- 命名的路由 -->
      <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
      <!-- 带查询参数，下面的结果为 /register?plan=private -->
      <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
    replace-----
      设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录。
      <router-link :to="{ path: '/abc'}" replace></router-link>
    append
      设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b
      <router-link :to="{ path: 'relative/path'}" append></router-link>
    tag
      有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。
      <router-link to="/foo" tag="li">foo</router-link>
      <!-- 渲染结果 -->
      <li>foo</li>
  */
  components: {
    Nav
  },
  data: function() {
    return {
      params: "helloworld",
      navtitle: '',
    };
  },
  methods: {
    thisNav(menu) {
      this.navtitle = menu;
      return menu;
    }
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,hr,figure, dl,dd,ul,ol,fieldset,menu{margin:0}
ul,ol,button,th,td,fieldset,legend,textarea,menu{padding:0}
ol,ul{
  list-style:none;
}
li {
  list-style-position: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a75cf;
}
/* header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
} */
.footer {
  width: 100%;
  background: #ccc;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
}
.clearfix:after {
  content:".";
  display:block;
  height:0;
  visibility:hidden;
  clear:both;
}
.clearfix {
  *zoom:1;
}
</style>
