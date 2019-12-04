import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'


import App from './App.vue'

import router from '@/router/router.js'


import './assets/css/reset.css'
import './common/index.scss'

//注册   axios
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
