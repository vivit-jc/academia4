<template>
    <div class="main-view">
        abc
    </div>
    <div class="branches">
      <q-card v-for="data in branchData" :key="data.value.text">
        <div class="data">{{ data }}</div>
      </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBranchStore } from '../stores/branch';

const branch = useBranchStore();
const branchData = ref(branch.data)

</script>

<style scoped>
  .main-view{
    width: 100%;
    padding: 10px;
  }
</style>