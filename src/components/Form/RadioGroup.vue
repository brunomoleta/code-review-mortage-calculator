<script setup lang="ts">
import { provide } from "vue";
import Radio from "./Radio.vue";
import { formData } from "../../data/form.data.ts";
defineProps();

const modelValue = defineModel<string | null>();

provide("radio", modelValue);
</script>

<template>
  <div class="grid grid-flow-row gap-y-150">
    <fieldset>
      <span class="text-preset-4 text-slate-700"
        >{{ formData.subheading[3] }}}</span
      >
      <Radio
        v-for="(value, index) in formData.radio"
        :key="index"
        :value="value"
      >
        {{ value }}
      </Radio>
      <span v-if="errors['mortgageType']" class="text-preset-5 text-red">{{
        errors["mortgageType"]
      }}</span>
    </fieldset>
  </div>
</template>
