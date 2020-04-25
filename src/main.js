import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import 'cors'

import Nav from './components/Nav.vue';

Vue.component('NavComp', Nav)

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
