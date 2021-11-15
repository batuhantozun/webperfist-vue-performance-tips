<template>
  <div class="list-rendering">
    <product v-for="product in products" :product="product" :key="product.id" />

    <div>
      <button @click="addItem">Add Item</button>
      <button @click="removeItem">Remove Item</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import Product from "../components/Product.vue";

export default {
  components: { Product },
  setup() {
    const products = reactive([
      { id: 1, text: "Macbook Air M1" },
      { id: 2, text: "Philips Hue" },
      { id: 3, text: "iPhone 13 Pro Max" },
    ]);

    const removeItem = () => products.pop();

    const newProduct = { id: 4, text: "Macbook Pro 14" };

    const addItem = () => products.push(newProduct);

    return { products, addItem, removeItem };
  },
};
</script>
