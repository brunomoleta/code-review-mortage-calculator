<template>
  <div class="max-sm:w-full">
    <CalculatorTerm />
    <span class="text-preset-3 text-slate-900"> Calculate Repayments </span>
    <button
      class="bg-lime-100 flex items-center justify-center gap-x-150 h-[3.5rem] rounded-[62.4375rem] px-500 w-auto"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { CalculatorTerm } from "./index.ts";
</script>
