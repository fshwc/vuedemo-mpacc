<template>
<div class="content">
	<div class="content_1">
		<div>
			<div class="title_pic">
				<img src="../assets/xiangmu.png" />
			</div>
		</div>
		<div style="margin-top:10px">
			<div class="nav2">
				<ul class="sidebar">
					<li :class="{'current':chose === item.id}" v-for="item in nav2">
						<a @click="goto(item.id)">{{item.title}}</a>
					</li>
				</ul>
			</div>
			<div class="content_2">
				<router-view></router-view>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			chose: 0
		}
	},
	computed: {
		nav2: function() {
			return this.$store.state.nav2[this.$route.params.id];
		}
	},
	watch: {
	    '$route.params.id': 'fetchData'
	},	
	methods: {
		fetchData() {
			this.chose = this.$route.query.menu2Id;
		},
		goto(id) {
			this.chose = id;
			this.$router.push({ path: '', query: { menu2Id: id }, append: true})
		}
	},
	 
}
</script>

<style>
/*===大图片及侧边===*/
.content_1{max-width:1366px;margin:0 auto; background: url("../assets/body_bg.png") no-repeat;}
.content_1~div,.content_1>div{width:1080px;margin:0 auto;clear: both;}
.title_pic{}

.nav2 {width:185px;height:auto;float:left;margin-left: -10px;}
.sidebar{width:185px;background: url("../assets/sidebar_bg.png") repeat-y;min-height:497px;}
.sidebar li{}
.sidebar li a{display:inline-block;width:185px;height:71px;text-align: center;line-height:60px;color:#fff;}
.current a{background: url("../assets/nav_bg_03.png") no-repeat;}

.content_2{width:905px;float:left;background-color:#fff;}
</style>