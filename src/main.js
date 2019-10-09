import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'normalize.css';
import 'animate.css';
import VideoBg from 'vue-videobg';
import {SimpleSVG} from 'vue-simple-svg';

const Stat = require('./system/statistics')
Vue.config.productionTip = false

Vue.component('video-bg', VideoBg);
Vue.component('simple-svg', SimpleSVG);

Stat.Init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')