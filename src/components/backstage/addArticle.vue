<template>
<div class="article">
	<h3>新闻新增</h3>
	<el-form :inline="true" :model="artConfigure" class="demo-form-inline">
		<el-form-item label="发布时间" :label-width="labelWidth">
			<el-date-picker v-model="artConfigure.time" type="date" placeholder="选择日期" size="small"></el-date-picker>
		</el-form-item>
		<el-form-item label="标题" :label-width="labelWidth" required>
			<el-input v-model="artConfigure.title" placeholder="请输入标题" size="small"></el-input>
		</el-form-item>
		<el-form-item label="作者" :label-width="labelWidth">
			<el-input v-model="artConfigure.author" placeholder="请输入作者" size="small"></el-input>
		</el-form-item>
	</el-form>
	<el-form :inline="true" :model="artConfigure" class="demo-form-inline">
		<el-form-item label="一级菜单:" :label-width="labelWidth" required>
			<el-select v-model="artConfigure.nav" placeholder="选择一级菜单" size="small" >
				<el-option v-for="val in navList" :label="val.value" :value="val.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="二级菜单:" :label-width="labelWidth" required>
			<el-select v-model="artConfigure.nav2" placeholder="选择二级菜单" size="small">
				<el-option v-for="val in nav2List" :label="val.value" :value="val.id"></el-option>
			</el-select>
		</el-form-item>
	</el-form>
	<quill-editor ref="myTextEditor" v-model="content">
    </quill-editor>
    <el-button type="success" @click="saveArticle">保存</el-button><el-button type="danger" @click="cancel">取消</el-button>
</div>
</template>

<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)

export default {
	data() {
		return {
			hasSave: false,
			labelWidth: '100px',
			artConfigure: {nav:'',nav2:'',time:'',title:'',author:''},
			content: '',
			navList:[{value:'中心首页',id:1},{value:'中心介绍',id:2},{value:'招生信息',id:3},{value:'教学任务',id:4}],
			nav2List:[{value:'招生新闻',id:1},{value:'通知公告',id:2},{value:'中心动态',id:3},{value:'活动照片',id:4}]
		}
	},
	methods: {
		saveArticle() {
			if(this.artConfigure.title == "" || this.artConfigure.nav == "" || this.artConfigure.nav2 == "") {
				this.$notify({
					title:'提示',
					message: '必要信息没有填全,请补全',
					duration:0
				});
			}else {
				this.hasSave = true;
				this.$router.push('/backstage/article');
			}
		},
		cancel() {
			this.$confirm('此操作将不会保存文章，是否继续？',{
				confirButtonText:'确定',
				cancalButtonText: '取消',
				type:'warning'
			}).then(() => {
				this.hasSave = true;
				this.$router.push('/backstage/article');
			}).catch(() => {
				return false;
			})
		}
	},
	beforeRouteLeave (to, from, next) {
    	if(!this.hasSave) {
			this.$confirm('此操作将不会保存文章，是否继续？',{
				confirButtonText:'确定',
				cancalButtonText: '取消',
				type:'warning'
			}).then(() => {
				next();
			}).catch(() => {
				return false;
			})
		}else {
			next();
		}
  	}
}
</script>

<style>
.article {
	background:#fff;
}
.el-form-item {
	margin-bottom:0;
}
.el-input  {
	width:90%;
}
.ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }
</style>