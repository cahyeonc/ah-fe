<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTE_NAMES } from "@/core/router/route-names";
import type { Product } from "../types/product.types";

const props = defineProps<{ product: Product }>();
const router = useRouter();

const goDetail = () => {
  router.push({
    name: ROUTE_NAMES.PRODUCT_DETAIL,
    params: { id: props.product.id },
  });
};
</script>

<template>
  <el-card class="product-card" shadow="hover" @click="goDetail">
    <img :src="product.image" :alt="product.name" class="product-card__image" />
    <div class="product-card__info">
      <el-tag size="small" type="info">{{ product.category }}</el-tag>
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__price">{{ product.price.toLocaleString() }}원</p>
      <el-tag v-if="product.stock === 0" type="danger" size="small"
        >품절</el-tag
      >
      <el-tag v-else type="success" size="small"
        >재고 {{ product.stock }}개</el-tag
      >
    </div>
  </el-card>
</template>

<style scoped>
.product-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
}
.product-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}
.product-card__info {
  padding: 12px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.product-card__name {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
}
.product-card__price {
  font-size: 16px;
  font-weight: 700;
  color: #409eff;
  margin: 0;
}
</style>
