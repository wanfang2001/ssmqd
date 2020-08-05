<template>
  <el-container class="main-container">
    <el-aside :class="asideClass">
      <LeftNav></LeftNav>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <TopNav></TopNav>
      </el-header>
      <el-main class="main-center">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import LeftNav from '@/components/LeftNav'
  import TopNav from '@/components/TopNav'
  
  export default {
    name: "Main",
    components: {
      LeftNav,
      TopNav
    },
    data: function() {
      return {
        asideClass: "main-aside"
      }
    },
    created: function() {
      this.$root.Bus.$on("aside-collapsed", (collapsed) => {
        console.log(collapsed);
        if (collapsed) {
          setTimeout(()=>{
            this.asideClass = "main-aside-collapsed";
          },300);
        } else {
          this.asideClass = "main-aside";
        }
      });
    }
  }
</script>

<style scoped="scoped">
  .main-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .main-aside-collapsed {
    /* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
    width: 64px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-aside {
    width: 240px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-header,
  .main-center {
    padding: 0px;
    border-left: 2px solid #333;
  }
</style>
