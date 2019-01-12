// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'Axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
// import './assets/css/global.scss'

import iconfont from './components/common/iconfont.vue'

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.prototype.$axios = Axios

Vue.component('iconfont', iconfont)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
