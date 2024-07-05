<script setup lang="ts">
import { formData } from "../../data/form.data.ts";

const resetValues = () => {
  errors.value = {};
  mortgageAmount.value = null;
  mortgageType.value = null;
  mortgageTerm.value = null;
  interestRate.value = null;
  result.value = null;
};
</script>
<template>
  <div
    class="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-100"
  >
    <h1 class="text-preset-2">{{ formData.heading }}</h1>
    <button
      type="reset"
      class="text-preset-4 underline text-slate-700"
      @click="resetValues"
    >
      Clear All
    </button>
  </div>
</template>
