<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useIMask } from "vue-imask";

const props = withDefaults(
  defineProps<{
    position: "prefix" | "suffix";
    error?: string;
    id?: string;
    type: "text" | "number";
    icon?: string;
    title: string;
    mask?: string;
    scale?: number;
    modelValue?: number;
  }>(),
  {
    position: "prefix",
    type: "number",
    mask: ".",
    scale: 2,
  },
);

const emits = defineEmits<{ (e: "update:modelValue", num: number): void }>();

const active = ref(false);
const { el, typed, unmasked } = useIMask(
  {
    mask: Number,
    radix: ".",
    thousandsSeparator: ",",
    scale: props.scale ?? 2,
    mapToRadix: ["."]
  },
  {
    onAccept(e) {
      if (e) {
        emits("update:modelValue", typed.value);
      }
    },
  },
);

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue != null) {
      typed.value = props.modelValue;
    } else {
      unmasked.value = "";
    }
    active.value = props.modelValue ? true : false;
  },
);

onMounted(() => {
  if (props.modelValue != null) {
    typed.value = props.modelValue;
  }
});
</script>

<template>
  <label for={{title}} :id="title" class="w-full grid grid-flow-row gap-y-150">
    <span class="text-preset-4 text-slate-700">{{ title }}</span>
    <div
      class="flex rounded-[0.25rem] border border-slate-500 hover:border-slate-900 transition-colors"
      :class="{ 'border border-lime-100': active, 'border-red': error?.length }"
    >
      <span
        class="inline-flex px-200 py-150 items-center justify-center bg-slate-100 rounded-tl-[0.25rem] rounded-bl-[0.25rem] text-preset-3 text-slate-700 transition-colors"
        :class="{
          '!bg-red text-white': error?.length,
          '!bg-lime-100 text-slate-900': active,
        }"
        v-if="position === 'prefix'"
        >{{ icon }}</span
      >
      <input
        type="text"
        name={{title}}
        :id="id"
        ref="el"
        class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full ps-100 outline-none text-preset-3 text-slate-900"
        :class="{
          'rounded-br-[0.25rem] rounded-tr-[0.25rem]': position === 'prefix',
          'rounded-bl-[0.25rem] rounded-tl-[0.25rem]': position === 'suffix',
        }"
      />
      <span
        v-if="position === 'suffix'"
        class="inline-flex justify-end px-200 py-150 items-center bg-slate-100 rounded-tr-[0.25rem] rounded-br-[0.25rem] text-preset-3 text-slate-700 transition-colors"
        :class="{
          '!bg-red text-white': error?.length,
          '!bg-lime-100 text-slate-900': active,
        }"
        >{{ icon }}</span
      >
    </div>
    <span class="text-preset-5 text-red" v-show="error">{{ error }}</span>
  </label>
</template>
