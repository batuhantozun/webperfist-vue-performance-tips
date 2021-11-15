<template>
  <div class="home">
    <div>Price: ${{ product.price }}</div>
    <div>Total: ${{ product.price * product.quantity }}</div>
    <div>Taxes: ${{ totalPriceWithTax }}</div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";

export default {
  setup() {
    const product = reactive({
      price: 5.0,
      quantity: 2,
    });

    const tax = ref(0.8);

    const totalPriceWithTax = computed(
      () => product.price * product.quantity * tax.value
    );

    return { product, totalPriceWithTax };
  },
};
</script>
