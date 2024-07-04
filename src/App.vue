<script setup lang="ts">
// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';
import { BeforeSubmit, NumberInput, Radio, RadioGroup, Button, CalculatorTerm, Display,  } from './components';
import { ref } from 'vue';

interface Errors {
  [key: string]: string;
}

const mortgageAmount = ref<number>()
const mortgageTerm = ref<number>()
const interestRate = ref<number>()
const mortgageType = defineModel<string>('mortgageType')

const result = ref<number>()
const errors = ref<Errors>({})


const showResults = () => {
  const fields = [
    ['mortgageAmount', mortgageAmount.value],
    ['mortgageTerm', mortgageTerm.value],
    ['interestRate', interestRate.value],
    ['mortgageType', mortgageType.value],
  ];

  fields.forEach(([key, value]) => validateField(key as string, value));
  if (Object.keys(errors.value).length === 0) {
    const principal = mortgageAmount.value!;
    const annualRate = interestRate.value!;
    const termInYears = mortgageTerm.value!;
    const mortgageTypeValue = mortgageType.value;

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termInYears * 12;

    if (mortgageTypeValue === 'Repayment') {
      result.value = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else if (mortgageTypeValue === 'Interest Only') {
      result.value = principal * monthlyRate;
    }
  }
  console.log(result.value)
};

const resetValues = () => {
  errors.value = {};
  mortgageAmount.value = undefined;
  mortgageType.value = undefined;
  mortgageTerm.value = undefined;
  interestRate.value = undefined;
  result.value = undefined;
}
const valueExists = (value: unknown) => {
  return value === undefined || (typeof value === 'number' && value <= 0) || (typeof value === 'string' && value === '')
}

const validateField = (key: string, value: any) => {
  if (!!valueExists(value)) {
    errors.value[key] = "This field is required";
  }
};

</script>

<template>
  <main class="grid items-center justify-center w-full h-full min-h-screen max-w-full px-500 bg-slate-100 max-md:p-500 max-md:w-full max-sm:!p-0 max-sm:h-full max-sm:!px-0 max-sm:items-stretch">
    <section class="grid grid-flow-col grid-cols-2 w-full max-w-[63rem] bg-white rounded-3xl shadow-main max-md:grid-flow-row max-md:grid-cols-1 max-sm:rounded-none">
      <!-- Form -->
      <div class="col-span-1 p-500 max-sm:px-300 max-sm:py-400">
        <form @submit.prevent="showResults" class="w-full grid gap-y-500 grid-flow-row max-sm:gap-y-300">
          <div class="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-100">
            <h1 class="text-preset-2">Mortgage Calculator</h1>
            <button type="reset" class="text-preset-4 underline text-slate-700" @click="resetValues">
              Clear All
            </button>
          </div>
          <div class="grid grid-flow-row gap-y-300">
            <NumberInput :error="errors['mortgageAmount']" v-model="mortgageAmount" position="prefix" type="number"
              icon="£" title="Mortgage Amount" />
            <div class="flex w-full justify-between items-center gap-x-300 max-sm:flex-col max-sm:gap-y-150">
              <NumberInput :error="errors['mortgageTerm']" v-model="mortgageTerm" :min="1" position="suffix"
                type="number" icon="years" title="Mortgage Term" />
              <NumberInput :error="errors['interestRate']" v-model="interestRate" :scale="2" :max="100"
                position="suffix" type="number" icon="%" title="Interest Rate" />
            </div>
            <RadioGroup class="grid grid-flow-row gap-y-150" v-model="mortgageType">
              <span class=" text-preset-4 text-slate-700">Mortgage Type</span>
              <Radio value="Repayment">Repayment</Radio>
              <Radio value="Interest Only">Interest Only</Radio>
              <span v-if="errors['mortgageType']" class=" text-preset-5 text-red">{{ errors["mortgageType"] }}</span>
            </RadioGroup>
          </div>
          <div class="max-sm:w-full">
            <Button class="max-sm:w-full">
              <CalculatorTerm />
              <span class="text-preset-3 text-slate-900">
                Calculate Repayments
              </span>
            </Button>
          </div>
        </form>
      </div>
      <!-- results -->
      <div
        class="col-span-1 bg-slate-900 p-500 rounded-xl rounded-tl-none rounded-bl-[5rem]  grid grid-flow-row items-center justify-center max-md:rounded-xl max-md:rounded-tl-none max-md:rounded-tr-none max-sm:px-300 max-sm:py-400 max-sm:rounded-none max-sm:w-full">
        <BeforeSubmit v-if="result === undefined" />
        <Display v-else :value="result as number" :term="mortgageTerm as number" />
      </div>
    </section>
  </main>
</template>
