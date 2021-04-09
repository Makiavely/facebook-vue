import Vue from 'vue'
import VueRouter from 'vue-router'    // This we add in Lecture 8

//import router from './router'      // Это файл мы создвали при старте, но т.к. мы назвали файл с роутами routes, то смотри строку ниже:
import routes from "@/routes";    // This we add in Lecture 8
import Master from "@/components/layouts/Master";    // This we add in Lecture 8
import {store} from './store/store'  //This is need to change when we add Vuex in 4 Lectures

import './assets/css/main.css';  //This is for TailwindCSS
import './registerServiceWorker'  // Этот ServiceWorker был добавлен при стартовой конфигурации

window.eventBus = new Vue()     //This is connection EventBus 3 Lectures

Vue.config.productionTip = false
Vue.use(VueRouter)                        // This we add in Lecture 8

const router = new VueRouter({       // This we add in Lecture 8
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        name: 'todo',
      })
    } else {
      next()
    }
  } else {
    next() //make sure to always call next()!
  }
})


new Vue({
  el: '#app',
  // router,                  //This was from basic install, I comment it, but add next string, like it be in Madrang:
  router: router,             // I add this string istead like it did Madrang This we add in Lecture 8
  store: store,               //Here wie define Store this writing way 4 Lectures

  components: { Master },         // This we add in Lecture 8
  template: '<Master></Master>',      // This we add in Lecture 8
/*  components: { App },                // This we shut down in Lecture 8
  template: '<App/>',*/                 // This we shut down in Lecture 8

  render: function (createElement) {  //Using of that function explained in https://github.com/vuejs-templates/webpack-simple/issues/29
    return createElement(Master);                  // ВОТ СЮДА НАДО БЫЛО ВСТАВЛЯТЬ ЭТОТ ЕБАНЫЙ  MASTER!!!!!  in Lecture 8
  }
})