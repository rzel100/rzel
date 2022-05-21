<script setup>
import { dataStore } from '@/stores/data.js'
const theData = dataStore()
console.log(theData.textnya)
</script>

<template>
  <div>
    <div id="Header" class="relative bg-blue-600 text-white p-2 group transition-all overflow-hidden">
      <div class="absolute bg-blue-500 top-0 left-0 translate-y-full w-full h-full transition-all group-hover:translate-y-0 z-0"></div>
      <div class="relative group-hover:tracking-[3px] transition-all z-10">RzeL</div>
    </div>
    {{theData.textnya}}
  </div>
</template>

<style>

</style>
