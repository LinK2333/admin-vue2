<template>
  <div>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput"
      >+ New Tag</el-button
    >
    <el-tag
      :key="index"
      v-for="(tag, index) in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
    };
  },
  mounted() {
    this.setInitVal();
  },
  methods: {
    /**
     * 反显
     */
    setInitVal() {
      this.dynamicTags = this.tag ? this.tag.split(",") : [];
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      // 最多只能添加5个
      if (this.dynamicTags.length >= 5) {
        return this.$message.error("最多只能添加5个!");
      }
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue.length > 10) {
        this.$message.error("长度不可超过10，请重新输入...");
      } else if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },

    // Tags转换成字符串
    getTags() {
      return this.dynamicTags.join(",");
    },
  },
};
</script>
<style lang="less" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin: 0 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin: 0 10px;
  vertical-align: bottom;
}
</style>
