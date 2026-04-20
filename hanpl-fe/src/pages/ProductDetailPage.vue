<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductDetail } from "@/features/product/composables/useProduct";
import { ROUTE_NAMES } from "@/core/router/route-names";

const route = useRoute();
const router = useRouter();
const { product, isLoading, error, fetchProduct } = useProductDetail();

onMounted(() => {
  fetchProduct(Number(route.params.id));
});

const goBack = () => {
  router.push({ name: ROUTE_NAMES.PRODUCT_LIST });
};
</script>

<template>
  <div class="product-detail">
    <el-button @click="goBack">← 목록으로</el-button>

    <div v-if="isLoading" class="product-detail__loading">
      <el-skeleton :rows="5" animated />
    </div>

    <el-result v-else-if="error" icon="error" :title="error" />

    <div v-else-if="product" class="product-detail__content">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-detail__image"
      />
      <div class="product-detail__info">
        <el-tag type="info">{{ product.category }}</el-tag>
        <h1 class="product-detail__name">{{ product.name }}</h1>
        <p class="product-detail__description">{{ product.description }}</p>
        <p class="product-detail__price">
          {{ product.price.toLocaleString() }}원
        </p>
        <el-tag v-if="product.stock === 0" type="danger">품절</el-tag>
        <el-tag v-else type="success">재고 {{ product.stock }}개</el-tag>
        <el-button
          type="primary"
          size="large"
          :disabled="product.stock === 0"
          style="margin-top: 16px"
        >
          장바구니 담기
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}
.product-detail__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.product-detail__image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.product-detail__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.product-detail__name {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
.product-detail__price {
  font-size: 28px;
  font-weight: 700;
  color: #409eff;
  margin: 0;
}
.product-detail__description {
  color: #666;
  line-height: 1.6;
}
</style>
