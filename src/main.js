import Vue from 'vue';
import App from './App';
import router from './router'
import './asset/css/index.css'
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});