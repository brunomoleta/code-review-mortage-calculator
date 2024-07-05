<template>
  <div class="flex flex-col justify-start items-start gap-y-200">
    <h2 class="text-preset-2 text-white">{{ resultsData.heading }}</h2>
    <p class="text-preset-3 text-slate-300 font-medium">
      {{ resultsData.subHeading }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { resultsData } from "../../data/results.data.ts";
</script>
