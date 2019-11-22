import Vue from 'vue'
import App from './App.vue'
import InputCar from '../packages'

Vue.config.productionTip = false

Vue.use(InputCar)

new Vue({
  render: h => h(App),
}).$mount('#app')
