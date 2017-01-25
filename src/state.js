import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		nav2: {
			1:[
				{id:0,title:'中心介绍'},
				{id:1,title:'研究方向'},
				{id:2,title:'学习资源与方向'},
				{id:3,title:'国际交流'}
			],
			2:[
				{id:0,title:'报考程序'},
				{id:1,title:'报考程序要求'},
				{id:2,title:'问题答疑'},
				{id:3,title:'备考资料'},
				{id:4,title:'预备报名和注册'}
			],
			3:[
				{id:0,title:'培养方向'},
				{id:1,title:'招生简章'},
				{id:2,title:'教学安排'},
				{id:3,title:'国际交流'}
			],
			4:[
				{id:0,title:'师资概况'},
				{id:1,title:'师资队伍'}
			],
			5:[
				{id:0,title:'案例编写和管理办法'},
				{id:1,title:'提交案例的信息表'}
			],
			6:[
				{id:0,title:'联合会介绍'}
			],
			7:[
				{id:0,title:'校友风采'}
			],
			8:[
				{id:0,title:'联系方式'}
			]
		}
	}
})