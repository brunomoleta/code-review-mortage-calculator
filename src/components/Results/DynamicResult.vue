<script setup lang="ts">
import { formattedTime, formattedValue } from "../../utils/utils.ts";

const props = defineProps<{ value: number; term: number }>();

const computedValue = formattedValue(props.value);
const computedTermValue = formattedTime(props.value, props.term);
</script>
<template>
  <div class="flex flex-col items-start justify-normal gap-y-100">
    <h3 class="text-preset-4 text-slate-300">Your monthly repayments</h3>
    <span class="text-preset-1 text-lime-100">{{ computedValue }}</span>
    <hr class="my-400 text-slate-300/25 w-full h-[0.0625rem]" />

    <div class="flex flex-col items-start justify-normal gap-y-100">
      <h3 class="text-preset-4 text-slate-300">
        Total you'll repay over the term
      </h3>
      <span class="text-preset-2 text-white">{{ computedTermValue }}</span>
    </div>
  </div>
</template>
