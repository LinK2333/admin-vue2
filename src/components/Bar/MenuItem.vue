<template>
  <el-menu-item v-if="route.alwaysShow" :index="route.children[0].path">
    <i :class="route.children[0].meta.icon"></i>
    <span slot="title">{{ route.children[0].name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "MenuItem",
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
