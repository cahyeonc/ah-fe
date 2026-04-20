<script setup lang="ts" generic="T">
import { ElTable, ElTableColumn } from "element-plus";

interface Column {
  prop: string;
  label: string;
  width?: number | string;
  align?: "left" | "center" | "right";
}

interface Props {
  data: T[];
  columns: Column[];
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: false,
});

defineEmits<{
  rowClick: [row: T];
}>();
</script>

<template>
  <ElTable
    :data="data"
    v-loading="loading"
    @row-click="$emit('rowClick', $event)"
  >
    <ElTableColumn
      v-for="col in columns"
      :key="col.prop"
      :prop="col.prop"
      :label="col.label"
      :width="col.width"
      :align="col.align"
    />
  </ElTable>
</template>
