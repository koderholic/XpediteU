// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Essential vue packages
import Vue from 'vue'
import App from './App'
import router from './router'

// Import external packages
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
// Import assets
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'

// Initialize packages
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
