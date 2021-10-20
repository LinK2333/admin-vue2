<template>
  <div class="Demo">
    <Tags :tag="tag"></Tags>
  </div>
</template>

<script>
import Tags from "@/components/tags";
export default {
  name: "Demo",
  components: {
    Tags,
  },
  data() {
    return {
      tag: "",
    };
  },
};
</script>
