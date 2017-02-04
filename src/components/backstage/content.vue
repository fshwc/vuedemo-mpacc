<template>
<div class="backstagecontent">
	<div class="content_left fl">
		<ul>
			<li><router-link to="/backstage/navMana" >一级导航栏管理</router-link></li>
			<li><router-link to="/backstage/nav2Mana">二级导航栏管理</router-link></li>
			<li><router-link to="/backstage/article">文章管理</router-link></li>
			<li><router-link to="/backstage/photo">图片管理</router-link></li>
		</ul>
	</div>
	<div class="contentRight">
		<h3 class='tabs'>{{this.title}}</h3>
		<router-view></router-view>
	</div>
</div>
</template>

<script>
export default {
	computed: {
		title() {
			const arr = [
				{key:'',value:''},
				{key:'navMana',value:'一级导航栏管理'},
				{key:'nav2Mana',value:'二级导航栏管理'},
				{key:'article',value:'文章管理'},
				{key:'photo',value:'图片管理'},
			];
			var router = this.$route.path.substring(11);
			for(var key in arr) {
				if(arr[key].key == router) {
					return arr[key].value;
				}
			}
		}
		
	}
}
</script>
<style>
* {
	margin:0;
	padding:0;
}
a {
    text-decoration: none;
}	
.content_left {
    width: 200px;
    height: 100%;
    background-color: #32323a;
    overflow: auto;
    margin-left: 3px;
}
.content_left ul li {
    width: 200px;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
}
.content_left a {
    color: #f5f5f5;
}
.contentRight {
    margin-left: 200px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}
.contentRight > div {
	padding:0 10px;
}
.tabs {
    width: 100%;
    height: 31px;
    overflow: hidden;
    border-bottom:4px solid #fff;
    padding-left:10px;
}
</style>