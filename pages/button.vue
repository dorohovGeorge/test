<script setup>
import { useDark } from '@vueuse/core'
const isDark = false
</script>

<template>
  <div class="flex">
    <el-button color="#626aef" :dark="isDark">Default</el-button>
    <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

    <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
    <el-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</el-button
    >
  </div>
</template>
