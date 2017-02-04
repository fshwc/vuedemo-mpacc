<template>
<div>
	<div class="backstageHeader">
        <span class="title">MPACC后台管理系统</span>
        <div class="welcome">
            <span>欢迎您，管理员!</span>
            <a href="javascript:;">修改密码</a>
            <a @click="goto()">退出</a>
        </div>
    </div>
	<content-box></content-box>
	<div id="backstagefooter">
		<ul>
			<li>Copyright © 2013 School of Management,GDUT 广东工业大学   管理学院</li>
		</ul>
	</div>
</div>
</template>

<script>
import contentBox from './content.vue'

export default {
	components: {
		contentBox
	},
    methods: {
        goto() {
            this.$router.push({ name: 'home'})
        }
    }
}
</script>

<style>
.backstageHeader {
    height: 80px;
    width: 100%;
    background-color: #00a5a5;
    position: absolute;
    z-index: 5;
    top: 0;
}
.backstageHeader .title {
    color: #fff;
    font-size: 32px;
    line-height: 80px;
    margin-left: 50px;
    float:left;
}
.backstagecontent {
    width: 100%;
    overflow: auto;
    background-color: #e1e1e1;
    position: absolute;
    top: 83px;
    bottom: 44px;
    z-index: 10;
}
#backstagefooter {
    padding: 10px 0;
    border-top: 1px solid #f1ecde;
    background-color: #00a5a5;
    width: 100%;
    height: 21px;
    position: absolute;
    z-index: 200;
    bottom: 0;
    clear: both;
}
#backstagefooter ul li {
    width: 100%;
    text-align: center;
    color: #fff;
}
.welcome {
    float:right;
    color:#fff;
    margin-top:15px;
}
.welcome a {
    color:#fff;
    margin:0;
    padding:0;
    margin:0 10px;
}
</style>