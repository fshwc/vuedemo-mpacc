import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index.vue'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)


import store from './state'

const Home = resolve => {
	require.ensure(['./components/home.vue'],() => {
		resolve(require('./components/home.vue'))
	})
}

const Details = resolve => {
	require.ensure(['./components/articlePage.vue'],() => {
		resolve(require('./components/articlePage.vue'))
	})
}

const Article = resolve => {
	require.ensure(['./components/article.vue'],() => {
		resolve(require('./components/article.vue'))
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
