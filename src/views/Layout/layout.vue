<template>
  <div class="layout-container">
    <el-container>
      <side-bar></side-bar>
      <el-main>
        <top-bar></top-bar>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopBar from "@/components/Bar/TopBar";
import SideBar from "@/components/Bar/SideBar";
export default {
  name: "layOut",
  data() {
    return {};
  },
  components: {
    TopBar,
    SideBar,
  },
};
</script>

<style lang="less" scoped>
.layout-container {
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      padding: 0;
    }
  }
}
</style>
