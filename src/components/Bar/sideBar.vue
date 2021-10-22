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
        <!-- 单路由   -->
        <el-menu-item v-if="route.alwaysShow" :index="route.children[0].path">
          <i :class="route.children[0].meta.icon"></i>
          <span slot="title">{{ route.children[0].name }}</span>
        </el-menu-item>
        <!-- 多路由 -->
        <el-submenu v-else :index="route.path">
          <template slot="title">
            <div class="link-style">
              <i :class="route.meta.icon"></i>
              <span slot="title">{{ route.name }}</span>
            </div>
          </template>
          <div v-for="child in route.children" :key="child.name">
            <!-- 单路由 -->
            <el-menu-item-group v-if="route.alwaysShow">
              <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
            </el-menu-item-group>
            <!-- 多路由 -->
            <el-submenu v-else :index="child.path">
              <template slot="title">
                <div class="link-style">
                  <i :class="child.meta.icon"></i>
                  <span slot="title">{{ child.name }}</span>
                </div>
              </template>
              <div v-for="child2 in child.children" :key="child2.name">
                <!-- 单路由 -->
                <el-menu-item-group>
                  <el-menu-item :index="child2.path">{{
                    child2.name
                  }}</el-menu-item>
                </el-menu-item-group>
              </div>
            </el-submenu>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import menu from "./menu.vue";
export default {
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

<style lang="less" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>
