<template>
  <div class="div-container">
    <!-- 1.面包屑（路径导航）-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班级信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2.搜索栏-->
    <el-form :inline="true" class="demo-form-inline" style="margin-top: 15px;">
     <!-- <el-form-item label="角色名称:">
        <el-input v-model="jsName"></el-input>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button type="primary" @click="query(1)">查询</el-button>
        <el-button type="primary" @click="add()">添加</el-button>
      </el-form-item> -->
    </el-form>
    <!-- 数据表格-->
    <el-table :data="tableData" style="width: 100%" :border="true" max-height="550">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="classId" label="班级编号" width="120">
      </el-table-column>
      <el-table-column prop="className" label="班级名称" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="ckls(scope.row)">查看对应老师</el-button>
          <el-button size="mini" type="danger" @click="ckxx(scope.row)">查看学生</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 4.分页栏-->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]"
      :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        tableData: [],
        classname: '',
        total:0,
        page:1,
        rows:5
      }
    },
    methods: {
      handleSizeChange(rows) {
        this.rows = rows;
        this.page = 1;
        this.query(null);
      },
      handleCurrentChange(page) {
        this.page = page;
        this.query(null);
      },
      query: function(page) {
        if (page != null) {
          this.page = page;

        }
        this.axios.post(this.axios.urls.Ckclass, {
          className: this.classname,
          page: this.page
        }).then(resp => {
          console.log(resp);
          this.tableData = resp.data.rows;
            this.total = resp.data.tools;
          this.classname = null;
        }).catch(error => {
          console.log(error);
        })
      }


    },
    created: function() {
      this.query();
    }









  }
</script>

<style>
  .div-container {
    margin: 15px;
  }
</style>
