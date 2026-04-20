<script setup lang="ts">
import { ElButton } from "element-plus";

interface Props {
  type?: "primary" | "success" | "warning" | "danger" | "default";
  size?: "large" | "default" | "small";
  loading?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "default",
  size: "default",
  loading: false,
  disabled: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <ElButton
    :type="type"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </ElButton>
</template>
