import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import {store} from './store/store'  //This is need to change when we add Vuex in 4 Lectures

import './assets/css/main.css';  //This is for TailwindCSS

window.eventBus = new Vue()     //This is connection EventBus 3 Lectures

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  store: store,               //Here wie define Store this writing way 4 Lectures

  router,

  render: function (createElement) {  //Using of that function explained in https://github.com/vuejs-templates/webpack-simple/issues/29
    return createElement(App);
  }
})



/*
import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/css/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')*/
