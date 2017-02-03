<template>
<div>
	<div class="content">
		<photo-box></photo-box>
		<div>
			<home-page v-bind:box="box" v-for="box in boxs"></home-page>
		</div>
	</div>  
</div>
</template>

<script>
import nav from './nav.vue'
import footer from './footer.vue'
import photo from './photo.vue'
import homePage from './homePage.vue'

export default {
	data() {
		return {
			boxs: [
				{
					class: 'notice',
					left:true,
					title:'公告通知',
					articles: [
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
					]
				},
				{
					class: 'dynamic',
					left:false,
					title:'中心动态',
					articles: [
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
					]
				},
				{
					class: 'Enrollment',
					left:true,
					title:'招生信息',
					articles: [
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
					]
				},
				{
					class: 'arrangement',
					left:false,
					title:'教学安排',
					articles: [
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
						{time: '2016-12-15',title:'2015级MPAcc非申请提前毕业学员开题报告提交通知及说明'},
					]
				}
				
			]
		}
	},

	components: {
		homePage,
		'nav-list':nav,
		'footer-box':footer,
		'photo-box':photo
	}
}
</script>

