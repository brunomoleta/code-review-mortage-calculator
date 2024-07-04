<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import RadioIcon from './RadioIcon.vue';

const props = defineProps<{
  value?: string
}>();

const checked = inject('radio', ref<string>())

const isSelected = computed(() => {
  return checked.value === props.value
})


</script>
<template>
  <label
    class="w-full h-full border border-slate-500 flex items-center justify-start px-200 py-150 rounded-[0.25rem] text-preset-3 text-slate-900"
    :class="{ ' !bg-lime-100/15 !border-lime-100': isSelected }">
    <input class="sr-only" type="radio" :value="props.value" v-model="checked">
    <RadioIcon class="mr-150" :isSelected="isSelected" />
    <slot></slot>
  </label>
</template>