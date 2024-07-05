<script setup lang="ts">
import RenderedValue from "./components/Results/RenderedValue.vue";
import Form from "./components/Form.vue";
</script>

<template>
  <main
    class="grid items-center justify-center w-full h-full min-h-screen max-w-full px-500 bg-slate-100 max-md:p-500 max-md:w-full max-sm:!p-0 max-sm:h-full max-sm:!px-0 max-sm:items-stretch"
  >
    <article
      class="grid grid-flow-col grid-cols-2 w-full max-w-[63rem] bg-white rounded-3xl shadow-main max-md:grid-flow-row max-md:grid-cols-1 max-sm:rounded-none"
    >
      <div class="col-span-1 p-500 max-sm:px-300 max-sm:py-400">
        <Form />
      </div>
      <RenderedValue />
    </article>
  </main>
</template>
