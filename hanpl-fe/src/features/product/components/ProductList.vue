<script setup lang="ts">
import { onMounted } from "vue";
import { useProduct } from "../composables/useProduct";
import ProductCard from "./ProductCard.vue";

const { products, isLoading, error, fetchProducts } = useProduct();

onMounted(fetchProducts);
</script>

<template>
  <div class="product-list">
    <div v-if="isLoading" class="product-list__loading">
      <el-skeleton :rows="3" animated />
    </div>
    <div v-else-if="error" class="product-list__error">
      <el-result icon="error" :title="error" />
    </div>
    <div v-else class="product-list__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}
</style>
