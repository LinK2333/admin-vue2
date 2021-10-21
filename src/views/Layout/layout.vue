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
import topBar from "@/components/Bar/topBar";
import sideBar from "@/components/Bar/sideBar";
export default {
  name: "layOut",
  data() {
    return {};
  },
  components: {
    "top-bar": topBar,
    "side-bar": sideBar,
  },
};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0;
}
</style>
