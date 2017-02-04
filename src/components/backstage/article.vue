<template>
<div>
	<div>
		<el-button @click="addArticle(-1)"><i class="el-icon-plus">发布文章</i></el-button>
		<div style="float:right">
			<el-form :inline="true" class="demo-form-inline">
				<el-form-item label="二级导航:" :label-width="labelWidth">
					<el-select placeholder="选择二级菜单" size="small">
						<el-option v-for="val in nav2List" :label="val.value" :value="val.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-input placeholder="关键字" icon="search"></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
	<el-table :data="tableData" stripe border style="width: 100%">
	    <el-table-column type="index" width="80"></el-table-column>
	    <el-table-column prop="name" label="二级导航栏名称"></el-table-column>
	    <el-table-column prop="title" label="文章标题 " width="400"></el-table-column>
	    <el-table-column prop="time" label="发布时间"></el-table-column>
	    <el-table-column prop="state" label="状态"></el-table-column>
	    <el-table-column label="操作" width="250">
	        <template scope="scope">
	        	<el-button size="small"><i class="el-icon-edit"></i>修改</el-button>
	        	<el-button size="small"><i class="el-icon-edit"></i>下架</el-button>
	        	<el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index)"><i class="el-icon-delete"></i>删除</el-button>
	        </template>
		</el-table-column>
    </el-table>
    <p>没有做动态，内容是固定的，所以如果是从添加文章中跳转过来将没有新文章</p>
</div>
</template>

<script>
  export default {
    methods: {
     	deleteRow(i) {
	        this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
	        	confirmButtonText: '确定',
	        	cancelButtonText: '取消',
	        	type: 'warning'
	        }).then(() => {
	        	this.$message({
	        		type: 'success',
	        		message: '删除成功'
	        	});
	        	this.tableData.splice(i,1)
	        }).catch(() => {
	        	this.$message({
	        		type: 'info',
	        		message: '已取消删除'
	        	})
	        })
        },
        addArticle() {
        	this.$router.push('/backstage/addArticle');
        }
    },
    data() {
      return {
      	labelWidth: '120px',
		nav2List:[{value:'全部',id:0},{value:'招生新闻',id:1},{value:'通知公告',id:2},{value:'中心动态',id:3},{value:'活动照片',id:4}],
        tableData: [
        	{name:'中心首页',title:'2015级MPAcc',time:'2016-12-15',state:'已发布'},
        	{name:'教学安排',title:'16级MPACC(2)班',time:'2016-11-08',state:'已发布'},
        	{name:'招生新闻',title:'2015级MPAcc',time:'2016-12-15',state:'未发布'},
        	{name:'中心首页',title:'2015级MPAcc',time:'2016-12-15',state:'已发布'},
        	{name:'中心首页',title:'12月10日MPAcc实务讲座（6）预告',time:'2016-12-15',state:'未发布'},
        ]
      }
    }
  }
</script>