<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps<{value:number, term:number}>()

  const computedValue = computed(() => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(props.value);
  });

  const computedTermValue = computed(()=>{
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format((props.value *( props.term *12)));
  })

</script>

<template>
  <div class="flex flex-col gap-y-500 items-start justify-start">
    <hgroup class="flex flex-col justify-start items-start gap-y-200">
      <h3 class="text-preset-2 text-white">Your results</h3>
      <p class=" text-preset-3 text-slate-300 font-medium">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
    </hgroup>

    <div class=" w-full h-full border-t-4 border-t-lime-100 rounded-lg p-400 bg-black/25">
      <div class="flex flex-col items-start justify-normal gap-y-100">
        <span class=" text-preset-4 text-slate-300">Your monthly repayments</span>
        <span class="text-preset-1 text-lime-100">{{ computedValue }}</span>
        <hr class="my-400 text-slate-300/25 w-full h-[0.0625rem]"/>
        
        <div class="flex flex-col items-start justify-normal gap-y-100">
          <span class="text-preset-4 text-slate-300">Total you'll repay over the term</span>
          <span class="text-preset-2 text-white">{{ computedTermValue }}</span>
        </div>
      </div>

    </div>
  </div>
</template>