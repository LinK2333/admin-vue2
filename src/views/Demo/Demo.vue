<template>
  <div class="Demo">
    <Tags :tag="tag" ref="Tags"></Tags>
    <RichEditor v-model="content"></RichEditor>
    <SvgIcon icon-class="school" />
    <el-button @click="getDemo">点击调接口</el-button>
  </div>
</template>

<script>
import Tags from "@/components/Tags";
import RichEditor from "@components/RichEditor";
import { demo } from "@/service/Demo.js";
export default {
  name: "Demo",
  components: {
    Tags,
    RichEditor,
  },
  data() {
    return {
      tag: "",
      content: "",
    };
  },
  methods: {
    // 获取tag字符串
    getTags() {
      this.tag = this.$refs.Tags.getTags();
    },
    async getDemo() {
      let res = await demo();
      console.log(res);
    },
  },
};
</script>
