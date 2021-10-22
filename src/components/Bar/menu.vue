<template>
  <div>
    <!-- <el-menu-item :index="route.path" :key="index">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{ route.meta.title }}</span>
    </el-menu-item> -->
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
  created: () => {
    this.index = new Date(); // 通过设定key值为当前的时间来个给每个key不同的index
  },
  data() {
    return {
      index: "",
    };
  },
};
</script>
