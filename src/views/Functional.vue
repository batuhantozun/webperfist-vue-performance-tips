<template>
  <div class="functional">
    <button @click="renderStateful">render stateful</button>
    <button @click="renderFunctional">render functional</button>

    <functional v-for="item in functionalItems" :key="item" :item="item" />

    <stateful v-for="item in statefulItems" :key="item" :item="item" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onBeforeUpdate, onUpdated } from "@vue/runtime-core";

import Functional from "../components/Functional";
import Stateful from "../components/Stateful.vue";

export default {
  components: { Functional, Stateful },
  setup() {
    const statefulItems = ref([]);
    const functionalItems = ref([]);

    const renderStateful = () => {
      statefulItems.value = Array.from({ length: 1000 }, () => {
        return Math.random();
      });
    };

    const renderFunctional = () => {
      functionalItems.value = Array.from({ length: 1000 }, () => {
        return Math.random();
      });
    };

    onBeforeUpdate(() => {
      console.time();
    });

    onUpdated(() => {
      console.log("Time for render:");
      console.timeEnd();
    });

    return { statefulItems, functionalItems, renderFunctional, renderStateful };
  },
};
</script>
