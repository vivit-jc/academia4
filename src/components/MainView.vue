<template>
    <div class="main-view">
        abc
    </div>
    <div class="branches">
      <q-card v-for="branch in branchData" :key="branch.text">
        <div class="data">{{ branch.text }}</div>
      </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import { useBranchStore } from '../stores/branch';

const branch = useBranchStore();
const branchData = ref([] as Branch[])

watch(
  () => branch.data,
  (newValue) => {
    branchData.value = newValue
  },
)

</script>

<style scoped>
  .main-view{
    width: 100%;
    padding: 10px;
  }
</style>