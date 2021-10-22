<template>
  <el-aside width="200px" ref="asideHidden">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :unique-opened="uniqueopened"
      :router="true"
      :collapse="isCollapse"
    >
      <div v-for="route in renderList" :key="route.name">
        <!-- 单路由   -->
        <menu-item v-if="route.alwaysShow" :route="route"></menu-item>
        <!-- 多路由 -->
        <more-menu-item v-else :route="route"></more-menu-item>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import MoreMenuItem from "./MoreMenuItem.vue";
export default {
  components: {
    MenuItem,
    MoreMenuItem,
  },
  data() {
    return {
      uniqueopened: true,
      menusList: [],
      isCollapse: false,
    };
  },
  computed: {
    renderList() {
      return this.menusList.filter(item => !item.hidden);
    },
  },
  methods: {},
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
