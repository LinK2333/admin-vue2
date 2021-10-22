<template>
  <el-aside width="200px" ref="asideHidden">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="uniqueopened"
      :router="true"
      :collapse="isCollapse"
    >
      <div v-for="route in menusList" :key="route.name" v-if="!route.hidden">
        <el-menu-item
          v-if="route.children && route.children.length > 0"
          :index="route.children[0].path"
        >
          <i :class="route.children[0].meta.icon"></i>
          <span slot="title">{{ route.children[0].name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="route.path">
          <template slot="title">
            <div class="link-style">
              <i :class="route.meta.icon"></i>
              <span slot="title">{{ route.name }}</span>
            </div>
          </template>
          <el-menu-item-group v-for="child in route.children" :key="child.name">
            <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import menu from "./menu.vue";
export default {
  component: {
    menu,
  },
  data() {
    return {
      uniqueopened: true,
      menusList: [],
      isCollapse: false,
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
  created() {
    this.menusList = JSON.parse(JSON.stringify(this.$store.getters.routes));
  },
};
</script>

<style lang="less" scoped></style>
