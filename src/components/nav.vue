<template>
<div>
	<div class="header">
	<img src="../assets/logo.png">
	</div>
	<div class="nav">
		<ul id="navList">
			<li v-for="item in nav">
				<a :class="{'selected':chose === item.id}" @click="changeChose(item.id)" href="javascript:;">{{item.name}}</a>
			</li>
		</ul>    
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{id:0, name: '中心首页'},
				{id:1, name: '中心介绍'},
				{id:2, name: '招生信息'},
				{id:3, name: '教学教务'},
				{id:4, name: '师资力量'},
				{id:5, name: '案例研究'},
				{id:6, name: '联合会'},
				{id:7, name: '校友天地'},
				{id:8, name: '联系我们'}
			],
			chose: 0
		}
	},
	computed: {
		isChosed (id) {
			return this.chose === id;
		}
	},
	methods: {
		changeChose (id) {
			this.chose = id;
			if(id==0) {
				this.$router.push('/');
			}else {
				this.$router.push({ name: 'details', params: { id: id },query: { menu2Id: 0 }});
			}
		}
	}
}
</script>