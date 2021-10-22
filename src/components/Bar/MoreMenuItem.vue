<template>
  <el-submenu :index="route.path">
    <template slot="title">
      <div class="link-style">
        <i :class="route.meta.icon"></i>
        <span slot="title">{{ route.name }}</span>
      </div>
    </template>
    <div v-for="child in route.children" :key="child.name">
      <el-menu-item-group v-if="route.alwaysShow">
        <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
      </el-menu-item-group>
      <more-menu-item v-else :route="child"></more-menu-item>
    </div>
  </el-submenu>
</template>

<script>
export default {
  name: "MoreMenuItem",
  props: {
    route: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scpoed></style>
