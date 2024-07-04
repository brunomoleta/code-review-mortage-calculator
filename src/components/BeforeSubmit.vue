<script setup lang="ts">
import { Calculator } from "./";
</script>

<template>
  <div class="grid grid-flow-row gap-y-200 w-full items-center justify-center text-center ">
    <Calculator class="w-[12rem] h-[12rem] mx-auto" />
    <h1 class="text-preset-2 text-white">Results shown here</h1>
    <p class="text-preset-4 text-slate-300">
      Complete the form and click “calculate repayments” to see what your monthly repayments would be.
    </p>
  </div>
</template>
