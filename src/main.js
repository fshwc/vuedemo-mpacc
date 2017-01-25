import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index.vue'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)


import store from './state'

const Home = resolve => {
	require.ensure(['./home/index.vue'],() => {
		resolve(require('./home/index.vue'))
	})
}

const Details = resolve => {
	require.ensure(['./article/index.vue'],() => {
		resolve(require('./article/index.vue'))
	})
}

const Article = resolve => {
	require.ensure(['./article/article.vue'],() => {
		resolve(require('./article/article.vue'))
	})
}

const router = new VueRouter({
	routes: [
		{path:'/', component: Home},
		{path:'/details/:id',component: Details,
			children: [
		        {
		          path: '',
		          name:'details', 
		          component: Article
		        }
		    ]
		}
	]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
