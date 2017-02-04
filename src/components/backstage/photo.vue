<template>
<div>
	<div>
		<el-button @click="editRow(-1)"><i class="el-icon-plus">新增</i></el-button>
		<div style="float:right">
			<el-input placeholder="关键字" icon="search"></el-input>
		</div>
	</div>
	<el-table :data="photoList" stripe border>
	    <el-table-column type="index" ></el-table-column>
	    <el-table-column prop="banner" label="图片模块" width="100"></el-table-column>
	    <el-table-column prop="name" label="图片名称"></el-table-column>
	    <el-table-column prop="address" label="存放地址" width="400"></el-table-column>
	    <el-table-column prop="ranking" label="排名"></el-table-column>
	    <el-table-column prop="isShow" label="是否显示"></el-table-column>
	    <el-table-column label="操作" width="200">
	        <template scope="scope">
	        	<el-button size="small" @click.native.prevent="editRow(scope.$index)"><i class="el-icon-edit"></i>编辑</el-button>
	        	<el-button size="small" type="danger" @click.native.prevent="deleteRow(scope.$index)"><i class="el-icon-delete"></i>删除</el-button>
	        </template>
		</el-table-column>
    </el-table>

    <el-dialog title="新增图片" v-model="dialogVisible">
		<!--图片上传框-->
		<el-upload action="/picture/post" type="drag" style="margin:auto;">
			<i class="el-icon-upload"></i>
			<div class="el-deagger__text">将文件拖到此处，或<em>点击上传</em></div>
		</el-upload>
    	<el-form :model="form" class="photoForm">
    		<!--图片表单-->
    		<el-form-item label="图片名称" :label-width="formLabelWidth">
    			<el-input v-model="form.name"></el-input>
    		</el-form-item>
    		<el-form-item label="图片模块" :label-width="formLabelWidth" required>
    			<el-select v-model="form.banner" placeholder="--请选择--">
    				<el-option v-for="val in banner" :label="val.value" :value="val.id"></el-option>
    			</el-select> 
    		</el-form-item>
    		<el-form-item label="图片链接" :label-width="formLabelWidth">
    			<el-input v-model="form.address"></el-input>
    		</el-form-item>
    		<el-form-item label="是否显示" :label-width="formLabelWidth" required>
    			<el-radio-group v-model="form.isShow">
    				<el-radio :label="1">是</el-radio>
    				<el-radio :label="0">否</el-radio>
    			</el-radio-group>
    		</el-form-item>
    		<el-form-item label="排序" :label-width="formLabelWidth">
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
	data() {
		return {
			formLabelWidth: '120px',
			nowIndex: -1,
			dialogVisible:false,
			banner: [{value:'中心首页',id:1},{value:'中心介绍',id:2},{value:'招生信息',id:3},{value:'教学任务',id:4}],
			form: {banner:'',name:'',address:'',ranking:'',isShow:''},
			emplyForm:{banner:'',name:'',address:'',ranking:'',isShow:''},
			photoList: [
				{banner:'首页',name:'photo1',address:'rontPicture/20151114025318.png',ranking:1,isShow:'是'},
				{banner:'师资力量',name:'teacher',address:'rontPicture/2015118.png',ranking:10,isShow:'否'},
				{banner:'中心介绍',name:'photo10',address:'rontPicture/20151114025318.png',ranking:5,isShow:'否'},
				{banner:'首页',name:'photo1',address:'rontPicture/20151114025318.png',ranking:3,isShow:'是'}
			]
		}
	},
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
	        	this.photoList.splice(i,1)
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
	      		this.form = this.photoList[this.nowIndex];
	      	}
		},
		cancelEdit() {
			this.dialogVisible = false;
		},
		confirmEdit() {
			this.dialogVisible = false;
	    	if(this.nowIndex == -1) {
		    	this.photoList.push(this.form);
	      	}else {
	      		this.photoList[this.nowIndex] = this.form;
	      	}
		}
	}
}
</script>

<style>
.photoForm {
	font-size:14px;
}
.photoForm .el-form-item {
    margin-bottom: 10px;
}
.el-dialog {
	top:5% !important;
}
</style>