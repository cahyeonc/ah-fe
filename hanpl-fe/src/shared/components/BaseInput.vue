<script setup lang="ts">
import { ElInput } from "element-plus";

interface Props {
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  type?: "text" | "password" | "number" | "textarea";
}

withDefaults(defineProps<Props>(), {
  type: "text",
  clearable: false,
  disabled: false,
});

const model = defineModel<string>();
</script>

<template>
  <ElInput
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :type="type"
  />
</template>
