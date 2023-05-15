<template>
    <div class="main-view">
        abc
    </div>
    <div class="branches">
      <q-card v-for="branch in branchData" :key="branch.text">
        <div class="branch" @click="clickBranch(branch)">{{ branch.text }}</div>
      </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import { useBranchStore } from '../stores/branch';
import { useScenarioStore } from 'src/stores/scenario';


const branch = useBranchStore();
const branchData = ref([] as Branch[])
const sdata = useScenarioStore()

watch(
  () => branch.data,
  (newValue) => {
    branchData.value = newValue
  },
)

function clickBranch(branch: Branch){
  sdata.no = Number(branch.link)
}

</script>

<style scoped>
  .main-view{
    width: 100%;
    padding: 10px;
  }
</style>