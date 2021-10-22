<template>
  <div>
    <editor :init="init" v-model="state" />
  </div>
</template>

<script>
import tinymce from "tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";
import "tinymce/plugins/image";
import "tinymce/plugins/code";
import "tinymce/plugins/emoticons";
import editor from "@tinymce/tinymce-vue";
import "./langs/zh_CN";
export default {
  components: {
    editor,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  model: {
    event: "update",
    prop: "modelValue",
  },
  watch: {
    state(val) {
      this.$emit("update", val);
    },
  },
  mounted() {
    tinymce.init({});
  },
  data() {
    return {
      state: this.modelValue,
      init: {
        language: "zh_CN", //语言设置中文
        height: 500, // 高度
        width: "100%", //  宽度
        skin_url: "/tinymce/skins/ui/oxide", // 编辑器皮肤样式
        content_css: "/tinymce/skins/content/default/content.css",
        emoticons_database_url: "/tinymce/emojis.js",
        menubar: false, // 顶部菜单栏显示,false则表示不显示
        branding: false, // 去除右下角的'由tinymce驱动'
        plugins: "image code emoticons", // 插件
        toolbar: [
          {
            name: "history",
            items: ["undo", "redo"],
          },
          {
            name: "styles",
            items: ["styleselect"],
          },
          {
            name: "formatting",
            items: ["bold", "italic"],
          },
          {
            name: "alignment",
            items: ["alignleft", "aligncenter", "alignright", "alignjustify"],
          },
          {
            name: "indentation",
            items: ["outdent", "indent"],
          },
          {
            name: "other",
            items: ["image", "emoticons", "code"],
          },
        ],
        toolbar_mode: "floating", //"scrolling",
        toolbar_location: "top", // 工具栏位置 top bottom
        toolbar_sticky: false, // 工具栏是否sticky
        images_upload_url: "postAcceptor.php",
        images_upload_handler: function (blobInfo, success) {
          const reader = new FileReader();
          reader.readAsDataURL(blobInfo.blob());
          reader.onload = function () {
            success(this.result);
          };
        },
      },
    };
  },
};
</script>
