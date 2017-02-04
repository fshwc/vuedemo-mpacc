<template>
<div>
	<div>
		<el-button @click="editRow(-1)"><i class="el-icon-plus">新增</i></el-button>
		<div style="float:right">
			<el-input placeholder="关键字" icon="search"></el-input>
		</div>
	</div>
	<el-table :data="tableData" stripe border>
		<el-table-column type="index" width="80"></el-table-column>
		<el-table-column prop="navName" label="一级导航栏名称"></el-table-column>
		<el-table-column prop="chirdren.nav2Name" label="二级导航栏名称 "></el-table-column>
	    <el-table-column prop="chirdren.hyperlink" label="超链接"></el-table-column>
	    <el-table-column prop="chirdren.ranking" label="排名"></el-table-column>
	    <el-table-column label="操作">
	        <template scope="scope">
	        	<el-button size="small" @click.native.prevent="editRow(scope.$index)"><i class="el-icon-edit"></i>编辑</el-button>
	        	<el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index)"><i class="el-icon-delete"></i>删除</el-button>
	        </template>
		</el-table-column>
	</el-table>
</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
        	{navName:'招生信息',chirdren:[
        	 {nav2Name:'报考程序',hyperlink:'/mpacc',ranking:1},
        	 {nav2Name:'报考要求',hyperlink:'/mpacc',ranking:2},
        	 {nav2Name:'备考资料',hyperlink:'/mpacc',ranking:5}
        	 ]
        	},
        	{navName:'中心首页',chirdren:[
        	 {nav2Name:'通知公告',hyperlink:'/mpacc',ranking:1},
        	 {nav2Name:'报考要求',hyperlink:'/mpacc/sfgh',ranking:2},
        	 {nav2Name:'中心动态',hyperlink:'/mpacc',ranking:5}
        	 ]
        	}
        	]
		}
	}
}
</script>