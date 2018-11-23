import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.v = new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
