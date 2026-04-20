<script setup lang="ts">
import { useRouter } from "vue-router";
import { BaseButton } from "@/shared/components";
import { ROUTE_NAMES } from "@/core/router/route-names";

const router = useRouter();

const productPage = () => {
  router.push({ name: ROUTE_NAMES.PRODUCT_LIST });
};

const guidePage = () => {
  router.push({ name: ROUTE_NAMES.GUIDE });
};
</script>

<template>
  <section id="center">
    <h2>vite + vue + ts</h2>

    <BaseButton @click="productPage">상품 →</BaseButton>
    <BaseButton @click="guidePage">가이드 →</BaseButton>
  </section>

  <!-- <div class="ticks"></div>
  <section id="spacer"></section> -->
</template>
