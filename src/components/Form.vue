<script setup lang="ts">
import { ref } from "vue";
import { Errors } from "../types/types";

import FixedTop from "./Form/FixedTop.vue";
import DynamicInput from "./Form/DynamicInput.vue";

import { RadioGroup } from "./Form";

const valueExists = (value: unknown) => {
  return (
    value === null ||
    (typeof value === "number" && value <= 0) ||
    (typeof value === "string" && value === "")
  );
};

const result = ref<number | null>(null);
const errors = ref<Errors>({});
const mortgageAmount = ref<number | null>(null);
const mortgageTerm = ref<number | null>(null);
const interestRate = ref<number | null>(null);
const mortgageType = ref<"Repayment" | "Interest Only" | null>(null);

const validateField = (key: string, value: any) => {
  if (valueExists(value)) {
    errors.value[key] = "This field is required";
  }
};

const showResults = () => {
  const fields = [
    ["mortgageAmount", mortgageAmount.value],
    ["mortgageTerm", mortgageTerm.value],
    ["interestRate", interestRate.value],
    ["mortgageType", mortgageType.value],
  ];

  fields.forEach(([key, value]) => validateField(key as string, value));
  if (Object.keys(errors.value).length === 0) {
    const principal = mortgageAmount.value!;
    const annualRate = interestRate.value!;
    const termInYears = mortgageTerm.value!;
    const mortgageTypeValue = mortgageType.value;

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termInYears * 12;

    if (mortgageTypeValue === "Repayment") {
      result.value =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else if (mortgageTypeValue === "Interest Only") {
      result.value = principal * monthlyRate;
    }
  }
  console.log(result.value);
};
</script>

<template>
  <form
    @submit.prevent="showResults"
    class="w-full grid gap-y-500 grid-flow-row max-sm:gap-y-300"
  >
    <FixedTop />
    <DynamicInput />

    <RadioGroup/>

    <Button />
  </form>
</template>
