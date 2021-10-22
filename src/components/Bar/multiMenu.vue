<template>
  <div>
    <!-- 第一次传进来的是一个对象，如果该对象包含了不为空的children，则使用MultiMenuItem递归
    组件进行迭代-->
    <el-submenu
      v-for="(route, index) in routes"
      :index="new Date()"
      :key="index"
      v-if="!route.hidden && route.children && route.children.length > 0"
    >
      <!-- 渲染第一个template -->
      <template slot="title">
        <i :class="route[0].meta.icon"></i>
        {{ route[0].meta.title }}
      </template>
      <multi-menu :routes="route.children" />
    </el-submenu>
    <el-menu-item :index="route.path" v-else-if="!route.hidden" :key="index">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{ route.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "multiMenu",
  props: ["routes"], // 子路由
};
</script>
