import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)


import store from './state'

import Front from './front.vue'

import Home from'./components/home.vue'

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

const Backstage = resolve => {
	require.ensure(['./components/backstage/index.vue'],() => {
		resolve(require('./components/backstage/index.vue'))
	})
}

const empty = resolve => {
	require.ensure(['./components/backstage/empty.vue'],() => {
		resolve(require('./components/backstage/empty.vue'))
	})
}
const navMana = resolve => {
	require.ensure(['./components/backstage/navMana.vue'],() => {
		resolve(require('./components/backstage/navMana.vue'))
	})
}
const nav2Mana = resolve => {
	require.ensure(['./components/backstage/nav2Mana.vue'],() => {
		resolve(require('./components/backstage/nav2Mana.vue'))
	})
}
const article = resolve => {
	require.ensure(['./components/backstage/article.vue'],() => {
		resolve(require('./components/backstage/article.vue'))
	})
}
const photo = resolve => {
	require.ensure(['./components/backstage/photo.vue'],() => {
		resolve(require('./components/backstage/photo.vue'))
	})
}

const addArticle = resolve => {
	require.ensure(['./components/backstage/addArticle.vue'],() => {
		resolve(require('./components/backstage/addArticle.vue'))
	})
}

const router = new VueRouter({
	routes: [
		{path:'/mpacc', component: Front,
			children: [
				{path:'',component:Home,name:'home'},
				{path:'details/:id',component: Details,
					children: [
				        {
				          path: '',
				          name:'details', 
				          component: Article
				        }
				    ]
				}
			]
		},	
		{path:'/backstage',component:Backstage,
			children: [
				{path:'',name:'backstage',component:empty},
				{path:'navMana',component:navMana},
				{path:'nav2Mana',component:nav2Mana},
				{path:'article',component:article},
				{path:'photo',component:photo},
				{path:'addArticle',component:addArticle}
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
