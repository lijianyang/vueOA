import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App'
import calculator from './components/calculator'
import content from './components/content'
import rollcall from './components/rollcall'

import studentsData from './studentsData'

Vue.use(VueRouter)
Vue.use(Vuex)


const routes = [
  { path: '/', component: App,
  	children: [
      { path: '/', redirect: '/calculator' },
  		{ path: '/content/:id',name: 'content', component: content },
  		{ path: '/calculator',name: 'calculator', component: calculator },
  		{ path: '/rollcall',name: 'rollcall', component: rollcall }
  	]
  },
  { path: '/rollcall', component: rollcall }
  
]

const router = new VueRouter({
   mode: 'history',
  routes 
})

const store = new Vuex.Store({
  state: {
    studentsData
  },
  mutations: {
    addLucknum(state,luckynum) {
      state.studentsData[luckynum].luckynum++
    }
  }
})

new Vue({
	el: '#app',
  	router,
    store
})

