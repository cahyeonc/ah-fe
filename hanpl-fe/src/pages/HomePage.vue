<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const guidePage = () => {
  router.push({ name: "guide" });
};
</script>

<template>
  <section id="center">
    <h2>vite + vue + ts</h2>

    <Button @click="guidePage">가이드 →</Button>
  </section>

  <!-- <div class="ticks"></div>
  <section id="spacer"></section> -->
</template>
