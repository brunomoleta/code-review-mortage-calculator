<script setup lang="ts">
import NumberInput from "./NumberInput.vue";
</script>
<template>
  <div class="grid grid-flow-row gap-y-300">
    <NumberInput
      :error="errors['mortgageAmount']"
      v-model="mortgageAmount"
      position="prefix"
      icon="£"
      title="Mortgage Amount"
    />
    <div
      class="flex w-full justify-between items-center gap-x-300 max-sm:flex-col max-sm:gap-y-150"
    >
      <NumberInput
        :error="errors['mortgageTerm']"
        v-model="mortgageTerm"
        position="suffix"
        type="number"
        icon="years"
        title="Mortgage Term"

      />
      <NumberInput
        :error="errors['interestRate']"
        v-model="interestRate"
        :scale="2"
        position="suffix"
        icon="%"
        title="Interest Rate"
      />
    </div>
  </div>
</template>
