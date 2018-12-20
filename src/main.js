import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "../static/jquery.js";
// 取消 Vue 所有的日志与警告。
Vue.config.silent = true;

Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm, info) {
    // eslint-disable-next-line
     console.error(info);
     // eslint-disable-next-line
     console.error(vm);
     // eslint-disable-next-line
     console.error(error);
};
new Vue({
  //el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
//document.title = 
router.beforeResolve((to, from, next) => {
  /* must call `next` */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})
/* router.beforeEach((to, from, next) => {
      /* 路由发生变化修改页面title
      if (to.meta.title) {
        document.title = to.meta.title;
      }
      next();
}) */
/* $mount('#app') 和 el: '#app' 效果相同 ，都是挂载到指定dom上 */
/* new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },

  data: {
    word: 'hello world'
  }
}) */
/* new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },

  data: {
    word: 'hello world 你好'
  }
}) */
