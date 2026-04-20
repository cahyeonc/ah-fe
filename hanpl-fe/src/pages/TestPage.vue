<script setup lang="ts">
import { ref } from "vue";
import { BaseButton, BaseInput } from "@/shared/components";

const search = ref("");
const handleSearch = () => {
  console.log("Search");
};
</script>

<template>
  <section id="center">
    <BaseInput v-model="search" placeholder="검색어 입력" clearable />
    <BaseButton type="primary" @click="handleSearch">검색</BaseButton>
  </section>
</template>
