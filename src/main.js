import Vue from 'vue'
import App from './App.vue'
var router = require('./router')
const Stat = require('./system/statistics')
Vue.config.productionTip = false

Stat.Init();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
