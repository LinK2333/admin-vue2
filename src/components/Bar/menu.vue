<template>
  <div>
    <el-menu-item :index="route.children[0].path">
      <i :class="route.children[0].meta.icon"></i>
      <span slot="title">{{ route.children[0].name }}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["route"],
  data() {
    return {};
  },
};
</script>
