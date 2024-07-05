<script setup lang="ts">
import Calculator from "../Form/Icon/Calculator.vue";
import {initialMessage} from "../../data/results.data.ts";
</script>

<template>
  <div
    class="grid grid-flow-row gap-y-200 w-full items-center justify-center text-center"
  >
    <Calculator class="w-[12rem] h-[12rem] mx-auto" />
    <h2 class="text-preset-2 text-white">{{initialMessage.heading}}</h2>
    <p class="text-preset-4 text-slate-300">
      {{ initialMessage.subHeading}}
    </p>
  </div>
</template>
