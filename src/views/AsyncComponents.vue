<template>
  <div class="async-components">
    <button @click="renderComponent">Render Large Amount Component</button>

    <!-- <large-amount v-if="isRender" /> -->

    <Suspense v-if="isRender">
      <template #default>
        <large-amount />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

// import LargeAmount from "../components/LargeAmount.vue";

const LargeAmount = defineAsyncComponent(() =>
  import("../components/LargeAmount.vue")
);

export default {
  components: { LargeAmount },
  setup() {
    const isRender = ref(false);

    const renderComponent = () => (isRender.value = true);

    return { isRender, renderComponent };
  },
};
</script>
