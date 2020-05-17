import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import 'cors'
import store from '@/store/store'
import JwPagination from 'jw-vue-pagination';
import Nav from './components/Nav.vue';


Vue.component('NavComp', Nav)

Vue.component('jw-pagination', JwPagination);

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
