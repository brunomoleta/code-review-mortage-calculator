<script setup lang="ts">
import FixedTop from "./FixedTop.vue";
import DynamicResult from "./DynamicResult.vue";
</script>

<template>
  <section class="flex flex-col gap-y-500 items-start justify-start">
    <FixedTop />
    <div
      class="w-full h-full border-t-4 border-t-lime-100 rounded-lg p-400 bg-black/25"
    >
      <DynamicResult term="50" value="50" />
    </div>
  </section>
</template>
