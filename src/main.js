import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BaseInput from './components/UI/BaseInput'
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'

Vue.config.productionTip = false
Vue.component('base-input', BaseInput)
Vue.component('base-card', BaseCard)
Vue.component('base-button', BaseButton)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
