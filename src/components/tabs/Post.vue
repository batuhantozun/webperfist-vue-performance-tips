<template>
  <div>Post component</div>
</template>

<script>
import { onActivated, onDeactivated, onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => console.log("mounted Post component."));

    onActivated(() => console.log("Post has been activaed."));

    onDeactivated(() => console.log("Post has been de-activaed."));
  },
};
</script>
