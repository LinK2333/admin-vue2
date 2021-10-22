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
      <el-submenu v-else :index="child.path">
        <template slot="title">
          <div class="link-style">
            <i :class="child.meta.icon"></i>
            <span slot="title">{{ child.name }}</span>
          </div>
        </template>
        <div v-for="child2 in child.children" :key="child2.name">
          <el-menu-item-group>
            <el-menu-item :index="child2.path">{{ child2.name }}</el-menu-item>
          </el-menu-item-group>
        </div>
      </el-submenu>
    </div>
  </el-submenu>
</template>

<script>
export default {
  name: "MoreMenuItem",
  props: {
    route: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scpoed></style>
