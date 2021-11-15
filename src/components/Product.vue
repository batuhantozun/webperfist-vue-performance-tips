<template>
  <div>
    {{ product.text }}
    -
    {{ new Date() }}
  </div>
</template>

<script>
export default {
  props: ["product"],
  setup() {},
};
</script>
