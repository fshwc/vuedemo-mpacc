<template>
<div>
	<div>
		<el-button @click="editRow(-1)"><i class="el-icon-plus">新增</i></el-button>
		<div style="float:right">
			<el-input placeholder="关键字" icon="search"></el-input>
		</div>
	</div>
	<el-table :data="tableData" stripe border style="width: 100%">
	    <el-table-column type="index" width="80"></el-table-column>
	    <el-table-column prop="name" label="导航栏名称 "></el-table-column>
	    <el-table-column prop="hyperlink" label="超链接"></el-table-column>
	    <el-table-column prop="ranking" label="排名"></el-table-column>
	    <el-table-column label="操作">
	        <template scope="scope">
	        	<el-button size="small" @click.native.prevent="editRow(scope.$index)"><i class="el-icon-edit"></i>编辑</el-button>
	        	<el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index)"><i class="el-icon-delete"></i>删除</el-button>
	        </template>
		</el-table-column>
    </el-table>

    <el-dialog title="一级导航栏" v-model="dialogVisible">
    	<el-form :show="form">
    		<el-form-item label="导航栏名称" :label-width="formLabelWidth">
    			<el-input v-model="form.name" auto-complete="off"></el-input>
    		</el-form-item>
    		<el-form-item label="超链接" :label-width="formLabelWidth">
    			<el-input v-model="form.hyperlink" ></el-input>
    		</el-form-item>
    		<el-form-item label="排名" :label-width="formLabelWidth">
    			<el-input v-model="form.ranking"></el-input>
    		</el-form-item>
    	</el-form>
    	<div slot="footer" class="dialog-footer">
    		<el-button @click="cancelEdit">取消</el-button>
    		<el-button @click="confirmEdit">确定</el-button>
    	</div>
    </el-dialog>
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
	    editRow(i) {
	    	this.nowIndex = i;
	      	this.dialogVisible = true;
	      	if(i == -1) {
	      		this.form = JSON.parse(JSON.stringify(this.emplyForm));
	      	}else {
	      		this.form = this.tableData[this.nowIndex];
	      	}
	    },
	    cancelEdit() {
	    	this.dialogVisible = false;
	    },
	    confirmEdit() {
	    	this.dialogVisible = false;
	    	if(this.nowIndex == -1) {
		    	this.tableData.push(this.form);
	      	}else {
	      		this.tableData[this.nowIndex] = this.form;
	      	}
	    }
    },
    data() {
      return {
      	nowIndex: -1,
      	formLabelWidth: '120px',
      	dialogVisible: false,
      	form: {
      		name: '',
      		hyperlink: '',
      		ranking: ''
      	},
      	emplyForm:{
      		name: '',
      		hyperlink: '',
      		ranking: ''
      	}, 
        tableData: [
        	{name:'中心首页',hyperlink:'/mpacc',ranking:1},
        	{name:'中心介绍',hyperlink:'/details/1',ranking:2},
        	{name:'招生信息',hyperlink:'/details/2',ranking:3},
        	{name:'教学任务',hyperlink:'/details/3',ranking:4},
        	{name:'师资力量',hyperlink:'/details/4',ranking:5},
        	{name:'案例研究',hyperlink:'/details/5',ranking:6},
        	{name:'联合会',hyperlink:'/details/6',ranking:7},
        	{name:'校友天地',hyperlink:'/details/7',ranking:8},
        	{name:'联系我们',hyperlink:'/details/8',ranking:9}
        ]
      }
    }
  }
</script>