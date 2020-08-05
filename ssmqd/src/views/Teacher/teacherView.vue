<template>
  <div class="div-container">
    <!-- 1.面包屑（路径导航）-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班级信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2.搜索栏-->
    <el-form :inline="true" class="demo-form-inline" style="margin-top: 15px;" >
      <el-form-item label="老师名称:">
        <el-input v-model="teacherName"></el-input>
      </el-form-item>
      <el-button type="primary" @click="query()">查询</el-button>
    </el-form>

    <!-- 数据表格-->
      <el-table :data="tableData" style="width: 100%" :border="true" max-height="550">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="teacherId" label="老师编号">
      </el-table-column>
      <el-table-column prop="teacherName" label="老师姓名">
      </el-table-column>
      <el-table-column prop="teacherSex" label="性别">
      </el-table-column>
      <el-table-column prop="teacherAddress" label="所在地址" width="120">
      </el-table-column>
      <el-table-column prop="teacherTel" label="电话" width="120">
      </el-table-column>

    <!-- <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>

        </template>
      </el-table-column> -->
    </el-table>


  </div>
</template>

<script>
    export default{
      data:function(){
        return{
          teacherName:null,
          tableData:{},
          page:1,
          rows:10,
          total:1
        };
      },
      methods:{
         query:function(){
           let params={
             page:this.page,
             rows:this.rows,
             teacherName:this.teachername
           };
           console.log(params);
           //获取axios的请求路径
           let url=this.axios.urls.teacherclass;
           //发送axios请求
           this.axios.post(url).then(resp=>{
           let json=resp.data;
             console.log(resp.data);
             //获取分页结果集
            // this.tableData=json;
            alert(json)
             //获取分页总记录数
             //this.total=json.total;

             this.teacherName=null;
           }).catch(resp=>{

           });
         }
      }


    }
</script>

<style>
  .div-container {
    margin: 15px;
  }
</style>
