<script setup lang="ts">
import BeforeSubmit from "./BeforeSubmit.vue";
import Display from "./Display.vue";
</script>
<template>
  <div
    class="col-span-1 bg-slate-900 p-500 rounded-xl rounded-tl-none rounded-bl-[5rem] grid grid-flow-row items-center justify-center max-md:rounded-xl max-md:rounded-tl-none max-md:rounded-tr-none max-sm:px-300 max-sm:py-400 max-sm:rounded-none max-sm:w-full"
  >
    <BeforeSubmit v-if="result === undefined" />
    <Display v-else :value="result as number" :term="mortgageTerm as number" />
  </div>
</template>
