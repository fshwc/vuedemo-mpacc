<template>
<div>
	<div class="artTitle">
		<span id="title">{{main}}</span>
	</div>
	<div class="articleList" id="artList">
		<div class="article_title">
			<span>{{article.title}}</span>
		</div>
		<div class="createTime_author">
			<span>发布时间：{{article.time}}</span>
			<span>作者：{{article.author}}}</span>
		</div>
		<div v-html="article.mainContent">
		</div>
	</div>
</div>	
</template>

<script>
export default {
	data() {
		return {
			'main': '中心介绍',
			'article': {
				title: '中心介绍',
				time: '2016-06-20',
				author: 'MPAcc教育中心',
				mainContent: '<h2>为方便，只有标题做了动态，文章是固定不变的。</h2><p>广东工业大学于1988年开办会计学专科专业，1997年开办本科专业，同年在企业管理二级学科硕士点中招收财务管理方向硕士研究生，2006年获得会计学硕士学位授予权，2014年获得MPAcc专业硕士学位授予权。经过20多年的会计学教育的沉淀和传承，我校已形成了会计学本科、硕士多层次办学结构和培养体系，累计培养本（专）科毕业生1200多人、硕士毕业生 160多人，为地方社会经济发展输送了大量高素质会计专业人才。与此同时，会计学科已经建立起一支具有扎实专业理论知识、丰富实践经验和过硬教学能力的高水平师资队伍。目前，该学科有教授4人、副教授23人、讲师8人，其中具有博士学位12人、硕士学位15名，硕士生导师27人。此外，聘请了一批具有高级会计师/注册会计师资格的大中型企业、会计事务所等财务会计高管作为校外兼职导师，校内学者与校外专家共同组建了一支理论与实践结合的师资团队。本学科注重我校管工融合的学科背景和优势，面向广东省社会经济转型背景下的会计人才需求，不断探索MPAcc教育培养新模式，加强师资优化配置、教学内容、案例开发和实践基地建设，确保达到会计专业硕士研究生培养目标。</p>'
			}
		}
	},
	created () {
		this.fetchData();
	},
	watch: {
	    '$route.query.menu2Id': 'fetchData'
	},
	methods: {
		fetchData() {
			const val = this.$store.state.nav2[this.$route.params.id][this.$route.query.menu2Id].title;
			this.main = val;
			this.article.title = val;
			console.log(val)
		}
	}
}
</script>

<style>
.artTitle{height:47px;border-bottom: #2d658e 4px solid;margin:3px 6px;}
#title{float:left;display: inline-block;width:169px;height:47px;background-image: url("../assets/title_bg_02.png");
	font-size: 18px;text-align: center;line-height: 47px;color:#fff;
	}
#backToList{/* float:right; *//* display: inline-block; *//* height:47px; *//* font-size: 18px; *//* line-height: 47px; *//* margin-right:10px; */}
#backToList a{}
#artList{padding:20px;}
#artList .createTime_author span{margin-left:25px;font-size:16px;color:#827070;}
#artList .createTime_author{width:100%;border-bottom:1px #ccc dashed;}
#artList img{max-width:100%;}
.article_title{display:block;width:100%;height:38px;text-align:center;font-size:24px;}
.artList{height:360px;}
.artList li{border-bottom:1px dashed #a4a3a3;line-height:35px;}
.artList li span{float:right;*margin-top:-35px;}
#pager {height:40px;}
#pager a{margin-left:5px;}
.unClick{color:#ccc;}
</style>