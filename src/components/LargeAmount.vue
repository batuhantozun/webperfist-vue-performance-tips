<template>
  <div class="large-amount">
    <div>Birth date: {{ formattedDate }}</div>
    <div v-for="thing in sortedArray" :key="thing">
      {{ thing }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { sortedUniq } from "lodash";
import { format } from "date-fns";

export default {
  setup() {
    const birthDate = ref(781606800000);

    const arrayOfThings = ref([1, 2, 2, 3, 3]);

    const sortedArray = computed(() => sortedUniq(arrayOfThings.value));

    const formattedDate = computed(() => format(birthDate.value, "yyyy-MM-dd"));

    return { sortedArray, formattedDate };
  },
};
</script>
