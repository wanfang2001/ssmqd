<template>
  <el-menu router  :default-active="$route.path" class="el-menu-vertical-demo"  background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" :collapse="collapse">
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="">
    </div>
    <el-menu-item index="/Home" key="home" >
      <i class=""></i>
      <span slot="title">首页</span>
    </el-menu-item>
   <el-submenu v-for="root in treenodeLst"  :key="'key-'+root.perid" :index="'index-'+root.perid" >
      <template slot="title">
        <!-- <i :class="root.icon"></i> -->
        <span>{{root.pername}}</span>
      </template>
        <el-menu-item v-for="node in root.children"  :key="'key-'+node.perid" :index="node.url"> 
          <!-- <i :class="node.icon"></i> -->
        <span slot="title">{{node.pername}}</span>
        </el-menu-item>
      </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "LeftNav",
    data:function(){
      return{
        collapse:false,
         treenodeLst:[]
      }
    },
    created: function() {
      this.$root.Bus.$on("aside-collapsed", (collapsed) => {
        this.collapse=collapsed;
        console.log(this.collapse);
      });
      //获取axios请求地址
      let url = this.axios.urls.sysPermission_node;
      this.axios.post(url,{}).then(resp=>{
        this.treenodeLst=resp.data;
      }).catch(error=>{
        console.log(error);
      });
      // 设置首页默认选中
       // this.$router.push("/Home");
    }
  }
</script>

<style scoped="scoped">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
